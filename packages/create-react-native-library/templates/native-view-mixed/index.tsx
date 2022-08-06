const isFabricEnabled = global.nativeFabricUIManager != null;

export const <%- project.name -%>View = isFabricEnabled
  ? require('./<%- project.name -%>NativeComponent').default
  : require('./<%- project.name -%>Legacy').default;
