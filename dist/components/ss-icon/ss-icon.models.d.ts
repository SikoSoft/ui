import { PropConfigMap, PropTypes } from '../../models/Prop';
export declare enum IconName {
    PROFILE = "profile",
    ARROW_CIRCLE_LEFT = "arrowCircleLeft",
    ARROW_CIRCLE_RIGHT = "arrowCircleRight"
}
export declare enum SSIconProp {
    NAME = "name",
    SIZE = "size",
    COLOR = "color"
}
export interface SSIconProps extends PropTypes {
    [SSIconProp.NAME]: IconName;
    [SSIconProp.SIZE]: number;
    [SSIconProp.COLOR]: string;
}
export declare const ssIconProps: PropConfigMap<SSIconProps>;
