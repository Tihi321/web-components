import { Effects } from "../constants";

export function imageFrameEffect(): string {
  return `
  .${Effects.FRAME} {
    border: 15px solid steelblue;
    filter: drop-shadow(10px 10px 5px #000000);
  }`;
}

export function vignetteEffect(): string {
  return `
  .${Effects.VIGNETTE} {
    box-shadow: 0 0 110px 40px rgba(0, 0, 0, 0.7) inset;
  }`;
}

