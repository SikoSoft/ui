export declare const tabPaneReadyChangedEventName = "tab-pane-ready";
export type TabPaneReadyChangedPayload = Record<string, never>;
export declare class TabPaneReadyChangedEvent extends CustomEvent<TabPaneReadyChangedPayload> {
    constructor(detail: TabPaneReadyChangedPayload);
}
