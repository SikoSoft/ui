export declare const tabIndexChangedEventName = "tab-index-changed";
export type TabIndexChangedPayload = {
    index: number;
    paneId: string;
};
export declare class TabIndexChangedEvent extends CustomEvent<TabIndexChangedPayload> {
    constructor(detail: TabIndexChangedPayload);
}
