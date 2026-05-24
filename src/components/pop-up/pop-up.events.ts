export const popUpOpenedEventName = 'pop-up-opened';

export interface PopUpOpenedEventPayload {
  changeTime: number | null;
}

export class PopUpOpenedEvent extends CustomEvent<PopUpOpenedEventPayload> {
  constructor(payload: PopUpOpenedEventPayload) {
    super(popUpOpenedEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}

export const popUpClosedEventName = 'pop-up-closed';

export interface PopUpClosedEventPayload {
  changeTime: number | null;
}

export class PopUpClosedEvent extends CustomEvent<PopUpClosedEventPayload> {
  constructor(payload: PopUpClosedEventPayload) {
    super(popUpClosedEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}
