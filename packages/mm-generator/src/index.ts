import * as z from 'zod';
import { execSync } from 'child_process';

import fs from 'fs-extra';
import path from 'path';

import type {
  NamedShape,
  NativeModuleParamTypeAnnotation,
  NativeModuleReturnTypeAnnotation,
  Nullable,
  SchemaType,
} from '@react-native/codegen/lib/CodegenSchema';

const BASIC_KEYWORDS = [
  'BooleanTypeAnnotation',
  'DoubleTypeAnnotation',
  'Int32TypeAnnotation',
  'StringTypeAnnotation',
  'NumberTypeAnnotation',
  'FloatTypeAnnotation',
] satisfies NativeModuleParamTypeAnnotation['type'][];

type BasicType = (typeof BASIC_KEYWORDS)[number];
type ComplexType = Exclude<NativeModuleParamTypeAnnotation['type'], BasicType>;

const BASIC_KEYWORD_MAP: Record<BasicType, string> = {
  BooleanTypeAnnotation: 'BOOL',
  DoubleTypeAnnotation: 'double',
  Int32TypeAnnotation: 'int',
  StringTypeAnnotation: 'NSString',
  NumberTypeAnnotation: 'NSNumber',
  FloatTypeAnnotation: 'float',
} as const;

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

const codegenConfig = parseCodegenConfig();
const schema = generateSchema(codegenConfig);

for (const key of Object.keys(schema.modules)) {
  const module = schema.modules[key];

  if (!module || module?.type === 'Component') {
    // TODO handle views
    continue;
  }

  const moduleProperties = module.spec.properties;

  for (const module of moduleProperties) {
    if (module.typeAnnotation.type === 'FunctionTypeAnnotation') {
      const signature = generateMethodSignature(
        module.name,
        module.typeAnnotation.params,
        module.typeAnnotation.returnTypeAnnotation
      );
      console.log(signature);
    } else {
      console.log(module.typeAnnotation.type);
    }
  }
}

function generateMethodSignature(
  methodName: string,
  params: readonly NamedShape<Nullable<NativeModuleParamTypeAnnotation>>[],
  returnType: Nullable<NativeModuleReturnTypeAnnotation>
) {
  const isPromise = returnType.type === 'PromiseTypeAnnotation';

  return `RCT_EXPORT_METHOD(${generateArgsSignature(methodName, params)}${
    isPromise
      ? ' resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject'
      : ''
  }) {
    return [self.swiftImpl ${generateArgsSignature(methodName, params, false)}${
      isPromise ? ' resolve:resolve reject:reject' : ''
    }];
}`;
}

function generateArgsSignature(
  methodName: string,
  params: readonly NamedShape<Nullable<NativeModuleParamTypeAnnotation>>[],
  addType: boolean = true
) {
  let result = `${methodName}`;
  for (let index = 0; index < params.length; index++) {
    const param = params[index]!;

    if (index > 0) {
      result += ` ${param.name}`;
    }

    result += `:${
      addType ? '(' + generateTypeSignature(param.typeAnnotation) + ')' : ''
    }${param.name}`;
  }

  return result;
}

function generateTypeSignature(
  type: Nullable<NativeModuleParamTypeAnnotation>
) {
  if (BASIC_KEYWORDS.includes(type.type)) {
    return handleBasicType(type.type);
  }

  return handleComplexType(type.type);
}

function handleBasicType(type: BasicType): string {
  return BASIC_KEYWORD_MAP[type];
}

function handleComplexType(type: ComplexType): string {
  switch (type) {
    case 'UnionTypeAnnotation':
    // Inspect the source for this
  }

  return type; // TODO remove me
}

// -*** TODO ***-
// Handle callback
// Handle promise
// Handle enum
// Handle struct
// Handle union
// Handle nullable
// Handle/investigate getConstants differently (optional)
// Check if non promise returns work
// -*** TODO ***-
