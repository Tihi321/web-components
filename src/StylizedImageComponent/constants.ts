export enum ObservedAttributesEnum {
  SOURCE = 0,
  EFFECT = 1,
};

export const Events = {
  LOAD: "load",
};

export const Classes = {
  IMAGE_ELEMENT_CLASS: "stylized-image",
  IMAGE_SHOW_CLASS: "show",
};

export const Effects = {
  CHEWIE: "chewie",
  EMPIRE: "empire",
  INGRID: "ingrid",
  NIGHTWIG: "nightwing",
  SEPIA: "sepia",
  NOIRE: "noire",
  FRAME: "frame",
  VIGNETTE: "vignette",
};

export const Tags = {
  COMPONENT: "stylized-image",
  TEMPLATE_SOURCE: "template",
};

export const Attributes = {
  SOURCE: "src",
  EFFECT: "effect",
};

export const ObservedAttributes = new Map();
ObservedAttributes.set(Attributes.SOURCE, ObservedAttributesEnum.SOURCE);
ObservedAttributes.set(Attributes.EFFECT, ObservedAttributesEnum.EFFECT);
