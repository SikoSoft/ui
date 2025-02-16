var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ToggleChangedEvent } from '../../events/toggle-changed';
import { SSToggleProp, ssToggleProps } from './ss-toggle.models';
let SSToggle = class SSToggle extends LitElement {
    constructor() {
        super(...arguments);
        this[_a] = ssToggleProps[SSToggleProp.ON].default;
    }
    static { _a = SSToggleProp.ON; }
    static { this.styles = css `
    .toggle {
      display: inline-block;
      height: 3rem;
      width: 6rem;
      border-radius: 1.5rem;
      background: linear-gradient(#ccc, #aaa);
      position: relative;
      opacity: 0.7;
      transition: all 0.3s;
      cursor: pointer;
    }

    .toggle::before {
      content: '';
      position: absolute;
      height: 2.4rem;
      width: 5.4rem;
      top: 0.3rem;
      left: 0.3rem;
      background: linear-gradient(#333, #555);
      border-radius: 1.2rem;
      opacity: 0.4;
    }

    .toggle.on {
      opacity: 1;
    }

    .toggle.on .ball {
      left: 3.5rem;
    }

    .ball {
      position: absolute;
      display: inline-block;
      height: 2rem;
      width: 2rem;
      left: 0.5rem;
      top: 0.5rem;
      background: linear-gradient(45deg, #333, #555);
      border-radius: 1rem;
      border: 1px #777 solid;
      box-sizing: border-box;
      transition: all 0.3s;
    }
  `; }
    get classes() {
        return { toggle: true, on: this.on };
    }
    _handleClick() {
        this.dispatchEvent(new ToggleChangedEvent({ on: !this.on }));
    }
    render() {
        return html `
      <span class=${classMap(this.classes)} @click=${this._handleClick}>
        <span class="ball"></span>
      </span>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], SSToggle.prototype, _a, void 0);
__decorate([
    state()
], SSToggle.prototype, "classes", null);
SSToggle = __decorate([
    customElement('ss-toggle')
], SSToggle);
export { SSToggle };
//# sourceMappingURL=ss-toggle.js.map