import yargs from 'yargs';
import { generateSchema, parseCodegenConfig } from './schema';
import chalk from 'chalk'
import {
  StructCollector,
  convertProtocolMethodToSwiftCall,
  createAliasResolver,
  serializeMethod,
} from './serializeMethod';

const args: Record<string, yargs.Options> = {
  'swift-header': {
    type: 'string',
    description: `The name of the Swift header. This header is imported at the top of the generated mm file. Example: ${chalk.cyan( 'MyModule-Swift.h' )}`,
    defaultDescription: 'By default, we will look for a podspec in the current directory and use the name of the pod as the Swift header.',
  },
  'output': {
    type: 'string',
    description: `The output directory for the generated mm file. Example: ${chalk.cyan('/ios/MyModule.mm')}`,
    defaultDescription: `By default, we will use ${chalk.cyan('ios/<ModuleName>.mm')} as the output file.`,
    normalize: true
  }
}

async function main(argv: yargs.Arguments<any>) {
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
}

yargs
  .command('$0', 'generate mm files from typescript spec', args, main)
  .demandCommand()
  .recommendCommands()
  .fail((message, error) => {
    console.log('\n');

    if (error) {
      console.log(chalk.red(error.message));
      throw error;
    }

    if (message) {
      console.log(chalk.red(message));
    } else {
      console.log(
        chalk.red(`An unknown error occurred. See '--help' for usage guide.`)
      );
    }

    process.exit(1);
  })
  .strict().argv;
