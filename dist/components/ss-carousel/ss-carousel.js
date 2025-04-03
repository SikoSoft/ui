var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b, _c, _d, _e, _f, _g, _h;
import { LitElement, html, css, nothing } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { theme } from '../../styles/theme';
import { SSCarouselProp, ssCarouselProps, } from './ss-carousel.models';
import { CarouselSlideChangedEvent } from './ss-carousel.events';
let SSCarousel = class SSCarousel extends LitElement {
    constructor() {
        super(...arguments);
        this.keyframes = `
      @keyframes become-active {
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
        this[_a] = ssCarouselProps[SSCarouselProp.INFINITE].default;
        this[_b] = ssCarouselProps[SSCarouselProp.NAVIGATION_INDEX].default;
        this[_c] = ssCarouselProps[SSCarouselProp.SHOW_BUTTONS].default;
        this[_d] = ssCarouselProps[SSCarouselProp.WIDTH].default;
        this[_e] = ssCarouselProps[SSCarouselProp.HEIGHT].default;
        this[_f] = ssCarouselProps[SSCarouselProp.GAP].default;
        this[_g] = ssCarouselProps[SSCarouselProp.PERSPECTIVE].default;
        this[_h] = ssCarouselProps[SSCarouselProp.DISCRETE].default;
        this.actualWidth = 0;
        this.mouseOver = false;
        this.hasContact = false;
        this.startContactPoint = { x: 0, y: 0 };
        this.latestContactPoint = { x: 0, y: 0 };
        this.dragDistance = 0;
    }
    static { _a = SSCarouselProp.INFINITE, _b = SSCarouselProp.NAVIGATION_INDEX, _c = SSCarouselProp.SHOW_BUTTONS, _d = SSCarouselProp.WIDTH, _e = SSCarouselProp.HEIGHT, _f = SSCarouselProp.GAP, _g = SSCarouselProp.PERSPECTIVE, _h = SSCarouselProp.DISCRETE; }
    static { this.styles = [
        theme,
        css `
      :host {
        display: block;
        width: 100%;
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
        transition: all 0.2s;
        opacity: 0.25;
      }

      ::slotted(.slide.active) {
        opacity: 1;
        animation: become-active 200ms linear;
        animation-delay: 50ms;
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
        ::slotted(.slide) {
          --slide-scale: calc(
            1 - calc(min(calc(var(--drag-distance) / 50), 1) * 0.2)
          );
        }

        ::slotted(.slide.active) {
          --slide-scale: calc(
            1 - calc(min(calc(var(--drag-distance) / 50), 1) * 0.4)
          );
        }
      }

      .discrete:not(.has-contact) {
        ::slotted(.slide) {
          opacity: 0;
        }

        ::slotted(.slide.active) {
          opacity: 1;
        }
      }
    `,
    ]; }
    get totalslides() {
        const total = this.slides.length;
        return total;
    }
    get slideDegrees() {
        return 360 / this.totalslides;
    }
    get slideTransition() {
        return Math.round(this.actualWidth / 2 / Math.tan(Math.PI / this.totalslides));
    }
    get showBackButton() {
        return (this.showButtons &&
            this.totalslides > 1 &&
            (this.infinite || this.slideIndex > 0));
    }
    get showForwardButton() {
        return (this.showButtons &&
            this.totalslides > 1 &&
            (this.infinite || this.slideIndex < this.totalslides - 1));
    }
    get classes() {
        return {
            wrapper: true,
            'has-contact': this.hasContact,
            discrete: this.discrete,
        };
    }
    get minDragDistance() {
        return 10;
    }
    get slideIndex() {
        let index = this.navigationIndex % this.totalslides;
        if (index < 0) {
            index = this.totalslides + index;
        }
        return index;
    }
    get slides() {
        return [...this.children].filter(child => child.nodeName !== 'STYLE');
    }
    connectedCallback() {
        super.connectedCallback();
    }
    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.updateComplete;
        this.updateActualWidth();
        this.setupSlides();
        this.setupEventListeners();
        this.setupStyles();
    }
    setupSlides() {
        if (this.slides.length > 0) {
            this.slides.forEach((slide, index) => {
                slide.classList.add('slide');
                slide.setAttribute('data-index', index.toString());
                slide.addEventListener('touchstart', e => {
                    if (index === this.slideIndex) {
                        this.hasContact = true;
                        this.startContactPoint = {
                            x: e.touches[0].clientX,
                            y: e.touches[0].clientY,
                        };
                        this.latestContactPoint = {
                            x: e.touches[0].clientX,
                            y: e.touches[0].clientY,
                        };
                    }
                });
            });
        }
    }
    setupEventListeners() {
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
        this.carousel.addEventListener('contextmenu', e => {
            if (this.hasContact) {
                e.preventDefault();
            }
        });
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
    setupStyles() {
        const style = window.document.createElement('style');
        style.textContent = this.keyframes;
        this.parentElement?.appendChild(style);
        try {
            window.CSS.registerProperty({
                name: '--slide-scale',
                syntax: '<number>',
                inherits: false,
                initialValue: '1',
            });
        }
        catch (e) {
            /**
             * CSS.registerProperty throws when trying to register a property already registered.
             * Of course the spec does not provide a way to check if a property is already registered.
             * So we must try/catch to surpress nasty errors if there are multiple instances of this
             * component.
             */
        }
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has(SSCarouselProp.NAVIGATION_INDEX)) {
            this._updateslides();
        }
        this.updateActualWidth();
    }
    updateActualWidth() {
        const width = this.getBoundingClientRect().width;
        this.actualWidth = width;
    }
    _updateslides() {
        this.slides.forEach((c, index) => {
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
            if (index === this.slideIndex - 1 ||
                (this.slideIndex === 0 && index === this.totalslides - 1)) {
                child.classList.add('previous');
            }
            if (index === this.slideIndex) {
                child.classList.add('active');
            }
            if (index === this.slideIndex + 1 ||
                (this.slideIndex === this.totalslides - 1 && index === 0)) {
                child.classList.add('next');
            }
        });
    }
    _back() {
        if (!this.infinite && this.slideIndex === 0) {
            return;
        }
        this.setActiveIndex(this.navigationIndex - 1);
        this.updateCarousel();
    }
    _forward() {
        if (!this.infinite && this.slideIndex === this.totalslides - 1) {
            return;
        }
        this.setActiveIndex(this.navigationIndex + 1);
        this.updateCarousel();
    }
    setActiveIndex(index) {
        this.navigationIndex = index;
        this.dispatchEvent(new CarouselSlideChangedEvent({
            navigationIndex: this.navigationIndex,
            slideIndex: this.slideIndex,
        }));
    }
    updateCarousel() {
        const angle = (this.navigationIndex / this.totalslides) * -360;
        this.carousel.style.transform = `translateZ(-${this.slideTransition}px) rotateY(${angle}deg)`;
    }
    render() {
        return html `
      <style>
        .carousel {
          transform: translateZ(-${this.slideTransition}px);
        }
        ${[...Array(this.totalslides)].map((_, i) => css `
            ::slotted(.slide:nth-child(${i + 1})) {
              transform: rotateY(${i * this.slideDegrees}deg)
                translateZ(${this.slideTransition}px)
                scale(var(--slide-scale, 1));
            }
          `)}
      </style>
      <div
        class=${classMap(this.classes)}
        style=${`
          --drag-distance: ${this.dragDistance};
          --scene-width: ${this.width};
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
    property({ reflect: true })
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
    property({ type: Boolean })
], SSCarousel.prototype, _h, void 0);
__decorate([
    query('.carousel')
], SSCarousel.prototype, "carousel", void 0);
__decorate([
    state()
], SSCarousel.prototype, "totalslides", null);
__decorate([
    state()
], SSCarousel.prototype, "slideDegrees", null);
__decorate([
    state()
], SSCarousel.prototype, "slideTransition", null);
__decorate([
    state()
], SSCarousel.prototype, "showBackButton", null);
__decorate([
    state()
], SSCarousel.prototype, "showForwardButton", null);
__decorate([
    state()
], SSCarousel.prototype, "actualWidth", void 0);
__decorate([
    state()
], SSCarousel.prototype, "classes", null);
__decorate([
    state()
], SSCarousel.prototype, "slideIndex", null);
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