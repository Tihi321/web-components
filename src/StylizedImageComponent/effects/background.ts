import { Effects } from "../constants";

export function nightwigEffect(): string {
  return `
  .${Effects.NIGHTWIG} {
    background-color: rgb(62, 170, 254);
    background-blend-mode: luminosity;
  }`;
}

export function ingridEffect(): string {
  return `
  .${Effects.INGRID} {
    background-color: rgb(252, 188, 255);
    background-blend-mode: hard-light;
  }`;
}

export function empireEffect(): string {
  return `
  .${Effects.EMPIRE} {
    background-color: rgb(83, 89, 140);
    background-blend-mode: color-dodge;
  }`;
}

export function chewieEffect(): string {
  return `
  .${Effects.CHEWIE} {
    background-color: rgb(167, 128, 20);
    background-blend-mode: screen;
  }`;
}
