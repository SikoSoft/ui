"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSButton = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const class_map_js_1 = require("lit/directives/class-map.js");
require("../ss-loader/ss-loader");
const theme_1 = require("../../styles/theme");
const ss_button_models_1 = require("./ss-button.models");
let SSButton = class SSButton extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this[_a] = '';
        this[_b] = false;
        this[_c] = false;
        this[_d] = false;
        this[_e] = false;
        this[_f] = '';
        this._handleClick = (e) => {
            this.dispatchEvent(new CustomEvent('ss-button-clicked', {
                bubbles: true,
                composed: true,
            }));
        };
    }
    static { _a = ss_button_models_1.SSButtonProp.TEXT, _b = ss_button_models_1.SSButtonProp.DISABLED, _c = ss_button_models_1.SSButtonProp.LOADING, _d = ss_button_models_1.SSButtonProp.POSITIVE, _e = ss_button_models_1.SSButtonProp.NEGATIVE, _f = ss_button_models_1.SSButtonProp.CLASS; }
    static { this.styles = [
        theme_1.theme,
        (0, lit_1.css) `
      button {
        border-radius: 0.5rem;

        &.loading {
          min-width: 100px;
        }

        &.positive {
          background-color: var(--positive-background-color);
          color: var(--positive-color);
          border-color: var(--positive-color);
        }

        &.negative {
          background-color: var(--negative-background-color);
          color: var(--negative-color);
          border-color: var(--negative-color);
        }

        &.disabled {
          opacity: 0.5;
        }
      }
    `,
    ]; }
    get classes() {
        const classes = {
            loading: this.loading,
            disabled: this.disabled,
            positive: this.positive,
            negative: this.negative,
        };
        this.class.split(' ').forEach(className => {
            classes[className] = true;
        });
        return classes;
    }
    render() {
        return (0, lit_1.html) `
      <button
        class=${(0, class_map_js_1.classMap)(this.classes)}
        @click=${this._handleClick}
        ?disabled=${this.disabled}
      >
        ${this.loading ? (0, lit_1.html) ` <ss-loader></ss-loader> ` : this.text}
      </button>
    `;
    }
};
exports.SSButton = SSButton;
__decorate([
    (0, decorators_js_1.property)()
], SSButton.prototype, _a, void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean })
], SSButton.prototype, _b, void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean })
], SSButton.prototype, _c, void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean })
], SSButton.prototype, _d, void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean })
], SSButton.prototype, _e, void 0);
__decorate([
    (0, decorators_js_1.property)()
], SSButton.prototype, _f, void 0);
__decorate([
    (0, decorators_js_1.state)()
], SSButton.prototype, "classes", null);
exports.SSButton = SSButton = __decorate([
    (0, decorators_js_1.customElement)('ss-button')
], SSButton);
//# sourceMappingURL=ss-button.js.map