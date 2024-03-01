import yargs from 'yargs';
import fs from 'fs';
import path from 'path';
import { generateSchema, parseCodegenConfig } from './schema';
import chalk from 'chalk';
import {
  StructCollector,
  convertProtocolMethodToSwiftCall,
  createAliasResolver,
  serializeMethod,
} from './serializeMethod';

const args = {
  'swift-header': {
    type: 'string',
    description: `The name of the Swift header. This header is imported at the top of the generated mm file. Example: ${chalk.cyan(
      'MyModule-Swift.h'
    )}`,
    defaultDescription:
      'By default, we will look for a podspec in the current directory and use the name of the pod as the Swift header.',
    alias: 's',
  },
  'dry-run': {
    type: 'boolean',
    description: 'Print the generated mm files without writing them to the file system.',
    alias: 'd',
  },
} satisfies Record<string, yargs.Options>;

/**
 * Looks for a podspec file in the current directory and returns the name of the pod appended with -Swift.h.
 */
function resolveSwiftHeader() {
  const podspec = fs
    .readdirSync(process.cwd())
    .find((file) => file.endsWith('.podspec'));

  if (podspec) {
    const podName = podspec.split('.podspec')[0];
    return `${podName}-Swift.h`;
  }

  return null;
}

async function main(
  argv: yargs.ArgumentsCamelCase<yargs.InferredOptionTypes<typeof args>>
) {
  const swiftHeader = argv.swiftHeader ?? resolveSwiftHeader();

  if (swiftHeader === null) {
    throw new Error(
      'Could not find a .podspec in the current directory. Make sure you are running this command from the root of your React Native project. Alternatively, you can specify the Swift header with the --swift-header flag. To see the usage: --help'
    );
  }

  const codegenConfig = parseCodegenConfig();
  const schema = generateSchema(codegenConfig);

  const filesToWrite: [filePath: string, fileContents: string][] =
    Object.values(schema.modules)
      .filter((module) => module.type === 'NativeModule')
      .map((module) => {
        if (module.type !== 'NativeModule') {
          throw new Error('Module type is not NativeModule');
        }

        const aliasResolver = createAliasResolver(module.aliasMap);
        const structCollector = new StructCollector();

        const serializedMethods = module.spec.properties
          .filter((property) => property.name !== 'getConstants')
          .map((property) =>
            serializeMethod(
              module.moduleName,
              property,
              structCollector,
              aliasResolver
            )
          );

        return [
          path.join('ios', `${module.moduleName}.mm`),
          `#import "${module.moduleName}.h"
#import "${swiftHeader}"

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

${serializedMethods
  .map(([method]) =>
    convertProtocolMethodToSwiftCall(method!.protocolMethod)
  )
  .join('\n\n')}

# pragma mark - New Arch Pointer

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
  (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::${
    module.moduleName
  }SpecJSI>(params);
}
#endif

@end`,
        ];
      });

  if(argv.dryRun) {
    console.log(filesToWrite.map(([filePath, fileContent]) => `File: ${filePath}\n${fileContent}`).join('\n\n'));
    return;
  }

  try {
    Promise.allSettled(
      filesToWrite.map(([filePath, fileContent]) =>
        fs.promises.writeFile(filePath, fileContent)
      )
    );
  } catch (e) {
    console.error(e);
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
