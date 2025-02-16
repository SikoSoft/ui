export const inputChangedEventName = 'input-changed';
export class InputChangedEvent extends CustomEvent {
    constructor(payload) {
        super(inputChangedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
//# sourceMappingURL=input-changed.js.map