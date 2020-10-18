import { stylizedTemplate } from "./template";
import { ObservedAttributes, IntersectionObserverOptions, Attributes, Events, Tags, Classes } from "./constants";

type ElementSize = {
  width: number;
  height: number;
}

class LazyImage extends HTMLElement {
  src: string;
  imgElement: HTMLImageElement;
  lazyImageContainer: HTMLElement | null = null;
  observer: IntersectionObserver;
  addedCallback: boolean = false;
  canShowImage: boolean = false;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(stylizedTemplate.content.cloneNode(true));
      this.lazyImageContainer = this.shadowRoot.querySelector(`.${Classes.IMAGE_ELEMENT_CLASS}`);
    }
    
    this.imgElement = new Image();
    this.setImageSizeCallback = this.setImageSizeCallback.bind(this);
    this.intersectionCallback = this.intersectionCallback.bind(this);

    this.observer = new IntersectionObserver(this.intersectionCallback, IntersectionObserverOptions);

    this.src = this.getAttribute(Attributes.SOURCE) || '';
  }

  updateImageSizeAndAddCallback() {
    this.imgElement.src = this.src;
    this.addImageCallback();
    this.addedCallback = true;
  }

  set setImageWithNewSize(value: ElementSize) {
    if (this.lazyImageContainer) {
      this.lazyImageContainer.setAttribute('style', `width: ${value.width}px; height: ${value.height}px; background-image: url(${this.src});`);
    }
    this.showElement();
  }

  setImageSizeCallback(event: Event) {
    this.setImageWithNewSize = {
      width: event.target?.width,
      height: event.target?.height
    };

    this.canShowImage = true;
  }

  static get observedAttributes(): string[] {
    return [...ObservedAttributes.keys()];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case Attributes.SOURCE:
        this.hideElement();
        this.src = newValue;
        this.removeImageCallback();
        this.addedCallback = false;
      break;
    }
  }

  hideElement() {
    if (this.lazyImageContainer) {
      this.lazyImageContainer.classList.remove(Classes.IMAGE_SHOW_CLASS);
    }
  }

  showElement() {
    if (this.lazyImageContainer) {
      this.lazyImageContainer.classList.add(Classes.IMAGE_SHOW_CLASS);
      this.canShowImage = false;
    }
  }

  removeImageCallback() {
    this.imgElement.removeEventListener(Events.LOAD, this.setImageSizeCallback);
  }

  addImageCallback() {
    this.imgElement.addEventListener(Events.LOAD, this.setImageSizeCallback);
  }

  intersectionCallback(entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!this.addedCallback && this.src) {
          this.updateImageSizeAndAddCallback();
        }
        if (this.canShowImage) {
          this.showElement();
        }
      }
    });
  }

  connectedCallback() {
    if (this.lazyImageContainer) {
      this.observer.observe(this.lazyImageContainer)
    }
  }

  disconnectedCallback() {
    this.imgElement.removeEventListener(Events.LOAD, this.setImageSizeCallback);
  }

  static register() {
    customElements.define(Tags.COMPONENT, LazyImage);
  }
}

export default LazyImage;
