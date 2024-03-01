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

// @react-native/codegen/lib/generators/modules/Utils.js
function createAliasResolver(aliasMap: NativeModuleAliasMap): AliasResolver {
  return (aliasName: string) => {
    const alias = aliasMap[aliasName];

    if (alias === undefined) {
      throw new Error(`Unable to resolve alias ${aliasName}`);
    }

    return alias;
  };
}

/**
 * @param protocolMethod - The protocol method to convert to a swift call.
 * It looks like this:
 * The protocolMethod is a string that looks like this:
 * ```objc
 * - (void)multiply:(double)a
 *     b:(double)b
 *     resolve:(RCTPromiseResolveBlock)resolve
 *     reject:(RCTPromiseRejectBlock)reject;
 * ```
 *
 * @returns The swift call that looks like this:
 * ```objc
 * RCT_EXPORT_METHOD(multiply:(double)a b:(double)b resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
 *  return [swift_impl multiply:(double)a b:(double)b resolve:resolve reject:reject];
 * }
 * ```
 *
 */
function convertProtocolMethodToSwiftCall(protocolMethod: string): string {
  // Remove the semicolon at the end of the method
  protocolMethod = protocolMethod.replace(';', '');

  // Flatten the method to a single line
  const flattened = protocolMethod.replace('\n', ' ').replace(/\s+/g, ' ');

  // Ignore until the first ')'. We don't want to include the return type
  // With the example above, the signature would be:
  // multiply:(double)a b:(double)b resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject
  const signature = flattened.split(')').slice(1).join(')');

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
