"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestionChangedEvent = exports.suggestionChangedEventName = void 0;
exports.suggestionChangedEventName = 'suggestion-changed';
class SuggestionChangedEvent extends CustomEvent {
    constructor(payload) {
        super(exports.suggestionChangedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
exports.SuggestionChangedEvent = SuggestionChangedEvent;
//# sourceMappingURL=suggestion-changed.js.map