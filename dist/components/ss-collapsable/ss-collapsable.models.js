export var SSCollapsableProp;
(function (SSCollapsableProp) {
    SSCollapsableProp["TITLE"] = "title";
    SSCollapsableProp["OPEN"] = "open";
})(SSCollapsableProp || (SSCollapsableProp = {}));
export const ssCollapsableProps = {
    [SSCollapsableProp.TITLE]: {
        default: '',
        description: 'The heading in which is always displayed',
        control: 'text',
    },
    [SSCollapsableProp.OPEN]: {
        default: false,
        description: 'Whether the content is in opened state',
        control: 'boolean',
    },
};
//# sourceMappingURL=ss-collapsable.models.js.map