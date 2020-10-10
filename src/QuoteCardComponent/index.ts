const template = document.createElement('template');
template.innerHTML = `
<style>
  .quote-card {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 400px;
    margin: 10px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  }

  .header {
    width: 200px;
    hwight: 200px;
  }

  .image {
    display: block;
  }

  .description {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .person {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .name {
    display: block;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.334;
  }

  .title {
    color: rgba(0, 0, 0, 0.54);
    display: block;
    font-size: 12px;
    line-height: 1.75;
    letter-spacing: 0.1px;
  }

  .quote {
    color: rgba(0, 0, 0, 0.54);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    text-align: center;
    font-size: 20px;
    line-height: 1.43;
    letter-spacing: 0.2px;
  }
</style>

<article class="quote-card">
  <header class="header">
    <img class="image" src="" />
  </header>
  <div class="description">
    <div class="person">
      <slot class="name" name="name"></slot>
      <slot class="title" name="title"></slot>
    </div>
    <div class="quote">"<slot name="quote"></slot>"</div>
  </div>
</article>
`;

const Attributes = {
  COMPONENT: "quote-card",
  IMAGE_CLASS_SELECTOR: ".image",
  IMAGE_TEXT_ATTRIBUTE: "image-text",
};

class QuoteCardComponent extends HTMLElement {
  imageText: string = "";

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    this.imageText = this.getAttribute(Attributes.IMAGE_TEXT_ATTRIBUTE) || "";
  }

  connectedCallback() {
    const image = this.shadowRoot && this.shadowRoot.querySelector(Attributes.IMAGE_CLASS_SELECTOR);
    if (image) {
      image.setAttribute('src', `https://via.placeholder.com/200?text=${this.imageText}`);
    }
  }
  
  static register() {
    customElements.define(Attributes.COMPONENT, QuoteCardComponent);
  }
}

export default QuoteCardComponent;