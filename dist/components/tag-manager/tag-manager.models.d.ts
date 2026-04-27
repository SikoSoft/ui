import { PropConfigMap, PropTypes } from '../../models/Prop';
export declare enum TagManagerProp {
    VALUE = "value",
    ENABLE_SUGGESTIONS = "enableSuggestions",
    MSG_HEADING = "msgHeading",
    MSG_NO_TAGS = "msgNoTags",
    MSG_TAG = "msgTag",
    MSG_ADD = "msgAdd"
}
export interface TagManagerProps extends PropTypes {
    [TagManagerProp.VALUE]: string;
    [TagManagerProp.ENABLE_SUGGESTIONS]: boolean;
    [TagManagerProp.MSG_HEADING]: string;
    [TagManagerProp.MSG_NO_TAGS]: string;
    [TagManagerProp.MSG_TAG]: string;
    [TagManagerProp.MSG_ADD]: string;
}
export declare const tagManagerProps: PropConfigMap<TagManagerProps>;
