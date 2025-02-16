"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectChangedEvent = exports.selectChangedEventName = void 0;
exports.selectChangedEventName = 'select-changed';
class SelectChangedEvent extends CustomEvent {
    constructor(payload) {
        super(exports.selectChangedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
exports.SelectChangedEvent = SelectChangedEvent;
//# sourceMappingURL=select-changed.js.map