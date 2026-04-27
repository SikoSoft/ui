export var TagInputProp;
(function (TagInputProp) {
    TagInputProp["VALUE"] = "value";
    TagInputProp["ENABLE_SUGGESTIONS"] = "enableSuggestions";
    TagInputProp["MSG_TAG"] = "msgTag";
    TagInputProp["MSG_ADD"] = "msgAdd";
})(TagInputProp || (TagInputProp = {}));
export const tagInputProps = {
    [TagInputProp.VALUE]: {
        default: '',
        control: 'text',
        description: 'The input value',
    },
    [TagInputProp.ENABLE_SUGGESTIONS]: {
        default: true,
        control: 'boolean',
        description: 'Enable tag suggestions',
    },
    [TagInputProp.MSG_TAG]: {
        default: 'Tag',
        control: 'text',
        description: 'The label for a single tag (used in suggestions)',
    },
    [TagInputProp.MSG_ADD]: {
        default: 'Add',
        control: 'text',
        description: 'The label for the add button',
    },
};
//# sourceMappingURL=tag-input.models.js.map