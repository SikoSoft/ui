import { LitElement, TemplateResult } from 'lit';
import { TabPaneProp, TabPaneProps } from './tab-pane.models';
export declare class TabPane extends LitElement {
    static styles: import("lit").CSSResult;
    [TabPaneProp.TITLE]: TabPaneProps[TabPaneProp.TITLE];
    render(): TemplateResult;
}
