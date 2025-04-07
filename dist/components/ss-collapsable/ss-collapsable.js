var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b;
import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { theme } from '../../styles/theme';
import { SSCollapsableProp, ssCollapsableProps, } from './ss-collapsable.models';
let SSCollapsable = class SSCollapsable extends LitElement {
    constructor() {
        super(...arguments);
        this[_a] = ssCollapsableProps[SSCollapsableProp.TITLE].default;
        this[_b] = ssCollapsableProps[SSCollapsableProp.OPEN].default;
    }
    static { _a = SSCollapsableProp.TITLE, _b = SSCollapsableProp.OPEN; }
    static { this.styles = [
        theme,
        css `
      .collapsable {
        padding: 1rem;
      }

      .head {
        display: flex;
      }

      .title {
        flex-grow: 9;
      }

      .icon {
        flex-grow: 1;
        text-align: right;
      }

      .icon button {
        width: auto;
        padding: 0 0.5rem;
      }

      .body {
        display: none;
        transition: all 0.3s;
        overflow: hidden;
      }

      .collapsable.open .body {
        display: block;
        padding-top: 1rem;
      }
    `,
    ]; }
    get classes() {
        return { box: true, collapsable: true, open: this.open };
    }
    handleIconClick() {
        this.toggle();
    }
    toggle() {
        this.dispatchEvent(new CustomEvent('toggled', {
            bubbles: true,
            composed: true,
            detail: this.open,
        }));
    }
    render() {
        return html `
      <div class=${classMap(this.classes)}>
        <div class="head">
          <div class="title">${this.title}</div>
          <div class="icon">
            <button @click=${() => this.handleIconClick()}>
              ${this.open ? '-' : '+'}
            </button>
          </div>
        </div>
        <div class="body">
          <slot></slot>
        </div>
      </div>
    `;
    }
};
__decorate([
    property()
], SSCollapsable.prototype, _a, void 0);
__decorate([
    property({ type: Boolean })
], SSCollapsable.prototype, _b, void 0);
__decorate([
    state()
], SSCollapsable.prototype, "classes", null);
SSCollapsable = __decorate([
    customElement('ss-collapsable')
], SSCollapsable);
export { SSCollapsable };
//# sourceMappingURL=ss-collapsable.js.map