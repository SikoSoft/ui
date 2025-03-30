import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
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
        perspective: 1000px;
      }

      .carousel {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
      }

      .carousel__cell {
        position: absolute;
        width: 190px;
        height: 120px;
        left: 10px;
        top: 10px;
        border: 1px solid #ccc;
      }

      .carousel__cell:nth-child(1) {
        transform: rotateY(0deg) translateZ(288px);
      }
      .carousel__cell:nth-child(2) {
        transform: rotateY(40deg) translateZ(288px);
      }
      .carousel__cell:nth-child(3) {
        transform: rotateY(80deg) translateZ(288px);
      }
      .carousel__cell:nth-child(4) {
        transform: rotateY(120deg) translateZ(288px);
      }
      .carousel__cell:nth-child(5) {
        transform: rotateY(160deg) translateZ(288px);
      }
      .carousel__cell:nth-child(6) {
        transform: rotateY(200deg) translateZ(288px);
      }
      .carousel__cell:nth-child(7) {
        transform: rotateY(240deg) translateZ(288px);
      }
      .carousel__cell:nth-child(8) {
        transform: rotateY(280deg) translateZ(288px);
      }
      .carousel__cell:nth-child(9) {
        transform: rotateY(320deg) translateZ(288px);
      }
    `,
  ];

  @property({ type: Boolean })
  [SSCarouselProp.INFINITE]: SSCarouselProps[SSCarouselProp.INFINITE] =
    ssCarouselProps[SSCarouselProp.INFINITE].default;

  @property({ type: Number })
  [SSCarouselProp.ACTIVE_INDEX]: SSCarouselProps[SSCarouselProp.ACTIVE_INDEX] =
    ssCarouselProps[SSCarouselProp.ACTIVE_INDEX].default;

  @state()
  get classes() {
    return { wrapper: true };
  }

  render() {
    return html`
      <div class=${classMap(this.classes)}>
        <div class="scene">
          <div class="carousel">
            <div class="carousel__cell">1</div>
            <div class="carousel__cell">2</div>
            <div class="carousel__cell">3</div>
            <div class="carousel__cell">4</div>
            <div class="carousel__cell">5</div>
            <div class="carousel__cell">6</div>
            <div class="carousel__cell">7</div>
            <div class="carousel__cell">8</div>
            <div class="carousel__cell">9</div>
          </div>
        </div>
      </div>
    `;
  }
}
