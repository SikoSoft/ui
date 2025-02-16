"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleChangedEvent = exports.toggleChangedEventName = void 0;
exports.toggleChangedEventName = 'toggle-changed';
class ToggleChangedEvent extends CustomEvent {
    constructor(payload) {
        super(exports.toggleChangedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
exports.ToggleChangedEvent = ToggleChangedEvent;
//# sourceMappingURL=toggle-changed.js.map