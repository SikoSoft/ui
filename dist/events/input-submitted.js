export const inputSubmittedEventName = 'input-submitted';
export class InputSubmittedEvent extends CustomEvent {
    constructor(payload) {
        super(inputSubmittedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
//# sourceMappingURL=input-submitted.js.map