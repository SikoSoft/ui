export var SSSelectProp;
(function (SSSelectProp) {
    SSSelectProp["OPTIONS"] = "options";
    SSSelectProp["SELECTED"] = "selected";
    SSSelectProp["MULTIPLE"] = "multiple";
})(SSSelectProp || (SSSelectProp = {}));
export const ssSelectProps = {
    [SSSelectProp.OPTIONS]: {
        default: [],
        description: 'The options to display in the select',
        control: 'text',
    },
    [SSSelectProp.SELECTED]: {
        default: '',
        description: 'The value of the selected option',
        control: 'text',
    },
    [SSSelectProp.MULTIPLE]: {
        default: false,
        description: 'Whether multiple options can be selected',
        control: 'boolean',
    },
};
//# sourceMappingURL=ss-select.models.js.map