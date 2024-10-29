export declare const inputSubmittedEventName = "input-submitted";
export interface InputSubmittedEventPayload {
    value: string;
}
export declare class InputSubmittedEvent extends CustomEvent<InputSubmittedEventPayload> {
    constructor(payload: InputSubmittedEventPayload);
}
