var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b, _c, _d, _e, _f, _g;
import { LitElement, html, css, nothing } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { theme } from '../../styles/theme';
import { SSCarouselProp, ssCarouselProps, } from './ss-carousel.models';
/**
 * For reference, see this tutorial that helped provide some of the math involved:
 * https://3dtransforms.desandro.com/carousel
 */
let SSCarousel = class SSCarousel extends LitElement {
    constructor() {
        super(...arguments);
        this.keyframes = `
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
        this[_a] = ssCarouselProps[SSCarouselProp.INFINITE].default;
        this[_b] = ssCarouselProps[SSCarouselProp.ACTIVE_INDEX].default;
        this[_c] = ssCarouselProps[SSCarouselProp.SHOW_BUTTONS].default;
        this[_d] = ssCarouselProps[SSCarouselProp.WIDTH].default;
        this[_e] = ssCarouselProps[SSCarouselProp.HEIGHT].default;
        this[_f] = ssCarouselProps[SSCarouselProp.GAP].default;
        this[_g] = ssCarouselProps[SSCarouselProp.PERSPECTIVE].default;
        this.mouseOver = false;
        this.hasContact = false;
        this.startContactPoint = { x: 0, y: 0 };
        this.latestContactPoint = { x: 0, y: 0 };
        this.dragDistance = 0;
    }
    static { _a = SSCarouselProp.INFINITE, _b = SSCarouselProp.ACTIVE_INDEX, _c = SSCarouselProp.SHOW_BUTTONS, _d = SSCarouselProp.WIDTH, _e = SSCarouselProp.HEIGHT, _f = SSCarouselProp.GAP, _g = SSCarouselProp.PERSPECTIVE; }
    static { this.styles = [
        theme,
        css `
      :host {
        //--scene-width: 210px;
        //--scene-height: 140px;
      }

      @property --frame-scale {
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
        width: calc(var(--scene-width) - var(--gap) * 2);
        height: calc(var(--scene-height) - var(--gap) * 2);
        left: var(--gap);
        top: var(--gap);
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
        width: calc(var(--scene-width) - var(--gap) * 2);
        height: calc(var(--scene-height) - var(--gap) * 2);
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
    ]; }
    get totalFrames() {
        const total = this.frames.length;
        return total;
    }
    get frameDegrees() {
        return 360 / this.totalFrames;
    }
    get frameTransition() {
        return Math.round(this.width / 2 / Math.tan(Math.PI / this.totalFrames));
    }
    get showBackButton() {
        return (this.showButtons &&
            this.totalFrames > 1 &&
            (this.infinite || this.normalizedIndex > 0));
    }
    get showForwardButton() {
        return (this.showButtons &&
            this.totalFrames > 1 &&
            (this.infinite || this.normalizedIndex < this.totalFrames - 1));
    }
    get classes() {
        return { wrapper: true, 'has-contact': this.hasContact };
    }
    get minDragDistance() {
        return 10;
    }
    get normalizedIndex() {
        let index = this.activeIndex % this.totalFrames;
        if (index < 0) {
            index = this.totalFrames + index;
        }
        return index;
    }
    get frames() {
        return [...this.children].filter(child => child.nodeName !== 'STYLE');
    }
    connectedCallback() {
        super.connectedCallback();
    }
    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.updateComplete;
        if (this.frames.length > 0) {
            this.frames.forEach((frame, index) => {
                frame.classList.add('frame');
                frame.setAttribute('data-index', index.toString());
                frame.addEventListener('touchstart', e => {
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
                const xDiff = Math.abs(this.latestContactPoint.x - this.startContactPoint.x);
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
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has(SSCarouselProp.ACTIVE_INDEX)) {
            this._updateFrames();
        }
    }
    _updateFrames() {
        this.frames.forEach((c, index) => {
            const child = c;
            if (child.classList.contains('active')) {
                child.classList.remove('active');
            }
            if (child.classList.contains('previous')) {
                child.classList.remove('previous');
            }
            if (child.classList.contains('next')) {
                child.classList.remove('next');
            }
            if (index === this.normalizedIndex - 1 ||
                (this.normalizedIndex === 0 && index === this.totalFrames - 1)) {
                child.classList.add('previous');
            }
            if (index === this.normalizedIndex) {
                child.classList.add('active');
            }
            if (index === this.normalizedIndex + 1 ||
                (this.normalizedIndex === this.totalFrames - 1 && index === 0)) {
                child.classList.add('next');
            }
        });
    }
    _back() {
        if (!this.infinite && this.normalizedIndex === 0) {
            return;
        }
        this.activeIndex--;
        this.rotateCarousel();
    }
    _forward() {
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
        return html `
      <style>
        .carousel {
          transform: translateZ(-${this.frameTransition}px);
        }
        ${[...Array(this.totalFrames)].map((_, i) => css `
            ::slotted(.frame:nth-child(${i + 1})) {
              transform: rotateY(${i * this.frameDegrees}deg)
                translateZ(${this.frameTransition}px)
                scale(var(--frame-scale, 1));
            }
          `)}
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
            ? html `
                <button class="back" @click=${this._back}>&#x21e6;</button>
              `
            : nothing}
          ${this.showForwardButton
            ? html `
                <button class="forward" @click=${this._forward}>
                  &#x21e8;
                </button>
              `
            : nothing}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], SSCarousel.prototype, _a, void 0);
__decorate([
    property({ type: Number, reflect: true })
], SSCarousel.prototype, _b, void 0);
__decorate([
    property({ type: Boolean })
], SSCarousel.prototype, _c, void 0);
__decorate([
    property({ type: Number, reflect: true })
], SSCarousel.prototype, _d, void 0);
__decorate([
    property({ type: Number, reflect: true })
], SSCarousel.prototype, _e, void 0);
__decorate([
    property({ type: Number, reflect: true })
], SSCarousel.prototype, _f, void 0);
__decorate([
    property({ type: Number, reflect: true })
], SSCarousel.prototype, _g, void 0);
__decorate([
    query('.carousel')
], SSCarousel.prototype, "carousel", void 0);
__decorate([
    state()
], SSCarousel.prototype, "totalFrames", null);
__decorate([
    state()
], SSCarousel.prototype, "frameDegrees", null);
__decorate([
    state()
], SSCarousel.prototype, "frameTransition", null);
__decorate([
    state()
], SSCarousel.prototype, "showBackButton", null);
__decorate([
    state()
], SSCarousel.prototype, "showForwardButton", null);
__decorate([
    state()
], SSCarousel.prototype, "classes", null);
__decorate([
    state()
], SSCarousel.prototype, "normalizedIndex", null);
__decorate([
    state()
], SSCarousel.prototype, "mouseOver", void 0);
__decorate([
    state()
], SSCarousel.prototype, "hasContact", void 0);
__decorate([
    state()
], SSCarousel.prototype, "startContactPoint", void 0);
__decorate([
    state()
], SSCarousel.prototype, "latestContactPoint", void 0);
__decorate([
    state()
], SSCarousel.prototype, "dragDistance", void 0);
SSCarousel = __decorate([
    customElement('ss-carousel')
], SSCarousel);
export { SSCarousel };
//# sourceMappingURL=ss-carousel.js.map