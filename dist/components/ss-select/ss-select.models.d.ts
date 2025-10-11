import { PropConfigMap, PropTypes } from '../../models/Prop';
export interface SelectOption {
    value: string;
    label: string;
}
export declare enum SSSelectProp {
    OPTIONS = "options",
    SELECTED = "selected",
    MULTIPLE = "multiple"
}
export interface SSSelectProps extends PropTypes {
    [SSSelectProp.OPTIONS]: SelectOption[];
    [SSSelectProp.SELECTED]: string;
    [SSSelectProp.MULTIPLE]: boolean;
}
export declare const ssSelectProps: PropConfigMap<SSSelectProps>;
