var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, nothing, LitElement } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { theme } from '@/styles/theme';
let SSInputAuto = class SSInputAuto extends LitElement {
    constructor() {
        super(...arguments);
        this.input = '';
        this.maxMatches = 5;
        this.minInput = 1;
        this.suggestions = [];
        this.selectedIndex = -1;
    }
    static { this.styles = [
        theme,
        css `
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
        this.dispatchEvent(new CustomEvent('suggestion-selected', {
            bubbles: true,
            composed: true,
            detail: suggestion,
        }));
    }
    _sendSubmitEvent() {
        this.dispatchEvent(new CustomEvent('submit', {
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return html `
      <div>
        ${this.show
            ? html ` <ul class="box">
              ${repeat(this.suggestions, suggestion => suggestion, (suggestion, index) => html `
                  <li
                    class=${index === this.selectedIndex ? 'selected' : ''}
                    @mouseover=${() => (this.selectedIndex = index)}
                    @click=${() => this._sendSelectedEvent(suggestion)}
                  >
                    ${suggestion}
                  </li>
                `)}
            </ul>`
            : nothing}
      </div>
    `;
    }
};
__decorate([
    property()
], SSInputAuto.prototype, "input", void 0);
__decorate([
    property({ type: Number })
], SSInputAuto.prototype, "maxMatches", void 0);
__decorate([
    property({ type: Number })
], SSInputAuto.prototype, "minInput", void 0);
__decorate([
    property({ type: Array })
], SSInputAuto.prototype, "suggestions", void 0);
__decorate([
    state()
], SSInputAuto.prototype, "selectedIndex", void 0);
__decorate([
    state()
], SSInputAuto.prototype, "show", null);
SSInputAuto = __decorate([
    customElement('ss-input-auto')
], SSInputAuto);
export { SSInputAuto };
//# sourceMappingURL=ss-input-auto.js.map