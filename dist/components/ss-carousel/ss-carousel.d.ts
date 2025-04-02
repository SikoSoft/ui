import { LitElement, PropertyValues } from 'lit';
import { ContactPoint, SSCarouselProp, SSCarouselProps } from './ss-carousel.models';
/**
 * For reference, see this tutorial that helped provide some of the math involved:
 * https://3dtransforms.desandro.com/carousel
 */
export declare class SSCarousel extends LitElement {
    static styles: import("lit").CSSResult[];
    keyslides: string;
    [SSCarouselProp.INFINITE]: SSCarouselProps[SSCarouselProp.INFINITE];
    [SSCarouselProp.NAVIGATION_INDEX]: SSCarouselProps[SSCarouselProp.NAVIGATION_INDEX];
    [SSCarouselProp.SHOW_BUTTONS]: SSCarouselProps[SSCarouselProp.SHOW_BUTTONS];
    [SSCarouselProp.WIDTH]: SSCarouselProps[SSCarouselProp.WIDTH];
    [SSCarouselProp.HEIGHT]: SSCarouselProps[SSCarouselProp.HEIGHT];
    [SSCarouselProp.GAP]: SSCarouselProps[SSCarouselProp.GAP];
    [SSCarouselProp.PERSPECTIVE]: SSCarouselProps[SSCarouselProp.PERSPECTIVE];
    carousel: HTMLDivElement;
    get totalslides(): number;
    get slideDegrees(): number;
    get slideTransition(): number;
    get showBackButton(): boolean;
    get showForwardButton(): boolean;
    get classes(): {
        wrapper: boolean;
        'has-contact': boolean;
    };
    get minDragDistance(): number;
    get slideIndex(): number;
    mouseOver: boolean;
    hasContact: boolean;
    startContactPoint: ContactPoint;
    latestContactPoint: ContactPoint;
    dragDistance: number;
    get slides(): HTMLElement[];
    connectedCallback(): void;
    firstUpdated(_changedProperties: PropertyValues): Promise<void>;
    updated(_changedProperties: PropertyValues): void;
    _updateslides(): void;
    _back(): void;
    _forward(): void;
    setActiveIndex(index: number): void;
    rotateCarousel(): void;
    render(): import("lit-html").TemplateResult<1>;
}
