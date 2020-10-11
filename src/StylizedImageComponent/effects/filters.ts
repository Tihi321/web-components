import { Effects } from "../constants";

export function sepiaEffect(): string {
  return `
  .${Effects.SEPIA} {
    filter: sepia(60%);
  }`;
}

export function noireEffect(): string {
  return `
  .${Effects.NOIRE} {
    filter: grayscale(50%);
  }`;
}
