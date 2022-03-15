import colorLib from '@kurkle/color';

export function color(value) {
  return value instanceof CanvasGradient || value instanceof CanvasPattern ? value : colorLib(value);
}

export function getHoverColor(value) {
  return value instanceof CanvasGradient || value instanceof CanvasPattern
    ? value
    : colorLib(value).saturate(0.5).darken(0.1).hexString();
}
