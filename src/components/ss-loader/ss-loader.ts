import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SSLoaderProp, ssLoaderProps, SSLoaderProps } from './ss-loader.models';
import { theme } from '../../styles/theme';

@customElement('ss-loader')
export class SSLoader extends LitElement {
  static styles = [
    theme,
    css`
      .container {
        text-align: center;
        height: 16px;
      }

      .container.padded {
        margin: 1rem;
      }

      .loader {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: var(--loader-color1, var(--ssui-loader-color1, #000));
        box-shadow:
          32px 0 var(--loader-color1, var(--ssui-loader-color1, #000)),
          -32px 0 var(--loader-color1, var(--ssui-loader-color1, #000));
        position: relative;
        animation: flash 0.5s ease-out infinite alternate;
        transform: skewX(50%);
      }

      @keyframes flash {
        0% {
          background-color: var(
            --loader-color2,
            var(--ssui-loader-color2, #0002)
          );
          box-shadow:
            32px 0 var(--loader-color2, var(--ssui-loader-color2, #0002)),
            -32px 0 var(--loader-color1, var(--ssui-loader-color1, #000));
        }
        50% {
          background-color: var(
            --loader-color1,
            var(--ssui-loader-color1, #000)
          );
          box-shadow:
            32px 0 var(--loader-color2, var(--ssui-loader-color2, #0002)),
            -32px 0 var(--loader-color2, var(--ssui-loader-color2, #0002));
        }
        100% {
          background-color: var(
            --loader-color2,
            var(--ssui-loader-color2, #0002)
          );
          box-shadow:
            32px 0 var(--loader-color1, var(--ssui-loader-color1, #000)),
            -32px 0 var(--loader-color2, var(--ssui-loader-color2, #0002));
        }
      }
    `,
  ];

  @property({ type: Boolean })
  [SSLoaderProp.PADDED]: SSLoaderProps[SSLoaderProp.PADDED] =
    ssLoaderProps[SSLoaderProp.PADDED].default;

  @state()
  get classes() {
    return { container: true, padded: this.padded };
  }

  render() {
    return html`<div class=${classMap(this.classes)}>
      <span class="loader"></span>
    </div>`;
  }
}
