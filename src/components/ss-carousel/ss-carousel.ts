import { LitElement, html, css, PropertyValues } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { theme } from '../../styles/theme';
import {
  SSCarouselProp,
  ssCarouselProps,
  SSCarouselProps,
} from './ss-carousel.models';

@customElement('ss-carousel')
export class SSCarousel extends LitElement {
  static styles = [
    theme,
    css`
      .scene {
        width: 210px;
        height: 140px;
        position: relative;
        perspective: 200px;
        border: 1px solid #ccc;
      }

      .back {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      .forward {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }

      .carousel {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        transition: transform 0.5s;
      }

      ::slotted(.frame) {
        position: absolute;
        width: 190px;
        height: 120px;
        left: 10px;
        top: 10px;
        border: 1px solid #ccc;
      }
    `,
  ];

  @property({ type: Boolean })
  [SSCarouselProp.INFINITE]: SSCarouselProps[SSCarouselProp.INFINITE] =
    ssCarouselProps[SSCarouselProp.INFINITE].default;

  @property({ type: Number, reflect: true })
  [SSCarouselProp.ACTIVE_INDEX]: SSCarouselProps[SSCarouselProp.ACTIVE_INDEX] =
    ssCarouselProps[SSCarouselProp.ACTIVE_INDEX].default;

  @query('.carousel')
  carousel!: HTMLDivElement;

  @state()
  get totalFrames(): number {
    const total = this.children.length;
    return total;
  }

  @state()
  get frameDegrees(): number {
    return 360 / this.totalFrames;
  }

  @state()
  get frameTransition(): number {
    return Math.round(210 / 2 / Math.tan(Math.PI / this.totalFrames));
  }

  @state()
  get classes() {
    return { wrapper: true };
  }

  @state()
  get normalizedIndex(): number {
    return this.activeIndex % this.totalFrames;
  }

  async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
    super.firstUpdated(_changedProperties);
    await this.updateComplete;

    console.log('firstUpdated', this.innerHTML, this.querySelector('slot'));

    console.log('childnodes', this.children);

    const slotNode = this.querySelector('slot');
    if (slotNode) {
      console.log('slotNode', slotNode);
      console.log(slotNode);

      slotNode.childNodes.forEach(node => {
        console.log('node', node);
      });
    }
  }

  _back() {
    console.log('back');
    this.activeIndex--;
    this.rotateCarousel();
  }

  _forward() {
    console.log('forward');
    this.activeIndex++;
    this.rotateCarousel();
  }

  rotateCarousel() {
    const angle = (this.activeIndex / this.totalFrames) * -360;
    this.carousel.style.transform = `translateZ(-${this.frameTransition}px) rotateY(${angle}deg)`;
  }

  render() {
    return html`
      <style>
        .carousel {
          transform: translateZ(-${this.frameTransition}px);
        }

        ${[...Array(this.totalFrames)].map(
          (_, i) => css`
            ::slotted(.frame:nth-child(${i + 1})) {
              transform: rotateY(${i * this.frameDegrees}deg)
                translateZ(${this.frameTransition}px);
            }
          `,
        )}
      </style>
      <div class=${classMap(this.classes)}>
        <div class="scene">
          <div class="carousel">
            <slot></slot>
          </div>
          <div class="back"><button @click=${this._back}>&#x21e6;</button></div>
          <div class="forward">
            <button @click=${this._forward}>&#x21e8;</button>
          </div>
        </div>
      </div>
    `;
  }
}
