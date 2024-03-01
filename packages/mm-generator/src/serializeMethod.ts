import { serializeMethod as serializeMethodImpl } from '@react-native/codegen/lib/generators/modules/GenerateModuleObjCpp/serializeMethod';
import { StructCollector } from '@react-native/codegen/lib/generators/modules/GenerateModuleObjCpp/StructCollector';

import type {
  NativeModuleAliasMap,
  NativeModuleObjectTypeAnnotation,
  NativeModulePropertyShape,
} from '@react-native/codegen/lib/CodegenSchema';

type StructParameterRecord = {
  paramIndex: number;
  structName: string;
};

type ReturnJSType =
  | 'VoidKind'
  | 'BooleanKind'
  | 'PromiseKind'
  | 'ObjectKind'
  | 'ArrayKind'
  | 'NumberKind'
  | 'StringKind';

type MethodSerializationOutput = {
  methodName: string;
  protocolMethod: string;
  selector: string;
  structParamRecords: StructParameterRecord[];
  returnJSType: ReturnJSType;
  argCount: number;
};

function serializeMethod(
  hasteModuleName: string,
  property: NativeModulePropertyShape,
  structCollector: StructCollector,
  resolveAlias: AliasResolver
): MethodSerializationOutput[] {
  return serializeMethodImpl(
    hasteModuleName,
    property,
    structCollector,
    resolveAlias
  );
}

export type AliasResolver = (
  aliasName: string
) => NativeModuleObjectTypeAnnotation;

function createAliasResolver(aliasMap: NativeModuleAliasMap): AliasResolver {
  return (aliasName: string) => {
    const alias = aliasMap[aliasName];
    return alias;
  };
}

// - (void)multiply:(double)a
//                b:(double)b
//          resolve:(RCTPromiseResolveBlock)resolve
//           reject:(RCTPromiseRejectBlock)reject;
function convertProtocolMethodToSwiftCall(protocolMethod: string): string {
  protocolMethod = protocolMethod.replace(';', '');
  const flattened = protocolMethod
    .replace('\n', ' ')
    .replace(/\s+/g, ' ');
  const [, returnType,signature] = flattened.match(/- (\([^)]+\))(.+)/);

  return `RCT_EXPORT_METHOD(${signature}) {
    return [swift_impl ${signature}];
}`;
}

export {
  serializeMethod,
  StructCollector,
  createAliasResolver,
  convertProtocolMethodToSwiftCall,
};
