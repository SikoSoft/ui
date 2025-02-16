import { InputType } from '../../models/Input';

export enum ControlType {
  BOOLEAN = 'boolean',
  TEXT = 'text',
}

export interface ControlMap {
  //[]: 'text';
}

export type Test = SSInputProps[SSInputProp.TYPE] extends boolean
  ? 'boolean'
  : 'text';

export enum SSInputProp {
  TYPE = 'type',
  VALUE = 'value',
  AUTO_COMPLETE = 'autoComplete',
  PLACEHOLDER = 'placeholder',
  SUGGESTIONS = 'suggestions',
}

export interface SSInputProps {
  [SSInputProp.TYPE]: InputType;
  [SSInputProp.VALUE]: string;
  [SSInputProp.AUTO_COMPLETE]: boolean;
  [SSInputProp.PLACEHOLDER]: string;
  [SSInputProp.SUGGESTIONS]: string[];
}

export type SSInputPropConfig = {
  [Property in keyof SSInputProps]: {
    default: SSInputProps[Property];
    control: SSInputProps[Property] extends boolean ? 'boolean' : 'text';
    description: string;
  };
};

export interface PropConfig<T extends keyof SSInputProps> {
  default: SSInputProps[T];
}

export type PropKeys = keyof SSInputProps;

export type TypedPropConfig<T extends SSInputProp> = {
  default: SSInputProps[T];
};

export const ssInputProps: SSInputPropConfig = {
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
