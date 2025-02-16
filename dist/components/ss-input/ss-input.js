"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSInput = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const input_submitted_1 = require("../../events/input-submitted");
const input_changed_1 = require("../../events/input-changed");
require("../ss-input-auto/ss-input-auto");
const theme_1 = require("../../styles/theme");
const ss_input_models_1 = require("./ss-input.models");
let SSInput = class SSInput extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.clickFocusHandler = (event) => { };
        this[_a] = ss_input_models_1.ssInputProps[ss_input_models_1.SSInputProp.TYPE].default;
        this[_b] = '';
        this[_c] = false;
        this[_d] = '';
        this[_e] = ss_input_models_1.ssInputProps[ss_input_models_1.SSInputProp.SUGGESTIONS].default;
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
            this.dispatchEvent(new input_changed_1.InputChangedEvent({
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
            this.inputField.dispatchEvent(new input_changed_1.InputChangedEvent({ value: e.detail.value }));
        };
    }
    static { _a = ss_input_models_1.SSInputProp.TYPE, _b = ss_input_models_1.SSInputProp.VALUE, _c = ss_input_models_1.SSInputProp.AUTO_COMPLETE, _d = ss_input_models_1.SSInputProp.PLACEHOLDER, _e = ss_input_models_1.SSInputProp.SUGGESTIONS; }
    static { this.styles = [
        theme_1.theme,
        (0, lit_1.css) `
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
        this.dispatchEvent(new input_changed_1.InputChangedEvent({
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
        this.inputField.dispatchEvent(new input_submitted_1.InputSubmittedEvent({ value: this._value }));
    }
    _handleSubmit() {
        this._sendSubmittedEvent();
    }
    render() {
        return (0, lit_1.html) `
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
          autocapitalize="off"
        />
        ${this.showAutoComplete
            ? (0, lit_1.html) `
              <ss-input-auto
                input=${this._value}
                .suggestions=${this.suggestions}
                @suggestion-submitted=${this._handleSubmit}
                @suggestion-changed=${this._suggestionSelectHandler}
              ></ss-input-auto>
            `
            : lit_1.nothing}
      </span>
    `;
    }
};
exports.SSInput = SSInput;
__decorate([
    (0, decorators_js_1.property)()
], SSInput.prototype, _a, void 0);
__decorate([
    (0, decorators_js_1.property)()
], SSInput.prototype, _b, void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean })
], SSInput.prototype, _c, void 0);
__decorate([
    (0, decorators_js_1.property)()
], SSInput.prototype, _d, void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Array })
], SSInput.prototype, _e, void 0);
__decorate([
    (0, decorators_js_1.state)()
], SSInput.prototype, "_value", void 0);
__decorate([
    (0, decorators_js_1.query)('#input-field')
], SSInput.prototype, "inputField", void 0);
__decorate([
    (0, decorators_js_1.query)('ss-input-auto')
], SSInput.prototype, "autoCompleteNode", void 0);
__decorate([
    (0, decorators_js_1.query)('span')
], SSInput.prototype, "container", void 0);
__decorate([
    (0, decorators_js_1.state)()
], SSInput.prototype, "hasFocus", void 0);
__decorate([
    (0, decorators_js_1.state)()
], SSInput.prototype, "autoDismissed", void 0);
__decorate([
    (0, decorators_js_1.state)()
], SSInput.prototype, "showAutoComplete", null);
exports.SSInput = SSInput = __decorate([
    (0, decorators_js_1.customElement)('ss-input')
], SSInput);
//# sourceMappingURL=ss-input.js.map