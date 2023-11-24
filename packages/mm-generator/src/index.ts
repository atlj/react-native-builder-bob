import {TypeScriptParser} from '@react-native/codegen/lib/parsers/typescript/parser'
import * as z from 'zod'
import {execSync} from 'child_process'

import fs from 'fs-extra'
import path from 'path'

const packageJson = fs.readJsonSync(path.join(process.cwd(), 'package.json'))

const CodegenConfig = z.object({
  name: z.string(),
  jsSrcsDir: z.string(),
  type: z.union([z.literal('modules'), z.literal('components'), z.literal('all')]),
})

const codegenConfigParse = CodegenConfig.safeParse(packageJson.codegenConfig)
if(!codegenConfigParse.success){
  throw new Error('Invalid codegenConfig')
}
const codegenConfig = codegenConfigParse.data

const schemaParserPath = require.resolve('@react-native/codegen/lib/cli/combine/combine-js-to-schema-cli')

const command = `node ${schemaParserPath} --platform ios ${codegenConfig.name}.schema.json ${codegenConfig.jsSrcsDir}`
console.log(command)
execSync(command)

// 2. Get the files
// 3. Parse the files using TypescriptParser. Flow won't be supported
// 4. Generate the codegen schema, use the schema to call the objc generator
// 5. Save the generated files to the output directory
