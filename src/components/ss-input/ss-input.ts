import { LitElement, html, PropertyValueMap, nothing, css } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { InputType } from '../../models/Input';

import { InputSubmittedEvent } from '../../events/input-submitted';
import { InputChangedEvent } from '../../events/input-changed';

import '../ss-input-auto/ss-input-auto';

import { theme } from '../../styles/theme';
import { SuggestionChangedEvent } from '../../events/suggestion-changed';
import { SSInputProp, SSInputProps, ssInputProps } from './ss-input.models';

@customElement('ss-input')
export class SSInput extends LitElement {
  private clickFocusHandler: (event: MouseEvent) => void = (
    event: MouseEvent,
  ) => {};

  static styles = [
    theme,
    css`
      input:focus {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
    `,
  ];

  @property()
  [SSInputProp.TYPE]: SSInputProps[SSInputProp.TYPE] =
    ssInputProps[SSInputProp.TYPE].default;

  @property()
  [SSInputProp.VALUE]: SSInputProps[SSInputProp.VALUE] =
    ssInputProps[SSInputProp.VALUE].default;

  @property({ type: Boolean })
  [SSInputProp.AUTO_COMPLETE]: SSInputProps[SSInputProp.AUTO_COMPLETE] =
    ssInputProps[SSInputProp.AUTO_COMPLETE].default;

  @property()
  [SSInputProp.PLACEHOLDER]: SSInputProps[SSInputProp.PLACEHOLDER] =
    ssInputProps[SSInputProp.PLACEHOLDER].default;

  @property({ type: Array })
  [SSInputProp.SUGGESTIONS]: SSInputProps[SSInputProp.SUGGESTIONS] =
    ssInputProps[SSInputProp.SUGGESTIONS].default;

  @property({ type: Number, reflect: true })
  [SSInputProp.MIN]?: SSInputProps[SSInputProp.MIN];

  @property({ type: Number, reflect: true })
  [SSInputProp.MAX]?: SSInputProps[SSInputProp.MAX];

  @property({ type: Number, reflect: true })
  [SSInputProp.STEP]?: SSInputProps[SSInputProp.STEP];

  @state() _value: string = this.value;
  @query('#input-field') inputField!: HTMLInputElement;
  @query('ss-input-auto') autoCompleteNode!: HTMLElement;
  @query('span') container!: HTMLSpanElement;

  @state() hasFocus: boolean = false;
  @state() autoDismissed: boolean = false;
  @state()
  get showAutoComplete(): boolean {
    return this.autoComplete && !this.autoDismissed && this.value.length > 0;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.clickFocusHandler = (event: MouseEvent) => {
      const withinBoundaries = event.composedPath().includes(this.container);
      if (!withinBoundaries) {
        this.autoDismissed = true;
      }

      if (this.type === InputType.NUMBER) {
        this.min = ssInputProps[SSInputProp.MIN].default;
        this.max = ssInputProps[SSInputProp.MAX].default;
        this.step = ssInputProps[SSInputProp.STEP].default;
      }
    };

    window.addEventListener('mousedown', this.clickFocusHandler);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    window.removeEventListener('mousedown', this.clickFocusHandler);
  }

  updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ) {
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
    this.dispatchEvent(
      new InputChangedEvent({
        value: '',
      }),
    );
  }

  private _handleChange = (e: Event): boolean => {
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

  private _handleKeyDown = (e: KeyboardEvent): void => {
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
        } else {
          this._sendSubmittedEvent();
        }
        e.preventDefault();
        return;
    }
  };

  private _sendSuggestionUpEvent() {
    this.autoCompleteNode.dispatchEvent(new CustomEvent('select-up'));
  }

  private _sendSuggestionDownEvent() {
    this.autoCompleteNode.dispatchEvent(new CustomEvent('select-down'));
  }

  private _sendSuggestionSelectEvent() {
    this.autoCompleteNode.dispatchEvent(new CustomEvent('select'));
  }

  private _sendSubmittedEvent() {
    this.inputField.dispatchEvent(
      new InputSubmittedEvent({ value: this._value }),
    );
  }

  private _handleSubmit() {
    this._sendSubmittedEvent();
  }

  private _handleInput = (e: Event): boolean => {
    let value = '';
    if (e.target instanceof HTMLInputElement) {
      value = e.target.value;
    }
    this.dispatchEvent(
      new InputChangedEvent({
        value,
      }),
    );
    this._value = value;
    this.autoDismissed = false;
    return true;
  };

  private _handleFocus = (e: Event): void => {
    this.hasFocus = true;
    this.autoDismissed = false;
  };

  private _handleBlur = (e: Event): void => {
    setTimeout(() => {
      this.hasFocus = false;
    }, 200);
  };

  private _suggestionSelectHandler = (e: SuggestionChangedEvent): void => {
    this.autoDismissed = true;
    this.inputField.value = e.detail.value;
    this.inputField.dispatchEvent(
      new InputChangedEvent({ value: e.detail.value }),
    );
  };

  render() {
    return html`
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
          ? html`
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
}
