import { stylizedTemplate } from "./template";
import { ObservedAttributes, Attributes, Events, Tags, Classes } from "./constants";

type ElementSize = {
  width: number;
  height: number;
}

class StylizedImageComponent extends HTMLElement {
  src: string;
  effect: string;
  imgElement: HTMLImageElement;
  stylizedImageContainer: HTMLElement | null = null;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(stylizedTemplate.content.cloneNode(true));
      this.stylizedImageContainer = this.shadowRoot.querySelector(`.${Classes.IMAGE_ELEMENT_CLASS}`);
    }
    

    this.imgElement = new Image();
    this.setImageSizeCallback = this.setImageSizeCallback.bind(this);

    this.src = this.getAttribute(Attributes.SOURCE) || '';
    this.effect = this.getAttribute(Attributes.EFFECT) || '';

    this.updateImageSize();
  }

  updateImageSize() {
    if (this.src) {
      this.imgElement.src = this.src;
      this.imgElement.addEventListener(Events.LOAD, this.setImageSizeCallback);
    }
  }

  set setImageWithNewSize(value: ElementSize) {
    if (this.stylizedImageContainer) {
      this.stylizedImageContainer.setAttribute('style', `width: ${value.width}px; height: ${value.height}px; background-image: url(${this.src});`);
    }
    this.showElement();
  }

  setImageSizeCallback(event: Event) {
    this.setImageWithNewSize = {
      width: event.target?.width,
      height: event.target?.height
    };
  }

  static get observedAttributes(): string[] {
    return [...ObservedAttributes.keys()];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case Attributes.SOURCE:
        this.hideElement();
        this.src = newValue;
        this.updateImageSize();
      break;
      case Attributes.EFFECT:
        this.effect = newValue;
        this.removeEffect(oldValue);
        this.setEffect(newValue);
      break;
    }
  }

  setEffect(value: string) {
    if (value && this.stylizedImageContainer) {
      this.stylizedImageContainer.classList.add(value);
    }
  }

  removeEffect(value: string) {
    if (value && this.stylizedImageContainer) {
      this.stylizedImageContainer.classList.remove(value);
    }
  }

  hideElement() {
    if (this.stylizedImageContainer) {
      this.stylizedImageContainer.classList.remove(Classes.IMAGE_SHOW_CLASS);
    }
  }

  showElement() {
    if (this.stylizedImageContainer) {
      this.stylizedImageContainer.classList.add(Classes.IMAGE_SHOW_CLASS);
    }
  }

  connectedCallback() {
    this.setEffect(this.effect); 
  }

  disconnectedCallback() {
    this.imgElement.removeEventListener(Events.LOAD, this.setImageSizeCallback);
  }

  static register() {
    customElements.define(Tags.COMPONENT, StylizedImageComponent);
  }
}

export default StylizedImageComponent;
