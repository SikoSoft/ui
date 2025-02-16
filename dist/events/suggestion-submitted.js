"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestiontSubmittedEvent = exports.suggestionSubmittedEventName = void 0;
exports.suggestionSubmittedEventName = 'suggestion-submitted';
class SuggestiontSubmittedEvent extends CustomEvent {
    constructor(payload) {
        super(exports.suggestionSubmittedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
exports.SuggestiontSubmittedEvent = SuggestiontSubmittedEvent;
//# sourceMappingURL=suggestion-submitted.js.map