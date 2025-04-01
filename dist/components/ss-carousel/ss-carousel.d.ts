import { LitElement, PropertyValues } from 'lit';
import { ContactPoint, SSCarouselProp, SSCarouselProps } from './ss-carousel.models';
/**
 * For reference, see this tutorial that helped provide some of the math involved:
 * https://3dtransforms.desandro.com/carousel
 */
export declare class SSCarousel extends LitElement {
    static styles: import("lit").CSSResult[];
    keyframes: string;
    [SSCarouselProp.INFINITE]: SSCarouselProps[SSCarouselProp.INFINITE];
    [SSCarouselProp.ACTIVE_INDEX]: SSCarouselProps[SSCarouselProp.ACTIVE_INDEX];
    [SSCarouselProp.SHOW_BUTTONS]: SSCarouselProps[SSCarouselProp.SHOW_BUTTONS];
    [SSCarouselProp.WIDTH]: SSCarouselProps[SSCarouselProp.WIDTH];
    [SSCarouselProp.HEIGHT]: SSCarouselProps[SSCarouselProp.HEIGHT];
    [SSCarouselProp.GAP]: SSCarouselProps[SSCarouselProp.GAP];
    [SSCarouselProp.PERSPECTIVE]: SSCarouselProps[SSCarouselProp.PERSPECTIVE];
    carousel: HTMLDivElement;
    get totalFrames(): number;
    get frameDegrees(): number;
    get frameTransition(): number;
    get showBackButton(): boolean;
    get showForwardButton(): boolean;
    get classes(): {
        wrapper: boolean;
        'has-contact': boolean;
    };
    get minDragDistance(): number;
    get normalizedIndex(): number;
    mouseOver: boolean;
    hasContact: boolean;
    startContactPoint: ContactPoint;
    latestContactPoint: ContactPoint;
    dragDistance: number;
    get frames(): HTMLElement[];
    connectedCallback(): void;
    firstUpdated(_changedProperties: PropertyValues): Promise<void>;
    updated(_changedProperties: PropertyValues): void;
    _updateFrames(): void;
    _back(): void;
    _forward(): void;
    rotateCarousel(): void;
    render(): import("lit-html").TemplateResult<1>;
}
