"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSToggle = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const class_map_js_1 = require("lit/directives/class-map.js");
const toggle_changed_1 = require("../../events/toggle-changed");
const ss_toggle_models_1 = require("./ss-toggle.models");
let SSToggle = class SSToggle extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this[_a] = ss_toggle_models_1.ssToggleProps[ss_toggle_models_1.SSToggleProp.ON].default;
    }
    static { _a = ss_toggle_models_1.SSToggleProp.ON; }
    static { this.styles = (0, lit_1.css) `
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
        this.dispatchEvent(new toggle_changed_1.ToggleChangedEvent({ on: !this.on }));
    }
    render() {
        return (0, lit_1.html) `
      <span class=${(0, class_map_js_1.classMap)(this.classes)} @click=${this._handleClick}>
        <span class="ball"></span>
      </span>
    `;
    }
};
exports.SSToggle = SSToggle;
__decorate([
    (0, decorators_js_1.property)({ type: Boolean })
], SSToggle.prototype, _a, void 0);
__decorate([
    (0, decorators_js_1.state)()
], SSToggle.prototype, "classes", null);
exports.SSToggle = SSToggle = __decorate([
    (0, decorators_js_1.customElement)('ss-toggle')
], SSToggle);
//# sourceMappingURL=ss-toggle.js.map