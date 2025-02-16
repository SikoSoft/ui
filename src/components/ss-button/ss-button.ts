import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '../ss-loader/ss-loader';

import { theme } from '../../styles/theme';

export enum SSButtonProp {
  TEXT = 'text',
  DISABLED = 'disabled',
  LOADING = 'loading',
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
  CLASS = 'class',
}

export interface SSButtonProps {
  [SSButtonProp.TEXT]: string;
  [SSButtonProp.DISABLED]: boolean;
  [SSButtonProp.LOADING]: boolean;
  [SSButtonProp.POSITIVE]: boolean;
  [SSButtonProp.NEGATIVE]: boolean;
  [SSButtonProp.CLASS]: string;
}

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

  @property() [SSButtonProp.TEXT]: SSButtonProps[SSButtonProp.TEXT] = '';

  @property({ type: Boolean })
  [SSButtonProp.DISABLED]: SSButtonProps[SSButtonProp.DISABLED] = false;

  @property({ type: Boolean })
  [SSButtonProp.LOADING]: SSButtonProps[SSButtonProp.LOADING] = false;

  @property({ type: Boolean })
  [SSButtonProp.POSITIVE]: SSButtonProps[SSButtonProp.POSITIVE] = false;

  @property({ type: Boolean })
  [SSButtonProp.NEGATIVE]: SSButtonProps[SSButtonProp.NEGATIVE] = false;

  @property() [SSButtonProp.CLASS]: SSButtonProps[SSButtonProp.CLASS] = '';

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
