import { PropConfigMap, PropTypes } from '../../models/Prop';

export enum SSCollapsableProp {
  TITLE = 'title',
  OPEN = 'open',
}

export interface SSCollapsableProps extends PropTypes {
  [SSCollapsableProp.TITLE]: string;
  [SSCollapsableProp.OPEN]: boolean;
}

export const ssCollapsableProps: PropConfigMap<SSCollapsableProps> = {
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
