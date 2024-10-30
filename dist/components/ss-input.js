var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, nothing, css } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { InputType } from '../models/Input';
import { InputSubmittedEvent } from '../events/input-submitted';
import { InputChangedEvent } from '../events/input-changed';
import '@/components/ss-input-auto';
import { theme } from '@/styles/theme';
let SSInput = class SSInput extends LitElement {
    constructor() {
        super(...arguments);
        this.type = InputType.TEXT;
        this.value = '';
        this.autoComplete = false;
        this.placeholder = '';
        this._value = this.value;
        this.hasFocus = false;
        this.autoDismissed = false;
        this._handleChange = (e) => {
            let value = '';
            if (e.target instanceof HTMLInputElement) {
                value = e.target.value;
            }
            this._value = value;
            if (e.target instanceof HTMLInputElement) {
                e.target.value = this._value;
            }
            e.preventDefault();
            return false;
        };
        this._handleKeyDown = (e) => {
            if (!(e.target instanceof HTMLInputElement)) {
                return;
            }
            switch (e.code) {
                case 'ArrowUp':
                    this._sendSuggestionUpEvent();
                    e.preventDefault();
                    return;
                case 'ArrowDown':
                    this._sendSuggestionDownEvent();
                    e.preventDefault();
                    return;
                case 'Enter':
                    if (this.showAutoComplete) {
                        this._sendSuggestionSelectEvent();
                    }
                    else {
                        this._sendSubmittedEvent();
                    }
                    e.preventDefault();
                    return;
            }
        };
        this._handleInput = (e) => {
            let value = '';
            if (e.target instanceof HTMLInputElement) {
                value = e.target.value;
            }
            this.dispatchEvent(new InputChangedEvent({
                value,
            }));
            this._value = value;
            this.autoDismissed = false;
            return true;
        };
        this._handleFocus = (e) => {
            this.hasFocus = true;
            this.autoDismissed = false;
        };
        this._handleBlur = (e) => {
            setTimeout(() => {
                this.hasFocus = false;
            }, 200);
        };
        this._suggestionSelectHandler = (e) => {
            this.autoDismissed = true;
            this.inputField.value = e.detail;
            this.inputField.dispatchEvent(new InputChangedEvent({ value: e.detail }));
        };
    }
    static { this.styles = [
        theme,
        css `
      input:focus {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
    `,
    ]; }
    get showAutoComplete() {
        return this.autoComplete && !this.autoDismissed && this.value.length > 0;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('value')) {
            this.inputField.value = this.value;
        }
    }
    focus() {
        this.inputField.focus();
    }
    clear() {
        this.inputField.value = '';
        this.dispatchEvent(new InputChangedEvent({
            value: '',
        }));
    }
    _sendSuggestionUpEvent() {
        this.autoCompleteNode.dispatchEvent(new CustomEvent('select-up'));
    }
    _sendSuggestionDownEvent() {
        this.autoCompleteNode.dispatchEvent(new CustomEvent('select-down'));
    }
    _sendSuggestionSelectEvent() {
        this.autoCompleteNode.dispatchEvent(new CustomEvent('select'));
    }
    _sendSubmittedEvent() {
        this.inputField.dispatchEvent(new InputSubmittedEvent({ value: this._value }));
    }
    _handleSubmit() {
        this._sendSubmittedEvent();
    }
    render() {
        return html `
      <span>
        <input
          id="input-field"
          type=${this.type}
          value=${this.value}
          @change=${this._handleChange}
          @keydown=${this._handleKeyDown}
          @input=${this._handleInput}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          placeholder=${this.placeholder}
          autocomplete="off"
        />
        ${this.showAutoComplete
            ? html `
              <ss-input-auto
                input=${this._value}
                @submit=${this._handleSubmit}
                @suggestion-selected=${this._suggestionSelectHandler}
              ></ss-input-auto>
            `
            : nothing}
      </span>
    `;
    }
};
__decorate([
    property()
], SSInput.prototype, "type", void 0);
__decorate([
    property()
], SSInput.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], SSInput.prototype, "autoComplete", void 0);
__decorate([
    property()
], SSInput.prototype, "placeholder", void 0);
__decorate([
    state()
], SSInput.prototype, "_value", void 0);
__decorate([
    query('#input-field')
], SSInput.prototype, "inputField", void 0);
__decorate([
    query('ss-input-auto')
], SSInput.prototype, "autoCompleteNode", void 0);
__decorate([
    state()
], SSInput.prototype, "hasFocus", void 0);
__decorate([
    state()
], SSInput.prototype, "autoDismissed", void 0);
__decorate([
    state()
], SSInput.prototype, "showAutoComplete", null);
SSInput = __decorate([
    customElement('ss-input')
], SSInput);
export { SSInput };
//# sourceMappingURL=ss-input.js.map