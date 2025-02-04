import { html, css, nothing, LitElement } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { SuggestiontSubmittedEvent } from '../events/suggestion-submitted';
import { SuggestionChangedEvent } from '../events/suggestion-changed';

import { theme } from '../styles/theme';

@customElement('ss-input-auto')
export class SSInputAuto extends LitElement {
  static styles = [
    theme,
    css`
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
  ];

  @property() input: string = '';
  @property({ type: Number }) maxMatches: number = 5;
  @property({ type: Number }) minInput: number = 1;
  @property({ type: Array }) suggestions: string[] = [];
  @state() selectedIndex: number = -1;

  @state()
  get show(): boolean {
    return this.suggestions.length > 0 && this.input.length >= this.minInput;
  }

  get maxSelectedIndex(): number {
    return this.suggestions.length - 1;
  }

  connectedCallback(): void {
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
      } else {
        this._sendSubmitEvent();
      }
    });
  }

  private _adjustSelectedIndex(adjustment: number): void {
    let newIndex = this.selectedIndex + adjustment;
    if (newIndex < -1) {
      newIndex = this.maxSelectedIndex;
    }
    if (newIndex > this.maxSelectedIndex) {
      newIndex = -1;
    }
    this.selectedIndex = newIndex;
  }

  private _sendSelectedEvent(suggestion: string) {
    this.dispatchEvent(new SuggestionChangedEvent({ value: suggestion }));
  }

  private _sendSubmitEvent() {
    this.dispatchEvent(
      new SuggestiontSubmittedEvent({ selectedIndex: this.selectedIndex }),
    );
  }

  render() {
    return html`
      <div>
        ${this.show
          ? html` <ul class="box">
              ${repeat(
                this.suggestions,
                suggestion => suggestion,
                (suggestion, index) => html`
                  <li
                    class=${index === this.selectedIndex ? 'selected' : ''}
                    @mouseover=${() => (this.selectedIndex = index)}
                    @click=${() => this._sendSelectedEvent(suggestion)}
                  >
                    ${suggestion}
                  </li>
                `,
              )}
            </ul>`
          : nothing}
      </div>
    `;
  }
}
