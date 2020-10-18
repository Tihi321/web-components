export enum ObservedAttributesEnum {
  SOURCE = 0,
};

export const Events = {
  LOAD: "load",
};

export const IntersectionObserverOptions = {
  root: null,
  rootMargin: '100px 0px 100px 0px',
  threshold: 0
}

export const Classes = {
  IMAGE_ELEMENT_CLASS: "lazy-image",
  IMAGE_SHOW_CLASS: "show",
};

export const Tags = {
  COMPONENT: "lazy-image",
  TEMPLATE_SOURCE: "template",
};

export const Attributes = {
  SOURCE: "src",
};

export const ObservedAttributes = new Map();
ObservedAttributes.set(Attributes.SOURCE, ObservedAttributesEnum.SOURCE);
