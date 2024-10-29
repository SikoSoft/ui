export declare const inputChangedEventName = "input-changed";
export interface InputChangedEventPayload {
    value: string;
}
export declare class InputChangedEvent extends CustomEvent<InputChangedEventPayload> {
    constructor(payload: InputChangedEventPayload);
}
