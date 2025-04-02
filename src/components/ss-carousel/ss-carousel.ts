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
      @property --slide-scale {
        syntax: '<number>';
        initial-value: 0;
        inherits: false;
      }

      .scene {
        width: var(--scene-width);
        height: var(--scene-height);
        position: relative;
        perspective: var(--perspective);
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

      ::slotted(.slide) {
        position: absolute;
        width: calc(var(--scene-width) - var(--gap) * 2);
        height: calc(var(--scene-height) - var(--gap) * 2);
        left: var(--gap);
        top: var(--gap);
        background-color: #efefef;
        transition: all 0.2s;
        opacity: 0.5;
      }

      ::slotted(.slide.active) {
        opacity: 1;
        animation: become-active 200ms linear;
        animation-delay: 200ms;
      }

      ::slotted(.slide.active:hover) {
        --slide-scale: 1.1;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }

      ::slotted(.slide.previous),
      ::slotted(.slide.next) {
        opacity: 0.75;
      }

      ::slotted(.slide.previous)::after,
      ::slotted(.slide.next)::after {
        content: '';
        position: absolute;
        width: calc(var(--scene-width) - var(--gap) * 2);
        height: calc(var(--scene-height) - var(--gap) * 2);
        left: 0px;
        top: 0px;
      }

      ::slotted(.slide.previous)::after {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.2), transparent);
      }

      ::slotted(.slide.next)::after {
        background: linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent);
      }

      .has-contact {
        ::slotted(.slide.active) {
          --slide-scale: calc(
            1 - calc(min(calc(var(--drag-distance) / 10), 1) * 0.2)
          );
        }
      }
    `,
  ];

  keyslides = `
        @property --slide-scale {
        syntax: '<number>'; /* <- defined as type number for the transition to work */
        initial-value: 1;
        inherits: false;
      }

      @keyslides become-active {
        0% {
        --slide-scale: 1;
   
        }
        50% {
        --slide-scale: 1.2;

        }
        100% {
        --slide-scale: 1;

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

  @property({ type: Number, reflect: true })
  [SSCarouselProp.WIDTH]: SSCarouselProps[SSCarouselProp.WIDTH] =
    ssCarouselProps[SSCarouselProp.WIDTH].default;

  @property({ type: Number, reflect: true })
  [SSCarouselProp.HEIGHT]: SSCarouselProps[SSCarouselProp.HEIGHT] =
    ssCarouselProps[SSCarouselProp.HEIGHT].default;

  @property({ type: Number, reflect: true })
  [SSCarouselProp.GAP]: SSCarouselProps[SSCarouselProp.GAP] =
    ssCarouselProps[SSCarouselProp.GAP].default;

  @property({ type: Number, reflect: true })
  [SSCarouselProp.PERSPECTIVE]: SSCarouselProps[SSCarouselProp.PERSPECTIVE] =
    ssCarouselProps[SSCarouselProp.PERSPECTIVE].default;

  @query('.carousel')
  carousel!: HTMLDivElement;

  @state()
  get totalslides(): number {
    const total = this.slides.length;
    return total;
  }

  @state()
  get slideDegrees(): number {
    return 360 / this.totalslides;
  }

  @state()
  get slideTransition(): number {
    return Math.round(this.width / 2 / Math.tan(Math.PI / this.totalslides));
  }

  @state()
  get showBackButton() {
    return (
      this.showButtons &&
      this.totalslides > 1 &&
      (this.infinite || this.normalizedIndex > 0)
    );
  }

  @state()
  get showForwardButton() {
    return (
      this.showButtons &&
      this.totalslides > 1 &&
      (this.infinite || this.normalizedIndex < this.totalslides - 1)
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
    let index = this.activeIndex % this.totalslides;
    if (index < 0) {
      index = this.totalslides + index;
    }
    return index;
  }

  @state() mouseOver = false;
  @state() hasContact = false;
  @state() startContactPoint: ContactPoint = { x: 0, y: 0 };
  @state() latestContactPoint: ContactPoint = { x: 0, y: 0 };
  @state() dragDistance = 0;

  get slides(): HTMLElement[] {
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

    if (this.slides.length > 0) {
      this.slides.forEach((slide, index) => {
        slide.classList.add('slide');
        slide.setAttribute('data-index', index.toString());
        slide.addEventListener('touchstart', e => {
          if (index === this.normalizedIndex) {
            this.hasContact = true;
            this.startContactPoint = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
            };
          }
        });
      });
    }

    document.addEventListener('touchmove', e => {
      if (this.hasContact) {
        this.latestContactPoint = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
        const xDiff = Math.abs(
          this.latestContactPoint.x - this.startContactPoint.x,
        );
        this.dragDistance = xDiff;
      }
    });

    document.addEventListener('touchend', e => {
      this.dragDistance = 0;
      const xDiff = this.latestContactPoint.x - this.startContactPoint.x;
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
    style.textContent = this.keyslides;
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
      this._updateslides();
    }
  }

  _updateslides() {
    this.slides.forEach((c, index) => {
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
        (this.normalizedIndex === 0 && index === this.totalslides - 1)
      ) {
        child.classList.add('previous');
      }

      if (index === this.normalizedIndex) {
        child.classList.add('active');
      }

      if (
        index === this.normalizedIndex + 1 ||
        (this.normalizedIndex === this.totalslides - 1 && index === 0)
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
    if (!this.infinite && this.normalizedIndex === this.totalslides - 1) {
      return;
    }
    this.activeIndex++;
    this.rotateCarousel();
  }

  rotateCarousel() {
    const angle = (this.activeIndex / this.totalslides) * -360;
    this.carousel.style.transform = `translateZ(-${this.slideTransition}px) rotateY(${angle}deg)`;
  }

  render() {
    return html`
      <style>
        .carousel {
          transform: translateZ(-${this.slideTransition}px);
        }
        ${[...Array(this.totalslides)].map(
          (_, i) => css`
            ::slotted(.slide:nth-child(${i + 1})) {
              transform: rotateY(${i * this.slideDegrees}deg)
                translateZ(${this.slideTransition}px)
                scale(var(--slide-scale, 1));
            }
          `,
        )}
      </style>
      <div
        class=${classMap(this.classes)}
        style=${`
          --drag-distance: ${this.dragDistance};
          --scene-width: ${this.width}px;
          --scene-height: ${this.height}px;
          --gap: ${this.gap}px;
          --perspective: ${this.perspective}px;
        `}
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
