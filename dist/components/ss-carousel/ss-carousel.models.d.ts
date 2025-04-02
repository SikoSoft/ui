import { PropConfigMap, PropTypes } from '../../models/Prop';
export declare enum SSCarouselProp {
    INFINITE = "infinite",
    NAVIGATION_INDEX = "navigationIndex",
    SHOW_BUTTONS = "showButtons",
    MOUSE_SCROLL = "mouseScroll",
    WIDTH = "width",
    HEIGHT = "height",
    GAP = "gap",
    PERSPECTIVE = "perspective"
}
export interface SSCarouselProps extends PropTypes {
    [SSCarouselProp.INFINITE]: boolean;
    [SSCarouselProp.NAVIGATION_INDEX]: number;
    [SSCarouselProp.SHOW_BUTTONS]: boolean;
    [SSCarouselProp.MOUSE_SCROLL]: boolean;
    [SSCarouselProp.WIDTH]: number;
    [SSCarouselProp.HEIGHT]: number;
    [SSCarouselProp.GAP]: number;
    [SSCarouselProp.PERSPECTIVE]: number;
}
export declare const ssCarouselProps: PropConfigMap<SSCarouselProps>;
export interface ContactPoint {
    x: number;
    y: number;
}
