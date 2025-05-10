import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

constructor() { }

changeColor(selectedColor:string) {
  const primaryColor = selectedColor;
  const darkColor = this.darkenColor(primaryColor, 15);
  const lightColor = this.lightenColor(primaryColor, 15);

  document.documentElement.style.setProperty('--primary-color', primaryColor);
  document.documentElement.style.setProperty('--primary-color-dark', darkColor);
  document.documentElement.style.setProperty('--primary-color-light', lightColor);
}
default(){//todo: storage color
  document.documentElement.style.setProperty('--primary-color', '#3498db');
  document.documentElement.style.setProperty('--primary-color-dark', '#1c7bba');
  document.documentElement.style.setProperty('--primary-color-light', '#3fa4e8');
  document.documentElement.style.setProperty('--primary-text-color', '#fcfcfc');
}
changeTextColor(selectedTextColor:string) {
  document.documentElement.style.setProperty(
    '--primary-text-color',
    selectedTextColor
  );
}
private darkenColor(color: string, percent: number): string {
  return this.adjustColor(color, -percent);
}

private lightenColor(color: string, percent: number): string {
  return this.adjustColor(color, percent);
}

private adjustColor(color: string, percent: number): string {
  let hex = color.startsWith('#') ? color.slice(1) : color;

  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }

  const num = parseInt(hex, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  r = Math.min(255, Math.max(0, Math.floor(r * (100 + percent) / 100)));
  g = Math.min(255, Math.max(0, Math.floor(g * (100 + percent) / 100)));
  b = Math.min(255, Math.max(0, Math.floor(b * (100 + percent) / 100)));

  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}
}
