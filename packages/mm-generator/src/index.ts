import { generateSchema, parseCodegenConfig } from './schema';
import {
  StructCollector,
  convertProtocolMethodToSwiftCall,
  createAliasResolver,
  serializeMethod,
} from './serializeMethod';

const codegenConfig = parseCodegenConfig();
const schema = generateSchema(codegenConfig);

for (const key of Object.keys(schema.modules)) {
  const module = schema.modules[key];

  if (!module || module?.type === 'Component') {
    // TODO handle views
    continue;
  }

  const aliasResolver = createAliasResolver(module.aliasMap);
  const structCollector = new StructCollector();

  const serializedModules = module.spec.properties
    .filter((property) => property.name !== 'getConstants')
    .map((property) =>
      serializeMethod(
        module.moduleName,
        property,
        structCollector,
        aliasResolver
      )
    );

  convertProtocolMethodToSwiftCall(serializedModules[0][0].protocolMethod);

  const contents = `#import "${module.moduleName}.h"

@implementation ${module.moduleName}{
  ${module.moduleName}Swift* swift_impl; 
}

RCT_EXPORT_MODULE()

- (instancetype)init {
    swift_impl = [[${module.moduleName}Swift alloc] init];
    return self;
}

+ (BOOL)requiresMainQueueSetup {
    return NO;
}

# pragma mark - Methods

${serializedModules
  .map(([method]) => convertProtocolMethodToSwiftCall(method!.protocolMethod))
  .join('\n\n')}

# pragma mark - New Arch Pointer

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::${module.moduleName}SpecJSI>(params);
}
#endif

@end`;

  console.log(contents);
}
