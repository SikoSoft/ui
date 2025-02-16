import { PropConfigMap, PropTypes } from '../../models/Prop';
export declare enum SSToggleProp {
    ON = "on"
}
export interface SSToggleProps extends PropTypes {
    [SSToggleProp.ON]: boolean;
}
export declare const ssToggleProps: PropConfigMap<SSToggleProps>;
