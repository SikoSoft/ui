import { PropConfigMap, PropTypes } from '../../models/Prop';
import { InputType } from '../../models/Input';
export declare enum SSInputProp {
    TYPE = "type",
    VALUE = "value",
    AUTO_COMPLETE = "autoComplete",
    PLACEHOLDER = "placeholder",
    SUGGESTIONS = "suggestions"
}
export interface SSInputProps extends PropTypes {
    [SSInputProp.TYPE]: InputType;
    [SSInputProp.VALUE]: string;
    [SSInputProp.AUTO_COMPLETE]: boolean;
    [SSInputProp.PLACEHOLDER]: string;
    [SSInputProp.SUGGESTIONS]: string[];
}
export declare const ssInputProps: PropConfigMap<SSInputProps>;
