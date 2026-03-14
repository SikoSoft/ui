import { msg } from '../../util/msg';
export var TagManagerProp;
(function (TagManagerProp) {
    TagManagerProp["VALUE"] = "value";
    TagManagerProp["ENABLE_SUGGESTIONS"] = "enableSuggestions";
    TagManagerProp["LABEL"] = "label";
})(TagManagerProp || (TagManagerProp = {}));
export const tagManagerProps = {
    [TagManagerProp.VALUE]: {
        default: '',
        control: 'text',
        description: 'The input value',
    },
    [TagManagerProp.ENABLE_SUGGESTIONS]: {
        default: true,
        control: 'boolean',
        description: 'Enable tag suggestions',
    },
    [TagManagerProp.LABEL]: {
        default: msg('Tags'),
        control: 'text',
        description: 'The label for the tag manager',
    },
};
//# sourceMappingURL=tag-manager.models.js.map