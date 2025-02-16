"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSCollapsable = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const class_map_js_1 = require("lit/directives/class-map.js");
const theme_1 = require("../../styles/theme");
let SSCollapsable = class SSCollapsable extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.open = false;
    }
    static { this.styles = [
        theme_1.theme,
        (0, lit_1.css) `
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
    _handleIconClick() {
        this._toggle();
    }
    _toggle() {
        this.dispatchEvent(new CustomEvent('toggled', {
            bubbles: true,
            composed: true,
            detail: this.open,
        }));
    }
    render() {
        return (0, lit_1.html) `
      <div class=${(0, class_map_js_1.classMap)(this.classes)}>
        <div class="head">
          <div class="title">${this.title}</div>
          <div class="icon">
            <button @click=${() => this._handleIconClick()}>
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
exports.SSCollapsable = SSCollapsable;
__decorate([
    (0, decorators_js_1.property)()
], SSCollapsable.prototype, "title", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean })
], SSCollapsable.prototype, "open", void 0);
__decorate([
    (0, decorators_js_1.state)()
], SSCollapsable.prototype, "classes", null);
exports.SSCollapsable = SSCollapsable = __decorate([
    (0, decorators_js_1.customElement)('ss-collapsable')
], SSCollapsable);
//# sourceMappingURL=ss-collapsable.js.map