import { PropConfigMap, PropTypes } from '../../../models/Prop';

export enum SortableItemProp {
  DISABLED = 'disabled',
}

export interface SortableItemProps extends PropTypes {
  [SortableItemProp.DISABLED]: boolean;
}

export const sortableItemProps: PropConfigMap<SortableItemProps> = {
  [SortableItemProp.DISABLED]: {
    default: false,
    control: 'boolean',
    description: 'Whether or not the item is disabled (i.e. cannot be sorted)',
  },
};
