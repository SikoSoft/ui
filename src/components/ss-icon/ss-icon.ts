import { LitElement, html, css, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import './svg/svg-profile';
import './svg/svg-arrow-circle-left';
import './svg/svg-arrow-circle-right';

import { theme } from '../../styles/theme';
import {
  IconName,
  SSIconProp,
  SSIconProps,
  ssIconProps,
} from './ss-icon.models';

@customElement('ss-icon')
export class SSIcon extends LitElement {
  static styles = [
    theme,

    css`
      :host {
        display: inline-block;
      }

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

  renderIcon() {
    switch (this[SSIconProp.NAME]) {
      case IconName.PROFILE:
        return html`<svg-profile></svg-profile>`;
      case IconName.ARROW_CIRCLE_LEFT:
        return html`<svg-arrow-circle-left></svg-arrow-circle-left>`;
      case IconName.ARROW_CIRCLE_RIGHT:
        return html`<svg-arrow-circle-right></svg-arrow-circle-right>`;
      default:
        return nothing;
    }
  }

  render() {
    return html`
      <span
        class="icon"
        style="--color: ${this[SSIconProp.COLOR]}; --size: ${this[
          SSIconProp.SIZE
        ]}px;"
      >
        ${this.renderIcon()}
      </span>
    `;
  }
}
