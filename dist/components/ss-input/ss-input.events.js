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
export const inputFocusedEventName = 'input-focused';
export class InputFocusedEvent extends CustomEvent {
    constructor(payload) {
        super(inputFocusedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
export const inputBlurredEventName = 'input-blurred';
export class InputBlurredEvent extends CustomEvent {
    constructor(payload) {
        super(inputBlurredEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
//# sourceMappingURL=ss-input.events.js.map