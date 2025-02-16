"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputChangedEvent = exports.inputChangedEventName = void 0;
exports.inputChangedEventName = 'input-changed';
class InputChangedEvent extends CustomEvent {
    constructor(payload) {
        super(exports.inputChangedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
exports.InputChangedEvent = InputChangedEvent;
//# sourceMappingURL=input-changed.js.map