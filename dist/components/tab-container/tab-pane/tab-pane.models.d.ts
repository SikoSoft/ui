import { PropConfigMap, PropTypes } from '@/models/Prop';
export declare enum TabPaneProp {
    TITLE = "title"
}
export interface TabPaneProps extends PropTypes {
    [TabPaneProp.TITLE]: string;
}
export declare const tabPaneProps: PropConfigMap<TabPaneProps>;
