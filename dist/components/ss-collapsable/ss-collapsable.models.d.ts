import { PropConfigMap, PropTypes } from '../../models/Prop';
export declare enum SSCollapsableProp {
    TITLE = "title",
    OPEN = "open"
}
export interface SSCollapsableProps extends PropTypes {
    [SSCollapsableProp.TITLE]: string;
    [SSCollapsableProp.OPEN]: boolean;
}
export declare const ssCollapsableProps: PropConfigMap<SSCollapsableProps>;
