import { PropConfigMap, PropTypes } from '../../models/Prop';
export declare enum SSCarouselProp {
    INFINITE = "infinite",
    ACTIVE_INDEX = "activeIndex",
    SHOW_BUTTONS = "showButtons",
    MOUSE_SCROLL = "mouseScroll"
}
export interface SSCarouselProps extends PropTypes {
    [SSCarouselProp.INFINITE]: boolean;
    [SSCarouselProp.ACTIVE_INDEX]: number;
    [SSCarouselProp.SHOW_BUTTONS]: boolean;
    [SSCarouselProp.MOUSE_SCROLL]: boolean;
}
export declare const ssCarouselProps: PropConfigMap<SSCarouselProps>;
export interface ContactPoint {
    x: number;
    y: number;
}
