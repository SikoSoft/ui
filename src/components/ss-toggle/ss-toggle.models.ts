import { PropConfigMap, PropTypes } from '../../models/Prop';

export enum SSToggleProp {
  ON = 'on',
}

export interface SSToggleProps extends PropTypes {
  [SSToggleProp.ON]: boolean;
}

export const ssToggleProps: PropConfigMap<SSToggleProps> = {
  [SSToggleProp.ON]: {
    default: false,
    description: 'Whether the toggle is in enabled state',
    control: 'boolean',
  },
};
