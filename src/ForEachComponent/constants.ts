export enum ObservedAttributesEnum {
  PROPERTIES = 0,
  KEYS = 1,
  RERENDER = 2,
  HIDE = 3
};

export const Events = {
  RENDER: "render",
};

export const Tags = {
  COMPONENT: "for-each",
  TEMPLATE_SOURCE: "template",
  TEMPLATE_RENDER: "render",
  TEMPLATE_RENDER_CLASS: "render",
};

export const Attributes = {
  INDEX: "index",
  PROPERTY: "prop",
  PROPERTIES: "props",
  KEYS: "keys",
  RERENDER: "rerender",
  HIDE: "hide"
};

export const ObservedAttributes = new Map();
ObservedAttributes.set(Attributes.PROPERTIES, ObservedAttributesEnum.PROPERTIES);
ObservedAttributes.set(Attributes.KEYS, ObservedAttributesEnum.KEYS);
ObservedAttributes.set(Attributes.RERENDER, ObservedAttributesEnum.RERENDER);
ObservedAttributes.set(Attributes.HIDE, ObservedAttributesEnum.HIDE);
