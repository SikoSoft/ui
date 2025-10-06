import { PropConfigMap, PropTypes } from '../../../models/Prop';
export declare enum SortableItemProp {
    DISABLED = "disabled"
}
export interface SortableItemProps extends PropTypes {
    [SortableItemProp.DISABLED]: boolean;
}
export declare const sortableItemProps: PropConfigMap<SortableItemProps>;
