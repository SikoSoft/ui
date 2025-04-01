import { LitElement, html, css, PropertyValues, nothing } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { theme } from '../../styles/theme';
import {
  ContactPoint,
  SSCarouselProp,
  ssCarouselProps,
  SSCarouselProps,
} from './ss-carousel.models';

/**
 * For reference, see this tutorial that helped provide some of the math involved:
 * https://3dtransforms.desandro.com/carousel
 */

@customElement('ss-carousel')
export class SSCarousel extends LitElement {
  static styles = [
    theme,
    css`
      @property --frame-scale {
        syntax: '<number>';
        initial-value: 0;
        inherits: false;
      }

      .scene {
        width: 210px;
        height: 140px;
        position: relative;
        perspective: 200px;
      }

      .back,
      .forward {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        vertical-align: middle;
        transition: transform 0.2s;
        opacity: 0.5;
        line-height: 0rem;

        &:hover {
          transform: translateY(-50%) scale(1.5);
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          opacity: 1;
        }
      }

      .back {
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
      }

      .forward {
        position: absolute;
        top: 50%;
        left: 100%;
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
        background-color: #efefef;
        transition: all 0.2s;
        opacity: 0.5;
      }

      ::slotted(.frame.active) {
        opacity: 1;
        animation: become-active 200ms linear;
        animation-delay: 200ms;
      }

      ::slotted(.frame.active:hover) {
        --frame-scale: 1.1;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }

      ::slotted(.frame.previous),
      ::slotted(.frame.next) {
        opacity: 0.75;
      }

      ::slotted(.frame.previous)::after,
      ::slotted(.frame.next)::after {
        content: '';
        position: absolute;
        width: 190px;
        height: 120px;
        left: 0px;
        top: 0px;
      }

      ::slotted(.frame.previous)::after {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.2), transparent);
      }

      ::slotted(.frame.next)::after {
        background: linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent);
      }

      .has-contact {
        ::slotted(.frame.active) {
          --frame-scale: calc(
            1 - calc(min(calc(var(--drag-distance) / 10), 1) * 0.2)
          );
        }
      }
    `,
  ];

  keyframes = `
        @property --frame-scale {
        syntax: '<number>'; /* <- defined as type number for the transition to work */
        initial-value: 1;
        inherits: false;
      }

      @keyframes become-active {
        0% {
        --frame-scale: 1;
   
        }
        50% {
        --frame-scale: 1.2;

        }
        100% {
        --frame-scale: 1;

        }
      }
    `;

  @property({ type: Boolean })
  [SSCarouselProp.INFINITE]: SSCarouselProps[SSCarouselProp.INFINITE] =
    ssCarouselProps[SSCarouselProp.INFINITE].default;

  @property({ type: Number, reflect: true })
  [SSCarouselProp.ACTIVE_INDEX]: SSCarouselProps[SSCarouselProp.ACTIVE_INDEX] =
    ssCarouselProps[SSCarouselProp.ACTIVE_INDEX].default;

  @property({ type: Boolean })
  [SSCarouselProp.SHOW_BUTTONS]: SSCarouselProps[SSCarouselProp.SHOW_BUTTONS] =
    ssCarouselProps[SSCarouselProp.SHOW_BUTTONS].default;

  @query('.carousel')
  carousel!: HTMLDivElement;

  @state()
  get totalFrames(): number {
    const total = this.frames.length;
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
  get showBackButton() {
    return (
      this.showButtons &&
      this.totalFrames > 1 &&
      (this.infinite || this.normalizedIndex > 0)
    );
  }

  @state()
  get showForwardButton() {
    return (
      this.showButtons &&
      this.totalFrames > 1 &&
      (this.infinite || this.normalizedIndex < this.totalFrames - 1)
    );
  }

  @state()
  get classes() {
    return { wrapper: true, 'has-contact': this.hasContact };
  }

  get minDragDistance(): number {
    return 10;
  }

  @state()
  get normalizedIndex(): number {
    let index = this.activeIndex % this.totalFrames;
    if (index < 0) {
      index = this.totalFrames + index;
    }
    return index;
  }

  @state() mouseOver = false;
  @state() hasContact = false;
  @state() contactPoint: ContactPoint = { x: 0, y: 0 };
  @state() dragDistance = 0;

  get frames(): HTMLElement[] {
    return [...this.children].filter(
      child => child.nodeName !== 'STYLE',
    ) as HTMLElement[];
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
    super.firstUpdated(_changedProperties);
    await this.updateComplete;

    if (this.frames.length > 0) {
      this.frames.forEach((frame, index) => {
        frame.classList.add('frame');
        frame.setAttribute('data-index', index.toString());
        frame.addEventListener('mousedown', e => {
          if (index === this.normalizedIndex) {
            this.hasContact = true;
            this.contactPoint = { x: e.clientX, y: e.clientY };
          }
        });
      });
    }

    document.addEventListener('mousemove', e => {
      if (this.hasContact) {
        const xDiff = Math.abs(e.clientX - this.contactPoint.x);
        this.dragDistance = xDiff;
      }
    });

    document.addEventListener('mouseup', e => {
      this.dragDistance = 0;
      const xDiff = e.clientX - this.contactPoint.x;
      if (this.hasContact) {
        if (xDiff >= this.minDragDistance) {
          this._back();
        }
        if (xDiff <= -this.minDragDistance) {
          this._forward();
        }
      }
      this.hasContact = false;
    });

    const style = document.createElement('style');
    style.textContent = this.keyframes;
    this.appendChild(style);

    this.carousel.addEventListener('mouseenter', () => {
      this.mouseOver = true;
    });

    this.carousel.addEventListener('mouseleave', () => {
      this.mouseOver = false;
    });

    document.addEventListener('scroll', e => {
      if (this.mouseOver) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    });
  }

  updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    if (_changedProperties.has(SSCarouselProp.ACTIVE_INDEX)) {
      this._updateFrames();
    }
  }

  _updateFrames() {
    this.frames.forEach((c, index) => {
      const child = c as HTMLElement;
      if (child.classList.contains('active')) {
        child.classList.remove('active');
      }

      if (child.classList.contains('previous')) {
        child.classList.remove('previous');
      }

      if (child.classList.contains('next')) {
        child.classList.remove('next');
      }

      if (
        index === this.normalizedIndex - 1 ||
        (this.normalizedIndex === 0 && index === this.totalFrames - 1)
      ) {
        child.classList.add('previous');
      }

      if (index === this.normalizedIndex) {
        child.classList.add('active');
      }

      if (
        index === this.normalizedIndex + 1 ||
        (this.normalizedIndex === this.totalFrames - 1 && index === 0)
      ) {
        child.classList.add('next');
      }
    });
  }

  _back(): void {
    if (!this.infinite && this.normalizedIndex === 0) {
      return;
    }

    this.activeIndex--;
    this.rotateCarousel();
  }

  _forward(): void {
    if (!this.infinite && this.normalizedIndex === this.totalFrames - 1) {
      return;
    }
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
                translateZ(${this.frameTransition}px)
                scale(var(--frame-scale, 1));
            }
          `,
        )}
      </style>
      <div
        class=${classMap(this.classes)}
        style=${`--drag-distance: ${this.dragDistance}`}
      >
        <div class="scene">
          <div class="carousel">
            <slot></slot>
          </div>
          ${this.showBackButton
            ? html`
                <button class="back" @click=${this._back}>&#x21e6;</button>
              `
            : nothing}
          ${this.showForwardButton
            ? html`
                <button class="forward" @click=${this._forward}>
                  &#x21e8;
                </button>
              `
            : nothing}
        </div>
      </div>
    `;
  }
}
