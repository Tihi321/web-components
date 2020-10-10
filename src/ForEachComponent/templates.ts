import { Attributes } from "./constants";

type Property = {
  [key: string]: any
}

export function updatedTemplateWithString(template: any, property: string | number, index: number): string {
  return template.replaceAll(`{{ ${Attributes.PROPERTY} }}`, `${property}`).replaceAll(`{{ ${Attributes.INDEX} }}`, `${index}`);
}

export function updatedTemplateWithObject(template: any, property: Property, index: number, keys: Array<string>): string {
  let newTemplate = template.replaceAll(`{{ ${Attributes.INDEX} }}`, `${index}`);
  keys.forEach(key => newTemplate = newTemplate.replaceAll(`{{ ${Attributes.PROPERTY}[${key}] }}`, `${property[key]}`));

  return newTemplate;
}
