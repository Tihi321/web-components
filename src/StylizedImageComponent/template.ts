import { Classes, Tags } from "./constants";
import { nightwigEffect, ingridEffect, empireEffect, chewieEffect } from "./effects/background";
import { sepiaEffect, noireEffect } from "./effects/filters";
import { imageFrameEffect, vignetteEffect } from "./effects/common";

const stylizedTemplate: HTMLTemplateElement = document.createElement(Tags.TEMPLATE_SOURCE) as HTMLTemplateElement;
stylizedTemplate.innerHTML = `
<style>
  .${Classes.IMAGE_ELEMENT_CLASS} {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 0;
    height: 0;
    max-width: 500px;
    max-height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease;
  }

  .title {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 800;
    font-family: sans-serif;
    letter-spacing: 1.2px;
  }

  .${Classes.IMAGE_SHOW_CLASS} {
    opacity: 1;
  }

  ${chewieEffect()}
  ${empireEffect()}
  ${ingridEffect()}
  ${nightwigEffect()}
  ${sepiaEffect()}
  ${noireEffect()}
  ${imageFrameEffect()}
  ${vignetteEffect()}
</style>

<div class="${Classes.IMAGE_ELEMENT_CLASS}">
  <slot class="title" name="title"></slot>
</div>
`;

export { stylizedTemplate };