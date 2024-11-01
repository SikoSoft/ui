var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../components/ss-loader';
import { theme } from '../styles/theme';
let SSButton = class SSButton extends LitElement {
    constructor() {
        super(...arguments);
        this.text = '';
        this.disabled = false;
        this.loading = false;
        this._handleClick = (e) => {
            this.dispatchEvent(new CustomEvent('ss-button-clicked', {
                bubbles: true,
                composed: true,
            }));
        };
    }
    static { this.styles = [
        theme,
        css `
      button.disabled {
        opacity: 0.5;
      }
    `,
    ]; }
    get classes() {
        return { disabled: this.disabled };
    }
    render() {
        return html `
      <button
        class=${classMap(this.classes)}
        @click=${this._handleClick}
        ?disabled=${this.disabled}
      >
        ${this.loading ? html ` <ss-loader></ss-loader> ` : this.text}
      </button>
    `;
    }
};
__decorate([
    property()
], SSButton.prototype, "text", void 0);
__decorate([
    property({ type: Boolean })
], SSButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], SSButton.prototype, "loading", void 0);
__decorate([
    state()
], SSButton.prototype, "classes", null);
SSButton = __decorate([
    customElement('ss-button')
], SSButton);
export { SSButton };
//# sourceMappingURL=ss-button.js.map