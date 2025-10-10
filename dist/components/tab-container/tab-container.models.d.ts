import { PropConfigMap, PropTypes } from '@/models/Prop';
export interface Tab {
    title: string;
    content: HTMLElement;
}
export declare enum TabContainerProp {
    INDEX = "index",
    PANE_ID = "paneId"
}
export interface TabContainerProps extends PropTypes {
    [TabContainerProp.INDEX]: number;
    [TabContainerProp.PANE_ID]: string;
}
export declare const tabContainerProps: PropConfigMap<TabContainerProps>;
