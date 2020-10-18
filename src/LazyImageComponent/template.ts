import { Classes, Tags } from "./constants";

const stylizedTemplate: HTMLTemplateElement = document.createElement(Tags.TEMPLATE_SOURCE) as HTMLTemplateElement;
stylizedTemplate.innerHTML = `
<style>
  .${Classes.IMAGE_ELEMENT_CLASS} {
    opacity: 0;
    width: 0;
    height: 0;
    max-width: 500px;
    max-height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease;
    filter: blur(20px);
  }
  .${Classes.IMAGE_SHOW_CLASS} {
    opacity: 1;
    filter: blur(0);
  }
</style>

<div class="${Classes.IMAGE_ELEMENT_CLASS}"></div>
`;

export { stylizedTemplate };