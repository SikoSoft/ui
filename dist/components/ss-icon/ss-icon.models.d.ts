import { PropConfigMap, PropTypes } from '../../models/Prop';
export declare enum IconName {
    PROFILE = "profile"
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
export type IconMap = Record<IconName, string>;
export declare const iconMap: IconMap;
