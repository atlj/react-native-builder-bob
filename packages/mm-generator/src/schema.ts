import path from 'path';
import fs from 'fs-extra';

import type { SchemaType } from '@react-native/codegen/lib/CodegenSchema';

import { TypeScriptParser } from '@react-native/codegen/lib/parsers/typescript/parser';

import { z } from 'zod';

const CodegenConfig = z.object({
  name: z.string(),
  jsSrcsDir: z.string(),
  type: z.union([
    z.literal('modules'),
    z.literal('components'),
    z.literal('all'),
  ]),
});

type CodegenConfig = z.infer<typeof CodegenConfig>;

function parseCodegenConfig() {
  const packageJson = fs.readJsonSync(path.join(process.cwd(), 'package.json'));

  const codegenConfigParse = CodegenConfig.safeParse(packageJson.codegenConfig);
  if (!codegenConfigParse.success) {
    throw new Error('Invalid codegenConfig');
  }

  return codegenConfigParse.data;
}

const typescriptParser = new TypeScriptParser();

function generateSchema(codegenConfig: CodegenConfig): SchemaType {
  const files = fs
    .readdirSync(codegenConfig.jsSrcsDir)
    .map((file) => {
      return path.join(codegenConfig.jsSrcsDir, file);
    })
    .filter((file) => {
      return fs.statSync(file).isFile();
    });

  return files.reduce(
    (merged, filename) => {
      const contents = fs.readFileSync(filename, 'utf8');

      if (
        contents &&
        (/export\s+default\s+\(?codegenNativeComponent</.test(contents) ||
          /extends TurboModule/.test(contents))
      ) {
        const schema = typescriptParser.parseFile(filename);

        if (schema && schema.modules) {
          merged.modules = { ...merged.modules, ...schema.modules };
        }
      }
      return merged;
    },
    { modules: {} }
  );
}

export { parseCodegenConfig, generateSchema };
