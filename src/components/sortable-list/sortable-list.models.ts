import { PropConfigMap, PropTypes } from '../../models/Prop';

export enum SortableListProp {
  DISABLED = 'disabled',
}

export interface SortableListProps extends PropTypes {
  [SortableListProp.DISABLED]: boolean;
}

export const sortableListProps: PropConfigMap<SortableListProps> = {
  [SortableListProp.DISABLED]: {
    default: false,
    control: 'boolean',
    description:
      'Whether or not the list is disabled (i.e. items cannot be sorted)',
  },
};
