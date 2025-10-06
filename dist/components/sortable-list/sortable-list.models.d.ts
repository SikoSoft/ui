import { PropConfigMap, PropTypes } from '../../models/Prop';
export declare enum SortableListProp {
    DISABLED = "disabled"
}
export interface SortableListProps extends PropTypes {
    [SortableListProp.DISABLED]: boolean;
}
export declare const sortableListProps: PropConfigMap<SortableListProps>;
