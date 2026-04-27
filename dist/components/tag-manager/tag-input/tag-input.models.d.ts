import { PropConfigMap, PropTypes } from '../../../models/Prop';
export declare enum TagInputProp {
    VALUE = "value",
    ENABLE_SUGGESTIONS = "enableSuggestions",
    MSG_TAG = "msgTag",
    MSG_ADD = "msgAdd"
}
export interface TagInputProps extends PropTypes {
    [TagInputProp.VALUE]: string;
    [TagInputProp.ENABLE_SUGGESTIONS]: boolean;
    [TagInputProp.MSG_TAG]: string;
    [TagInputProp.MSG_ADD]: string;
}
export declare const tagInputProps: PropConfigMap<TagInputProps>;
