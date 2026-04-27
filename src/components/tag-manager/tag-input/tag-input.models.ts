import { PropConfigMap, PropTypes } from '../../../models/Prop';

export enum TagInputProp {
  VALUE = 'value',
  ENABLE_SUGGESTIONS = 'enableSuggestions',
  MSG_TAG = 'msgTag',
  MSG_ADD = 'msgAdd',
}

export interface TagInputProps extends PropTypes {
  [TagInputProp.VALUE]: string;
  [TagInputProp.ENABLE_SUGGESTIONS]: boolean;
  [TagInputProp.MSG_TAG]: string;
  [TagInputProp.MSG_ADD]: string;
}

export const tagInputProps: PropConfigMap<TagInputProps> = {
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
