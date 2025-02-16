import { PropConfigMap, PropTypes } from '../../models/Prop';
import { InputType } from '../../models/Input';

export enum SSInputProp {
  TYPE = 'type',
  VALUE = 'value',
  AUTO_COMPLETE = 'autoComplete',
  PLACEHOLDER = 'placeholder',
  SUGGESTIONS = 'suggestions',
}

export interface SSInputProps extends PropTypes {
  [SSInputProp.TYPE]: InputType;
  [SSInputProp.VALUE]: string;
  [SSInputProp.AUTO_COMPLETE]: boolean;
  [SSInputProp.PLACEHOLDER]: string;
  [SSInputProp.SUGGESTIONS]: string[];
}

export const ssInputProps: PropConfigMap<SSInputProps> = {
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
