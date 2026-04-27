import { msg } from '../../util/msg';
import { PropConfigMap, PropTypes } from '../../models/Prop';

export enum TagManagerProp {
  VALUE = 'value',
  ENABLE_SUGGESTIONS = 'enableSuggestions',
  MSG_HEADING = 'msgHeading',
  MSG_NO_TAGS = 'msgNoTags',
  MSG_TAG = 'msgTag',
  MSG_ADD = 'msgAdd',
}

export interface TagManagerProps extends PropTypes {
  [TagManagerProp.VALUE]: string;
  [TagManagerProp.ENABLE_SUGGESTIONS]: boolean;
  [TagManagerProp.MSG_HEADING]: string;
  [TagManagerProp.MSG_NO_TAGS]: string;
  [TagManagerProp.MSG_TAG]: string;
  [TagManagerProp.MSG_ADD]: string;
}

export const tagManagerProps: PropConfigMap<TagManagerProps> = {
  [TagManagerProp.VALUE]: {
    default: '',
    control: 'text',
    description: 'The input value',
  },
  [TagManagerProp.ENABLE_SUGGESTIONS]: {
    default: true,
    control: 'boolean',
    description: 'Enable tag suggestions',
  },
  [TagManagerProp.MSG_HEADING]: {
    default: msg('Tags'),
    control: 'text',
    description: 'The heading message for the tag manager',
  },
  [TagManagerProp.MSG_NO_TAGS]: {
    default: msg('No tags available'),
    control: 'text',
    description: 'The message displayed when no tags are available',
  },
  [TagManagerProp.MSG_TAG]: {
    default: msg('Tag'),
    control: 'text',
    description: 'The label for a single tag (used in suggestions)',
  },
  [TagManagerProp.MSG_ADD]: {
    default: msg('Add'),
    control: 'text',
    description: 'The label for the add button',
  },
};
