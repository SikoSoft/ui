export declare const popUpOpenedEventName = "pop-up-opened";
export interface PopUpOpenedEventPayload {
    changeTime: number | null;
}
export declare class PopUpOpenedEvent extends CustomEvent<PopUpOpenedEventPayload> {
    constructor(payload: PopUpOpenedEventPayload);
}
export declare const popUpClosedEventName = "pop-up-closed";
export interface PopUpClosedEventPayload {
    changeTime: number | null;
}
export declare class PopUpClosedEvent extends CustomEvent<PopUpClosedEventPayload> {
    constructor(payload: PopUpClosedEventPayload);
}
