import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { theme } from '../../styles/theme';
import { PopUpProp, PopUpProps, popUpProps } from './pop-up.models';
import { classMap } from 'lit/directives/class-map.js';
import { PopUpClosedEvent, PopUpOpenedEvent } from './pop-up.events';

@customElement('pop-up')
export class PopUp extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
      }

      .pop-up {
        display: none;
        position: fixed;
        width: 50vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--box-text-color, var(--ssui-box-text-color, #000));
        background-color: var(
          --box-background-color,
          var(--ssui-box-background-color)
        );
        border: 1px solid var(--box-border-color, var(--ssui-box-border-color));

        z-index: 1000;
        border-radius: 0.5rem;
        box-shadow: 0 0 5rem rgba(0, 0, 0, 0.75);
        max-height: 90vh;
        overflow-y: auto;

        &.open {
          display: block;
        }

        @media (max-width: 768px) {
          width: 90vw;
          max-height: 90vh;
          overflow: auto;
        }

        .inner {
          padding: 3rem;
          position: relative;
          width: 100%;
          height: 100%;
          box-sizing: border-box;

          .close-button {
            position: absolute;
            top: 0rem;
            right: 0.5rem;
            font-size: 1.5rem;
            cursor: pointer;
          }
        }
      }
    `,
  ];

  @property({ type: Boolean })
  [PopUpProp.OPEN]: PopUpProps[PopUpProp.OPEN] =
    popUpProps[PopUpProp.OPEN].default;

  @property({ type: Boolean })
  [PopUpProp.CLOSE_BUTTON]: PopUpProps[PopUpProp.CLOSE_BUTTON] =
    popUpProps[PopUpProp.CLOSE_BUTTON].default;

  @property({ type: Boolean })
  [PopUpProp.CLOSE_ON_OUTSIDE_CLICK]: PopUpProps[PopUpProp.CLOSE_ON_OUTSIDE_CLICK] =
    popUpProps[PopUpProp.CLOSE_ON_OUTSIDE_CLICK].default;

  @property({ type: Boolean })
  [PopUpProp.CLOSE_ON_ESC]: PopUpProps[PopUpProp.CLOSE_ON_ESC] =
    popUpProps[PopUpProp.CLOSE_ON_ESC].default;

  @state()
  newlyOpened = false;

  @state()
  lastOpenedState = false;

  @state()
  lastOpenedChangeTime: number | null = null;

  @query('.pop-up')
  private container!: HTMLDivElement;

  @state()
  get classes() {
    return {
      'pop-up': true,
      open: this.open,
    };
  }

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('click', this.handleClickOutside);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('click', this.handleClickOutside);
  }

  protected firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);

    this.lastOpenedState = this.open;
  }

  protected async updated(_changedProperties: PropertyValues): Promise<void> {
    super.updated(_changedProperties);

    await this.updateComplete;

    if (_changedProperties.has(PopUpProp.OPEN)) {
      if (this[PopUpProp.OPEN]) {
        this.newlyOpened = true;
        setTimeout(() => {
          this.newlyOpened = false;
        }, 100);
      } else {
        this.newlyOpened = false;
      }

      if (this[PopUpProp.OPEN] === this.lastOpenedState) {
        console.log('No state change detected, skipping event dispatch.');
        return;
      }

      this.lastOpenedState = this[PopUpProp.OPEN];
      this.lastOpenedChangeTime = new Date().getTime();

      if (this[PopUpProp.OPEN]) {
        console.log('Pop-up opened event dispatched.');
        this.dispatchEvent(
          new PopUpOpenedEvent({ changeTime: this.lastOpenedChangeTime }),
        );
      } else {
        console.log('Pop-up closed event dispatched.');
        this.dispatchEvent(
          new PopUpClosedEvent({ changeTime: this.lastOpenedChangeTime }),
        );
      }
    }
  }

  private handleClickOutside = (e: MouseEvent) => {
    if (
      !this.newlyOpened &&
      this[PopUpProp.CLOSE_ON_OUTSIDE_CLICK] &&
      this[PopUpProp.OPEN] &&
      !e.composedPath().includes(this.container)
    ) {
      this.lastOpenedChangeTime = new Date().getTime();
      this.dispatchEvent(
        new PopUpClosedEvent({ changeTime: this.lastOpenedChangeTime }),
      );
    }
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    if (this[PopUpProp.CLOSE_ON_ESC] && e.key === 'Escape') {
      this.lastOpenedChangeTime = new Date().getTime();
      this.dispatchEvent(
        new PopUpClosedEvent({ changeTime: this.lastOpenedChangeTime }),
      );
    }
  };

  render() {
    return html`
      <div class=${classMap(this.classes)} part="container">
        <div class="inner">
          ${this[PopUpProp.CLOSE_BUTTON]
            ? html`
                <div
                  class="close-button"
                  @click=${() => {
                    this.lastOpenedChangeTime = new Date().getTime();
                    this.dispatchEvent(
                      new PopUpClosedEvent({
                        changeTime: this.lastOpenedChangeTime,
                      }),
                    );
                  }}
                >
                  &#215;
                </div>
              `
            : nothing}
          <slot></slot>
        </div>
      </div>
    `;
  }
}
