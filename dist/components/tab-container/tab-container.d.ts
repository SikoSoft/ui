import { LitElement, PropertyValues, TemplateResult } from 'lit';
import { Tab, TabContainerProp, TabContainerProps } from './tab-container.models';
export declare class TabContainer extends LitElement {
    static styles: import("lit").CSSResult;
    [TabContainerProp.INDEX]: TabContainerProps[TabContainerProp.INDEX];
    [TabContainerProp.PANE_ID]: TabContainerProps[TabContainerProp.PANE_ID];
    tabs: Tab[];
    get panes(): HTMLElement[];
    protected firstUpdated(_changedProperties: PropertyValues): void;
    setupSlot(): void;
    setupPanes(): Promise<void>;
    updatePaneVisibility(): void;
    setActiveIndex(index: number): void;
    render(): TemplateResult;
}
