"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssInputProps = exports.SSInputProp = void 0;
const Input_1 = require("../../models/Input");
var SSInputProp;
(function (SSInputProp) {
    SSInputProp["TYPE"] = "type";
    SSInputProp["VALUE"] = "value";
    SSInputProp["AUTO_COMPLETE"] = "autoComplete";
    SSInputProp["PLACEHOLDER"] = "placeholder";
    SSInputProp["SUGGESTIONS"] = "suggestions";
})(SSInputProp || (exports.SSInputProp = SSInputProp = {}));
exports.ssInputProps = {
    [SSInputProp.TYPE]: {
        default: Input_1.InputType.TEXT,
        description: 'What form element type the input behaves as',
        control: 'text',
    },
    [SSInputProp.VALUE]: {
        default: '',
        description: 'The value as set from the data model',
        control: 'text',
    },
    [SSInputProp.AUTO_COMPLETE]: {
        default: false,
        description: 'Should the field provide auto-completion suggestions',
        control: 'boolean',
    },
    [SSInputProp.PLACEHOLDER]: {
        default: '',
        description: 'Text to display in the field when no value is present',
        control: 'text',
    },
    [SSInputProp.SUGGESTIONS]: {
        default: [],
        description: 'An array of suggestions used for auto-completion',
        control: 'text',
    },
};
//# sourceMappingURL=ss-input.models.js.map