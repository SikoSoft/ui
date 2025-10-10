import { LitElement } from 'lit';
import { Tab, TabContainerProp, TabContainerProps } from './tab-container.models';
export declare class TabContainer extends LitElement {
    static styles: import("lit").CSSResult;
    [TabContainerProp.INDEX]: TabContainerProps[TabContainerProp.INDEX];
    [TabContainerProp.PANE_ID]: TabContainerProps[TabContainerProp.PANE_ID];
    tabs: Tab[];
    connectedCallback(): void;
    setupPanes(): void;
    setActiveIndex(index: number): void;
    render(): import("lit-html").TemplateResult<1>;
}
