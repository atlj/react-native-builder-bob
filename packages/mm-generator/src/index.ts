import * as z from 'zod'
import {execSync} from 'child_process'

import fs from 'fs-extra'
import path from 'path'

import { type NamedShape, type NativeModuleParamTypeAnnotation, type NativeModuleReturnTypeAnnotation, type Nullable, type SchemaType } from '@react-native/codegen/lib/CodegenSchema'

const CodegenConfig = z.object({
  name: z.string(),
  jsSrcsDir: z.string(),
  type: z.union([z.literal('modules'), z.literal('components'), z.literal('all')]),
})

type CodegenConfig = z.infer<typeof CodegenConfig>

function parseCodegenConfig(){
  const packageJson = fs.readJsonSync(path.join(process.cwd(), 'package.json'))


  const codegenConfigParse = CodegenConfig.safeParse(packageJson.codegenConfig)
  if(!codegenConfigParse.success){
    throw new Error('Invalid codegenConfig')
  }

  return codegenConfigParse.data
}


function generateSchema(codegenConfig: CodegenConfig): SchemaType {
  const schemaParserPath = require.resolve('@react-native/codegen/lib/cli/combine/combine-js-to-schema-cli')

  const generatedSchemaPath = path.join(process.cwd(), 'schemas',`${codegenConfig.name}.schema.json`)

  if(!fs.existsSync(generatedSchemaPath)){
    fs.ensureFileSync(generatedSchemaPath)
  }

  const commandToGenerateSchema = `node ${schemaParserPath} --platform ios ${generatedSchemaPath} ${codegenConfig.jsSrcsDir}`

  execSync(commandToGenerateSchema)

  return fs.readJsonSync(generatedSchemaPath)
}


const codegenConfig = parseCodegenConfig()
const schema = generateSchema(codegenConfig)

for (const key of Object.keys(schema.modules)){
  const module = schema.modules[key]

  if(!module || module?.type === 'Component'){
    // TODO handle views
    continue
  }

  const properties = module.spec.properties

  for (const property of properties) {
    const result = handleAnnotation(property)
    console.log(result)

  }

}

// Generate objc code from schema
function handleAnnotation(param: NamedShape<Nullable<NativeModuleParamTypeAnnotation>> | NamedShape<Nullable<NativeModuleReturnTypeAnnotation>>): string {
  switch (param.typeAnnotation.type) {
    case 'BooleanTypeAnnotation':
      return `BOOL`
    case 'NullableTypeAnnotation':
      return `Nullable ${handleAnnotation({typeAnnotation: param.typeAnnotation.typeAnnotation, name: param.name, optional: true})}`
    case 'DoubleTypeAnnotation':
      return `double`
    case 'Int32TypeAnnotation':
      return `int`
    case 'StringTypeAnnotation':
      return `NSString`
    case 'NumberTypeAnnotation':
      return `NSNumber`
    case 'FloatTypeAnnotation':
      return `float`
    case 'VoidTypeAnnotation':
      return `void`
    case 'ArrayTypeAnnotation':
      return `NSArray`
    case 'EnumDeclaration':
      return `NSInteger`
    case 'ObjectTypeAnnotation':
      return `NSDictionary`
    case 'FunctionTypeAnnotation':
      const params = param.typeAnnotation.params.map((param) => `(${handleAnnotation(param)} *) ${param.name}`).join(': ')
      const result = `(${handleAnnotation({typeAnnotation: param.typeAnnotation.returnTypeAnnotation, name: param.name, optional: false})}) ${param.name}: ${params}`
      return result
    default:
      return ''
  }
}

// 4. Use the schema to generate the mm files
// 5. Save the generated files to the output directory
