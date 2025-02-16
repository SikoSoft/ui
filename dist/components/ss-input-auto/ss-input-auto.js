"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSInputAuto = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const repeat_js_1 = require("lit/directives/repeat.js");
const suggestion_submitted_1 = require("../../events/suggestion-submitted");
const suggestion_changed_1 = require("../../events/suggestion-changed");
const theme_1 = require("../../styles/theme");
let SSInputAuto = class SSInputAuto extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.input = '';
        this.maxMatches = 5;
        this.minInput = 1;
        this.suggestions = [];
        this.selectedIndex = -1;
    }
    static { this.styles = [
        theme_1.theme,
        (0, lit_1.css) `
      div {
        position: relative;
      }

      ul {
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        overflow: hidden;
      }

      li {
        padding: 0.5rem;
        background-color: #fff;
        transition: all 0.2s;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 2rem;
        line-height: 2rem;
        color: #888;
        text-align: left;
      }

      li.selected {
        color: #000;
        background-color: #ddd;
      }
    `,
    ]; }
    get show() {
        return this.suggestions.length > 0 && this.input.length >= this.minInput;
    }
    get maxSelectedIndex() {
        return this.suggestions.length - 1;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('select-up', () => {
            this._adjustSelectedIndex(-1);
        });
        this.addEventListener('select-down', () => {
            this._adjustSelectedIndex(1);
        });
        this.addEventListener('select', () => {
            if (this.suggestions.length && this.selectedIndex !== -1) {
                this._sendSelectedEvent(this.suggestions[this.selectedIndex]);
            }
            else {
                this._sendSubmitEvent();
            }
        });
    }
    _adjustSelectedIndex(adjustment) {
        let newIndex = this.selectedIndex + adjustment;
        if (newIndex < -1) {
            newIndex = this.maxSelectedIndex;
        }
        if (newIndex > this.maxSelectedIndex) {
            newIndex = -1;
        }
        this.selectedIndex = newIndex;
    }
    _sendSelectedEvent(suggestion) {
        this.dispatchEvent(new suggestion_changed_1.SuggestionChangedEvent({ value: suggestion }));
    }
    _sendSubmitEvent() {
        this.dispatchEvent(new suggestion_submitted_1.SuggestiontSubmittedEvent({ selectedIndex: this.selectedIndex }));
    }
    render() {
        return (0, lit_1.html) `
      <div>
        ${this.show
            ? (0, lit_1.html) ` <ul class="box">
              ${(0, repeat_js_1.repeat)(this.suggestions, suggestion => suggestion, (suggestion, index) => (0, lit_1.html) `
                  <li
                    class=${index === this.selectedIndex ? 'selected' : ''}
                    @mouseover=${() => (this.selectedIndex = index)}
                    @click=${() => this._sendSelectedEvent(suggestion)}
                  >
                    ${suggestion}
                  </li>
                `)}
            </ul>`
            : lit_1.nothing}
      </div>
    `;
    }
};
exports.SSInputAuto = SSInputAuto;
__decorate([
    (0, decorators_js_1.property)()
], SSInputAuto.prototype, "input", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Number })
], SSInputAuto.prototype, "maxMatches", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Number })
], SSInputAuto.prototype, "minInput", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Array })
], SSInputAuto.prototype, "suggestions", void 0);
__decorate([
    (0, decorators_js_1.state)()
], SSInputAuto.prototype, "selectedIndex", void 0);
__decorate([
    (0, decorators_js_1.state)()
], SSInputAuto.prototype, "show", null);
exports.SSInputAuto = SSInputAuto = __decorate([
    (0, decorators_js_1.customElement)('ss-input-auto')
], SSInputAuto);
//# sourceMappingURL=ss-input-auto.js.map