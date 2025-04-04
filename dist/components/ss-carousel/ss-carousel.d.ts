import { LitElement, PropertyValues } from 'lit';
import { ContactPoint, SSCarouselProp, SSCarouselProps } from './ss-carousel.models';
export declare class SSCarousel extends LitElement {
    static styles: import("lit").CSSResult[];
    keyframes: string;
    [SSCarouselProp.INFINITE]: SSCarouselProps[SSCarouselProp.INFINITE];
    [SSCarouselProp.NAVIGATION_INDEX]: SSCarouselProps[SSCarouselProp.NAVIGATION_INDEX];
    [SSCarouselProp.SHOW_BUTTONS]: SSCarouselProps[SSCarouselProp.SHOW_BUTTONS];
    [SSCarouselProp.WIDTH]: SSCarouselProps[SSCarouselProp.WIDTH];
    [SSCarouselProp.HEIGHT]: SSCarouselProps[SSCarouselProp.HEIGHT];
    [SSCarouselProp.GAP]: SSCarouselProps[SSCarouselProp.GAP];
    [SSCarouselProp.PERSPECTIVE]: SSCarouselProps[SSCarouselProp.PERSPECTIVE];
    [SSCarouselProp.DISCRETE]: SSCarouselProps[SSCarouselProp.DISCRETE];
    carousel: HTMLDivElement;
    get totalslides(): number;
    get slideDegrees(): number;
    get slideTransition(): number;
    get showBackButton(): boolean;
    get showForwardButton(): boolean;
    actualWidth: number;
    get classes(): {
        wrapper: boolean;
        'has-contact': boolean;
        discrete: boolean;
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
    setupSlot(): void;
    setupSlides(): void;
    setupEventListeners(): void;
    setupStyles(): void;
    updated(_changedProperties: PropertyValues): void;
    updateActualWidth(): void;
    updateSlides(): void;
    back(): void;
    forward(): void;
    setActiveIndex(index: number): void;
    updateCarousel(): void;
    render(): import("lit-html").TemplateResult<1>;
}
