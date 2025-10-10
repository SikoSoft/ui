import { LitElement } from 'lit';
import { TabPaneProp, TabPaneProps } from './tab-pane.models';
export declare class TabPane extends LitElement {
    [TabPaneProp.TITLE]: TabPaneProps[TabPaneProp.TITLE];
    render(): import("lit-html").TemplateResult<1>;
}
