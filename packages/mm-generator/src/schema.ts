import path from 'path';
import fs from 'fs-extra';
import { execSync } from 'child_process';

import type { SchemaType } from '@react-native/codegen/lib/CodegenSchema';

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

function generateSchema(codegenConfig: CodegenConfig): SchemaType {
  const schemaParserPath = require.resolve(
    '@react-native/codegen/lib/cli/combine/combine-js-to-schema-cli'
  );

  const generatedSchemaPath = path.join(
    process.cwd(),
    'schemas',
    `${codegenConfig.name}.schema.json`
  );

  if (!fs.existsSync(generatedSchemaPath)) {
    fs.ensureFileSync(generatedSchemaPath);
  }

  const commandToGenerateSchema = `node ${schemaParserPath} --platform ios ${generatedSchemaPath} ${codegenConfig.jsSrcsDir}`;

  execSync(commandToGenerateSchema);

  return fs.readJsonSync(generatedSchemaPath);
}

export { parseCodegenConfig, generateSchema };
