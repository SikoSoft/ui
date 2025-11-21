export const inputChangedEventName = 'input-changed';

export interface InputChangedEventPayload {
  value: string;
}

export class InputChangedEvent extends CustomEvent<InputChangedEventPayload> {
  constructor(payload: InputChangedEventPayload) {
    super(inputChangedEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}

export const inputSubmittedEventName = 'input-submitted';

export interface InputSubmittedEventPayload {
  value: string;
}

export class InputSubmittedEvent extends CustomEvent<InputSubmittedEventPayload> {
  constructor(payload: InputSubmittedEventPayload) {
    super(inputSubmittedEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}

export const inputFocusedEventName = 'input-focused';

export interface InputFocusedEventPayload {
  value: string;
}

export class InputFocusedEvent extends CustomEvent<InputFocusedEventPayload> {
  constructor(payload: InputFocusedEventPayload) {
    super(inputFocusedEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}

export const inputBlurredEventName = 'input-blurred';

export interface InputBlurredEventPayload {
  value: string;
}

export class InputBlurredEvent extends CustomEvent<InputBlurredEventPayload> {
  constructor(payload: InputBlurredEventPayload) {
    super(inputBlurredEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}
