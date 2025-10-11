import { LitElement, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { SelectChangedEvent } from './ss-select.events';

import { theme } from '../../styles/theme';
import { SSSelectProp, ssSelectProps, SSSelectProps } from './ss-select.models';

@customElement('ss-select')
export class SSSelect extends LitElement {
  static styles = [theme];

  @property({ type: Array })
  [SSSelectProp.OPTIONS]: SSSelectProps[SSSelectProp.OPTIONS] =
    ssSelectProps[SSSelectProp.OPTIONS].default;

  @property() [SSSelectProp.SELECTED]: SSSelectProps[SSSelectProp.SELECTED] =
    ssSelectProps[SSSelectProp.SELECTED].default;

  @property({ type: Boolean })
  [SSSelectProp.MULTIPLE]: SSSelectProps[SSSelectProp.MULTIPLE] =
    ssSelectProps[SSSelectProp.MULTIPLE].default;

  @query('select') selectNode!: HTMLSelectElement;

  get value(): string {
    return this.selectNode.value;
  }

  private handleSelectChanged() {
    this.dispatchEvent(
      new SelectChangedEvent({ value: this.selectNode.value }),
    );
  }

  valueIsSelected(value: string): boolean {
    if (this.multiple && Array.isArray(this.selected)) {
      return this.selected.map(String).includes(value);
    }

    return `${this.selected}` === `${value}`;
  }

  render() {
    return html`
      <select @change=${this.handleSelectChanged} ?multiple=${this.multiple}>
        ${repeat(
          this.options,
          option => option.value,
          option => html`
            <option
              value=${option.value}
              ?selected=${this.valueIsSelected(option.value)}
            >
              ${option.label}
            </option>
          `,
        )}
      </select>
    `;
  }
}
