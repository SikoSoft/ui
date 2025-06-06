import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('svg-arrow-circle-right')
export class SVGArrowCircleRight extends LitElement {
  render() {
    return html`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm2.71,10.71-3,3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L12.59,12l-2.3-2.29a1,1,0,0,1,1.42-1.42l3,3A1,1,0,0,1,14.71,12.71Z"
          fill="currentColor"
        ></path>
      </svg>
    `;
  }
}
