export declare const inputChangedEventName = "input-changed";
export interface InputChangedEventPayload {
    value: string;
}
export declare class InputChangedEvent extends CustomEvent<InputChangedEventPayload> {
    constructor(payload: InputChangedEventPayload);
}
export declare const inputSubmittedEventName = "input-submitted";
export interface InputSubmittedEventPayload {
    value: string;
}
export declare class InputSubmittedEvent extends CustomEvent<InputSubmittedEventPayload> {
    constructor(payload: InputSubmittedEventPayload);
}
export declare const inputFocusedEventName = "input-focused";
export interface InputFocusedEventPayload {
    value: string;
}
export declare class InputFocusedEvent extends CustomEvent<InputFocusedEventPayload> {
    constructor(payload: InputFocusedEventPayload);
}
export declare const inputBlurredEventName = "input-blurred";
export interface InputBlurredEventPayload {
    value: string;
}
export declare class InputBlurredEvent extends CustomEvent<InputBlurredEventPayload> {
    constructor(payload: InputBlurredEventPayload);
}
