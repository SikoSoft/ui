import { msg } from '../../util/msg';
export var TagManagerProp;
(function (TagManagerProp) {
    TagManagerProp["VALUE"] = "value";
    TagManagerProp["ENABLE_SUGGESTIONS"] = "enableSuggestions";
    TagManagerProp["MSG_HEADING"] = "msgHeading";
    TagManagerProp["MSG_NO_TAGS"] = "msgNoTags";
    TagManagerProp["MSG_TAG"] = "msgTag";
    TagManagerProp["MSG_ADD"] = "msgAdd";
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
    [TagManagerProp.MSG_HEADING]: {
        default: msg('Tags'),
        control: 'text',
        description: 'The heading message for the tag manager',
    },
    [TagManagerProp.MSG_NO_TAGS]: {
        default: msg('No tags available'),
        control: 'text',
        description: 'The message displayed when no tags are available',
    },
    [TagManagerProp.MSG_TAG]: {
        default: msg('Tag'),
        control: 'text',
        description: 'The label for a single tag (used in suggestions)',
    },
    [TagManagerProp.MSG_ADD]: {
        default: msg('Add'),
        control: 'text',
        description: 'The label for the add button',
    },
};
//# sourceMappingURL=tag-manager.models.js.map