export declare const suggestionSubmittedEventName = "suggestion-submitted";
export interface SuggestionSubmittedEventPayload {
    selectedIndex: number;
}
export declare class SuggestiontSubmittedEvent extends CustomEvent<SuggestionSubmittedEventPayload> {
    constructor(payload: SuggestionSubmittedEventPayload);
}
