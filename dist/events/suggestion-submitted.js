export const suggestionSubmittedEventName = 'suggestion-submitted';
export class SuggestiontSubmittedEvent extends CustomEvent {
    constructor(payload) {
        super(suggestionSubmittedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
//# sourceMappingURL=suggestion-submitted.js.map