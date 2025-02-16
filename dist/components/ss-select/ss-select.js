"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSSelect = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const repeat_js_1 = require("lit/directives/repeat.js");
const select_changed_1 = require("../../events/select-changed");
const theme_1 = require("../../styles/theme");
const ss_select_models_1 = require("./ss-select.models");
let SSSelect = class SSSelect extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this[_a] = ss_select_models_1.ssSelectProps[ss_select_models_1.SSSelectProp.OPTIONS].default;
        this[_b] = ss_select_models_1.ssSelectProps[ss_select_models_1.SSSelectProp.SELECTED].default;
    }
    static { _a = ss_select_models_1.SSSelectProp.OPTIONS, _b = ss_select_models_1.SSSelectProp.SELECTED; }
    static { this.styles = [theme_1.theme]; }
    get value() {
        return this.selectNode.value;
    }
    _handleSelectChanged() {
        this.dispatchEvent(new select_changed_1.SelectChangedEvent({ value: this.selectNode.value }));
    }
    render() {
        return (0, lit_1.html) `
      <select @change=${this._handleSelectChanged}>
        ${(0, repeat_js_1.repeat)(this.options, option => option.value, option => (0, lit_1.html) `
            <option
              value=${option.value}
              ?selected=${this.selected === option.value}
            >
              ${option.label}
            </option>
          `)}
      </select>
    `;
    }
};
exports.SSSelect = SSSelect;
__decorate([
    (0, decorators_js_1.property)({ type: Array })
], SSSelect.prototype, _a, void 0);
__decorate([
    (0, decorators_js_1.property)()
], SSSelect.prototype, _b, void 0);
__decorate([
    (0, decorators_js_1.query)('select')
], SSSelect.prototype, "selectNode", void 0);
exports.SSSelect = SSSelect = __decorate([
    (0, decorators_js_1.customElement)('ss-select')
], SSSelect);
//# sourceMappingURL=ss-select.js.map