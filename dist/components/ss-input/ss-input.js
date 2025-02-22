var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b, _c, _d, _e, _f, _g, _h;
import { LitElement, html, nothing, css } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { InputType } from '../../models/Input';
import { InputSubmittedEvent } from '../../events/input-submitted';
import { InputChangedEvent } from '../../events/input-changed';
import '../ss-input-auto/ss-input-auto';
import { theme } from '../../styles/theme';
import { SSInputProp, ssInputProps } from './ss-input.models';
let SSInput = class SSInput extends LitElement {
    constructor() {
        super(...arguments);
        this.clickFocusHandler = (event) => { };
        this[_a] = ssInputProps[SSInputProp.TYPE].default;
        this[_b] = ssInputProps[SSInputProp.VALUE].default;
        this[_c] = ssInputProps[SSInputProp.AUTO_COMPLETE].default;
        this[_d] = ssInputProps[SSInputProp.PLACEHOLDER].default;
        this[_e] = ssInputProps[SSInputProp.SUGGESTIONS].default;
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
                case 'Tab':
                    this.autoDismissed = true;
                    return;
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
            this.inputField.value = e.detail.value;
            this.inputField.dispatchEvent(new InputChangedEvent({ value: e.detail.value }));
        };
    }
    static { _a = SSInputProp.TYPE, _b = SSInputProp.VALUE, _c = SSInputProp.AUTO_COMPLETE, _d = SSInputProp.PLACEHOLDER, _e = SSInputProp.SUGGESTIONS, _f = SSInputProp.MIN, _g = SSInputProp.MAX, _h = SSInputProp.STEP; }
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
    connectedCallback() {
        super.connectedCallback();
        this.clickFocusHandler = (event) => {
            const withinBoundaries = event.composedPath().includes(this.container);
            if (!withinBoundaries) {
                this.autoDismissed = true;
            }
            if (this.type === InputType.NUMBER) {
                this.min = ssInputProps[SSInputProp.MIN].default;
                this.max = ssInputProps[SSInputProp.MAX].default;
                this.step = ssInputProps[SSInputProp.STEP].default;
            }
            console.log('connected', {
                min: this.min,
                max: this.max,
                step: this.step,
            });
        };
        window.addEventListener('mousedown', this.clickFocusHandler);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('mousedown', this.clickFocusHandler);
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
          min=${ifDefined(this.min)}
          max=${ifDefined(this.max)}
          step=${ifDefined(this.step)}
          autocomplete="off"
          autocapitalize="off"
        />
        ${this.showAutoComplete
            ? html `
              <ss-input-auto
                input=${this._value}
                .suggestions=${this.suggestions}
                @suggestion-submitted=${this._handleSubmit}
                @suggestion-changed=${this._suggestionSelectHandler}
              ></ss-input-auto>
            `
            : nothing}
      </span>
    `;
    }
};
__decorate([
    property()
], SSInput.prototype, _a, void 0);
__decorate([
    property()
], SSInput.prototype, _b, void 0);
__decorate([
    property({ type: Boolean })
], SSInput.prototype, _c, void 0);
__decorate([
    property()
], SSInput.prototype, _d, void 0);
__decorate([
    property({ type: Array })
], SSInput.prototype, _e, void 0);
__decorate([
    property({ type: Number, reflect: true })
], SSInput.prototype, _f, void 0);
__decorate([
    property({ type: Number, reflect: true })
], SSInput.prototype, _g, void 0);
__decorate([
    property({ type: Number, reflect: true })
], SSInput.prototype, _h, void 0);
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
    query('span')
], SSInput.prototype, "container", void 0);
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