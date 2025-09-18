export declare const sortedEventName = "sorted";
export interface SortedEventPayload {
    sortedIds: string[];
}
export declare class SortedEvent extends CustomEvent<SortedEventPayload> {
    constructor(payload: SortedEventPayload);
}
