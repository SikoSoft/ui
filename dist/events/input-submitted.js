"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSubmittedEvent = exports.inputSubmittedEventName = void 0;
exports.inputSubmittedEventName = 'input-submitted';
class InputSubmittedEvent extends CustomEvent {
    constructor(payload) {
        super(exports.inputSubmittedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
exports.InputSubmittedEvent = InputSubmittedEvent;
//# sourceMappingURL=input-submitted.js.map