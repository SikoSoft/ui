export var SSCarouselProp;
(function (SSCarouselProp) {
    SSCarouselProp["INFINITE"] = "infinite";
    SSCarouselProp["ACTIVE_INDEX"] = "activeIndex";
    SSCarouselProp["SHOW_BUTTONS"] = "showButtons";
    SSCarouselProp["MOUSE_SCROLL"] = "mouseScroll";
})(SSCarouselProp || (SSCarouselProp = {}));
export const ssCarouselProps = {
    [SSCarouselProp.INFINITE]: {
        default: false,
        control: 'boolean',
        description: 'Whether the carousel should loop infinitely',
    },
    [SSCarouselProp.ACTIVE_INDEX]: {
        default: 0,
        control: 'number',
        description: 'The index of the active slide',
    },
    [SSCarouselProp.SHOW_BUTTONS]: {
        default: false,
        control: 'boolean',
        description: 'Whether to show the navigation buttons',
    },
    [SSCarouselProp.MOUSE_SCROLL]: {
        default: false,
        control: 'boolean',
        description: 'Whether to allow mouse scrolling',
    },
};
//# sourceMappingURL=ss-carousel.models.js.map