import { ObservedAttributes, ObservedAttributesEnum, Events, Tags } from "./constants"; 
import { updatedTemplateWithString, updatedTemplateWithObject } from "./templates"; 

class ForEachComponent extends HTMLElement {
  _props: Array<string | object | number> = [];
  _keys: Array<string> = [];
  _hide: boolean = false;

  constructor() {
    super();
  }

  set props(value: string) {
    this._props = JSON.parse(value);
  }

  set keys(value: string) {
    this._keys = JSON.parse(value);
  }

  set hide(value: string) {
    this._hide = value === "true";
  }

  get propsIsObjectArray() {
    return this._props.filter(prop => typeof prop === 'object').length > 0;
  }

  get documentSourceTemplate() {
    const templateSource = this.querySelector(Tags.TEMPLATE_SOURCE);
    if (templateSource) {
      return templateSource.innerHTML.trim();
    }
    return '';
  }

  get documentRenderElement() {
    const templateRender = this.querySelector(Tags.TEMPLATE_RENDER);
    if (templateRender) {
      return templateRender.innerHTML.trim();
    }
    return '';
  }

  set documentRenderElement(html: string) {
    const renderElement = this.querySelector(Tags.TEMPLATE_RENDER);
    if (renderElement) {
      renderElement.innerHTML = html;
    }
  }

  static get observedAttributes(): string[] {
    return [...ObservedAttributes.keys()];
  }

  connectedCallback() {
    this.appendRenderElement();

    this.hide = this.getAttribute(ForEachComponent.observedAttributes[ObservedAttributesEnum.HIDE]) || "false";
    this.props = this.getAttribute(ForEachComponent.observedAttributes[ObservedAttributesEnum.PROPERTIES]) || "[]";
    this.keys = this.getAttribute(ForEachComponent.observedAttributes[ObservedAttributesEnum.KEYS]) || "[]";
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case ForEachComponent.observedAttributes[ObservedAttributesEnum.PROPERTIES]:
        this.props = newValue;
      break;
      case ForEachComponent.observedAttributes[ObservedAttributesEnum.KEYS]:
        this.keys = newValue;
      break;
      case ForEachComponent.observedAttributes[ObservedAttributesEnum.HIDE]:
        this.hide = newValue;
      break;
      case ForEachComponent.observedAttributes[ObservedAttributesEnum.RERENDER]:
        if (newValue === "true") {
          this.setAttribute(ForEachComponent.observedAttributes[ObservedAttributesEnum.RERENDER], "false");
        }
      break;
    }

    if (ForEachComponent.observedAttributes.includes(name) && newValue !== "false") {
      this.render();
    }
  }

  appendRenderElement() {
    const renderTemplateElement = document.createElement(Tags.TEMPLATE_RENDER);
    renderTemplateElement.classList.add(Tags.TEMPLATE_RENDER_CLASS);
    this.appendChild(renderTemplateElement.cloneNode(true));
  }

  sendRenderEvent() {
    this.dispatchEvent(new Event(Events.RENDER));
  }

  render() {
    const template: Array<string> = this._props.map((prop, index) => {
      if (this._keys.length > 0 && this.propsIsObjectArray) {
        return updatedTemplateWithObject(this.documentSourceTemplate, prop as object, index + 1, this._keys);
      }
      return !this.propsIsObjectArray ? updatedTemplateWithString(this.documentSourceTemplate, prop as string | number, index + 1) : "";
    });

    if (!this._hide) {
      if (template.length > 0) {
        this.documentRenderElement = template.join('');
        this.sendRenderEvent();
      }
    } else if (this.documentRenderElement !== "") {
      this.documentRenderElement = "";
    }

  }

  static register() {
    customElements.define(Tags.COMPONENT, ForEachComponent);
  }
}

export default ForEachComponent;