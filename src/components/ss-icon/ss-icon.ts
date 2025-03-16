import { LitElement, html, PropertyValueMap, nothing, css } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';

import './svg/svg-profile';

import { theme } from '../../styles/theme';
import { SSIconProp, SSIconProps, ssIconProps } from './ss-icon.models';

@customElement('ss-icon')
export class SSIcon extends LitElement {
  static styles = [
    theme,
    css`
      .icon {
        display: inline-block;
        width: var(--size, 24px);
        height: var(--size, 24px);

        & > * {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: var(--color, #000);
        }
      }
    `,
  ];

  @property()
  [SSIconProp.NAME]: SSIconProps[SSIconProp.NAME] =
    ssIconProps[SSIconProp.NAME].default;

  @property()
  [SSIconProp.COLOR]: SSIconProps[SSIconProp.COLOR] =
    ssIconProps[SSIconProp.COLOR].default;

  @property({ type: Number })
  [SSIconProp.SIZE]: SSIconProps[SSIconProp.SIZE] =
    ssIconProps[SSIconProp.SIZE].default;

  render() {
    return html`
      <span
        class="icon"
        style="--color: ${this[SSIconProp.COLOR]}; --size: ${this[
          SSIconProp.SIZE
        ]}px;"
      >
        <svg-profile></svg-profile>
      </span>
    `;
  }
}
