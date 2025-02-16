import { InputType } from '../../models/Input';
export var SSInputProp;
(function (SSInputProp) {
    SSInputProp["TYPE"] = "type";
    SSInputProp["VALUE"] = "value";
    SSInputProp["AUTO_COMPLETE"] = "autoComplete";
    SSInputProp["PLACEHOLDER"] = "placeholder";
    SSInputProp["SUGGESTIONS"] = "suggestions";
})(SSInputProp || (SSInputProp = {}));
export const ssInputProps = {
    [SSInputProp.TYPE]: {
        default: InputType.TEXT,
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