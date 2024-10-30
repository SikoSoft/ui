export declare const suggestionChangedEventName = "suggestion-changed";
export interface SuggestionChangedEventPayload {
    value: string;
}
export declare class SuggestionChangedEvent extends CustomEvent<SuggestionChangedEventPayload> {
    constructor(payload: SuggestionChangedEventPayload);
}
