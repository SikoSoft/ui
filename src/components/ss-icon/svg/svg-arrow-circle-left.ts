import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('svg-arrow-circle-left')
export class SVGArrowCircleLeft extends LitElement {
  render() {
    return html`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1.71,12.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0l-3-3a1,1,0,0,1,0-1.42l3-3a1,1,0,0,1,1.42,1.42L11.41,12Z"
          fill="currentColor"
        ></path>
      </svg>
    `;
  }
}
