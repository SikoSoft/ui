import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '../ss-loader/ss-loader';

import { theme } from '../../styles/theme';

@customElement('ss-button')
export class SSButton extends LitElement {
  static styles = [
    theme,
    css`
      button {
        border-radius: 0.5rem;

        &.loading {
          min-width: 100px;
        }

        &.positive {
          background-color: var(--positive-background-color);
          color: var(--positive-color);
          border-color: var(--positive-color);
        }

        &.negative {
          background-color: var(--negative-background-color);
          color: var(--negative-color);
          border-color: var(--negative-color);
        }

        &.disabled {
          opacity: 0.5;
        }
      }
    `,
  ];

  @property() text: string = '';
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: Boolean }) loading: boolean = false;
  @property({ type: Boolean }) positive: boolean = false;
  @property({ type: Boolean }) negative: boolean = false;
  @property() class: string = '';

  @state()
  get classes() {
    const classes: Record<string, boolean> = {
      loading: this.loading,
      disabled: this.disabled,
      positive: this.positive,
      negative: this.negative,
    };
    this.class.split(' ').forEach(className => {
      classes[className] = true;
    });
    return classes;
  }

  private _handleClick = (e: CustomEvent): void => {
    this.dispatchEvent(
      new CustomEvent('ss-button-clicked', {
        bubbles: true,
        composed: true,
      }),
    );
  };

  render() {
    return html`
      <button
        class=${classMap(this.classes)}
        @click=${this._handleClick}
        ?disabled=${this.disabled}
      >
        ${this.loading ? html` <ss-loader></ss-loader> ` : this.text}
      </button>
    `;
  }
}
