"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssCollapsableProps = exports.SSCollapsableProp = void 0;
var SSCollapsableProp;
(function (SSCollapsableProp) {
    SSCollapsableProp["TITLE"] = "title";
    SSCollapsableProp["OPEN"] = "open";
})(SSCollapsableProp || (exports.SSCollapsableProp = SSCollapsableProp = {}));
exports.ssCollapsableProps = {
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