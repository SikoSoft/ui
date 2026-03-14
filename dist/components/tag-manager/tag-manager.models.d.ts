import { PropConfigMap, PropTypes } from '../../models/Prop';
export declare enum TagManagerProp {
    VALUE = "value",
    ENABLE_SUGGESTIONS = "enableSuggestions",
    LABEL = "label"
}
export interface TagManagerProps extends PropTypes {
    [TagManagerProp.VALUE]: string;
    [TagManagerProp.ENABLE_SUGGESTIONS]: boolean;
    [TagManagerProp.LABEL]: string;
}
export declare const tagManagerProps: PropConfigMap<TagManagerProps>;
