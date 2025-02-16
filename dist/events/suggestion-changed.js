export const suggestionChangedEventName = 'suggestion-changed';
export class SuggestionChangedEvent extends CustomEvent {
    constructor(payload) {
        super(suggestionChangedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
//# sourceMappingURL=suggestion-changed.js.map