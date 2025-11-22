var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
let SVGAdd = class SVGAdd extends LitElement {
    render() {
        return html `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M13 2c.55 0 1 .45 1 1v7h7c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-7v7c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-7H3c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h7V3c0-.55.45-1 1-1h2m0-2h-2C9.346 0 8 1.346 8 3v5H3c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h5v5c0 1.654 1.346 3 3 3h2c1.654 0 3-1.346 3-3v-5h5c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3h-5V3c0-1.654-1.346-3-3-3z"
        />
      </svg>
    `;
    }
};
SVGAdd = __decorate([
    customElement('svg-add')
], SVGAdd);
export { SVGAdd };
//# sourceMappingURL=svg-add.js.map