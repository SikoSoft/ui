"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssSelectProps = exports.SSSelectProp = void 0;
var SSSelectProp;
(function (SSSelectProp) {
    SSSelectProp["OPTIONS"] = "options";
    SSSelectProp["SELECTED"] = "selected";
})(SSSelectProp || (exports.SSSelectProp = SSSelectProp = {}));
exports.ssSelectProps = {
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
};
//# sourceMappingURL=ss-select.models.js.map