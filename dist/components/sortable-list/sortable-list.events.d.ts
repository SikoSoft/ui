export declare const sortEndEventName = "sort-end";
export interface SortEndEventPayload {
    sortedIds: string[];
}
export declare class SortEndEvent extends CustomEvent<SortEndEventPayload> {
    constructor(payload: SortEndEventPayload);
}
export declare const sortUpdatedEventName = "sort-updated";
export interface SortUpdatedEventPayload {
    sortedIds: string[];
}
export declare class SortUpdatedEvent extends CustomEvent<SortUpdatedEventPayload> {
    constructor(payload: SortUpdatedEventPayload);
}
