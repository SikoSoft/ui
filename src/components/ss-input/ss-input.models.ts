import { InputType } from '../../models/Input';

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
    description: 'test',
  },
  [SSInputProp.VALUE]: {
    default: '',
    description: 'test',
  },
  [SSInputProp.AUTO_COMPLETE]: {
    default: false,
    description: 'test',
  },
  [SSInputProp.PLACEHOLDER]: {
    default: '',
    description: 'test',
  },
  [SSInputProp.SUGGESTIONS]: {
    default: [],
    description: 'test',
  },
};
