"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSLoader = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const class_map_js_1 = require("lit/directives/class-map.js");
const ss_loader_models_1 = require("./ss-loader.models");
let SSLoader = class SSLoader extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this[_a] = ss_loader_models_1.ssLoaderProps[ss_loader_models_1.SSLoaderProp.PADDED].default;
    }
    static { _a = ss_loader_models_1.SSLoaderProp.PADDED; }
    static { this.styles = (0, lit_1.css) `
    .container {
      text-align: center;
      height: 16px;
    }

    .container.padded {
      margin: 1rem;
    }

    .loader {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #000;
      box-shadow:
        32px 0 #000,
        -32px 0 #000;
      position: relative;
      animation: flash 0.5s ease-out infinite alternate;
      transform: skewX(50%);
    }

    @keyframes flash {
      0% {
        background-color: #0002;
        box-shadow:
          32px 0 #0002,
          -32px 0 #000;
      }
      50% {
        background-color: #000;
        box-shadow:
          32px 0 #0002,
          -32px 0 #0002;
      }
      100% {
        background-color: #0002;
        box-shadow:
          32px 0 #000,
          -32px 0 #0002;
      }
    }
  `; }
    get classes() {
        return { container: true, padded: this.padded };
    }
    render() {
        return (0, lit_1.html) `<div class=${(0, class_map_js_1.classMap)(this.classes)}>
      <span class="loader"></span>
    </div>`;
    }
};
exports.SSLoader = SSLoader;
__decorate([
    (0, decorators_js_1.property)({ type: Boolean })
], SSLoader.prototype, _a, void 0);
__decorate([
    (0, decorators_js_1.state)()
], SSLoader.prototype, "classes", null);
exports.SSLoader = SSLoader = __decorate([
    (0, decorators_js_1.customElement)('ss-loader')
], SSLoader);
//# sourceMappingURL=ss-loader.js.map