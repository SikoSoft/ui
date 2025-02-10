var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { SelectChangedEvent } from '../../events/select-changed';
import { theme } from '../../styles/theme';
let SSSelect = class SSSelect extends LitElement {
    constructor() {
        super(...arguments);
        this.options = [];
        this.selected = '';
    }
    static { this.styles = [theme]; }
    get value() {
        return this.selectNode.value;
    }
    _handleSelectChanged() {
        this.dispatchEvent(new SelectChangedEvent({ value: this.selectNode.value }));
    }
    render() {
        return html `
      <select @change=${this._handleSelectChanged}>
        ${repeat(this.options, option => option.value, option => html `
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
__decorate([
    property({ type: Array })
], SSSelect.prototype, "options", void 0);
__decorate([
    property()
], SSSelect.prototype, "selected", void 0);
__decorate([
    query('select')
], SSSelect.prototype, "selectNode", void 0);
SSSelect = __decorate([
    customElement('ss-select')
], SSSelect);
export { SSSelect };
//# sourceMappingURL=ss-select.js.map