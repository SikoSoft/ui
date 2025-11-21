import { PropConfigMap, PropTypes } from '../../models/Prop';
export declare enum InputType {
    TEXT = "text",
    DATE = "date",
    DATETIME_LOCAL = "datetime-local",
    PASSWORD = "password",
    NUMBER = "number"
}
export declare enum SSInputProp {
    TYPE = "type",
    VALUE = "value",
    AUTO_COMPLETE = "autoComplete",
    PLACEHOLDER = "placeholder",
    SUGGESTIONS = "suggestions",
    MIN = "min",
    MAX = "max",
    STEP = "step",
    UNSAVED = "unsaved"
}
export interface SSInputProps extends PropTypes {
    [SSInputProp.TYPE]: InputType;
    [SSInputProp.VALUE]: string;
    [SSInputProp.AUTO_COMPLETE]: boolean;
    [SSInputProp.PLACEHOLDER]: string;
    [SSInputProp.SUGGESTIONS]: string[];
    [SSInputProp.MIN]: number;
    [SSInputProp.MAX]: number;
    [SSInputProp.STEP]: number;
    [SSInputProp.UNSAVED]: boolean;
}
export declare const ssInputProps: PropConfigMap<SSInputProps>;
