var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b, _c;
import { LitElement, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { SelectChangedEvent } from './ss-select.events';
import { theme } from '../../styles/theme';
import { SSSelectProp, ssSelectProps } from './ss-select.models';
let SSSelect = class SSSelect extends LitElement {
    constructor() {
        super(...arguments);
        this[_a] = ssSelectProps[SSSelectProp.OPTIONS].default;
        this[_b] = ssSelectProps[SSSelectProp.SELECTED].default;
        this[_c] = ssSelectProps[SSSelectProp.MULTIPLE].default;
    }
    static { _a = SSSelectProp.OPTIONS, _b = SSSelectProp.SELECTED, _c = SSSelectProp.MULTIPLE; }
    static { this.styles = [theme]; }
    get value() {
        return this.selectNode.value;
    }
    handleSelectChanged() {
        let value = this.selectNode.value;
        if (this.multiple) {
            value = [...this.selectNode.selectedOptions].reduce((acc, option) => [...acc, option.value], []);
        }
        this.dispatchEvent(new SelectChangedEvent({ value }));
    }
    valueIsSelected(value) {
        if (this.multiple && Array.isArray(this.selected)) {
            return this.selected.map(String).includes(String(value));
        }
        return `${this.selected}` === `${value}`;
    }
    render() {
        return html `
      <select @change=${this.handleSelectChanged} ?multiple=${this.multiple}>
        ${repeat(this.options, option => option.value, option => html `
            <option
              value=${option.value}
              ?selected=${this.valueIsSelected(option.value)}
            >
              ${option.label}
            </option>
          `)}
      </select>
    `;
    }
};
__decorate([
    property({ type: Array })
], SSSelect.prototype, _a, void 0);
__decorate([
    property()
], SSSelect.prototype, _b, void 0);
__decorate([
    property({ type: Boolean })
], SSSelect.prototype, _c, void 0);
__decorate([
    query('select')
], SSSelect.prototype, "selectNode", void 0);
SSSelect = __decorate([
    customElement('ss-select')
], SSSelect);
export { SSSelect };
//# sourceMappingURL=ss-select.js.map