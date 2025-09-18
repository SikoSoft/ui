export const sortedEventName = "sorted";

export interface SortedEventPayload {
  sortedIds: string[];
}

export class SortedEvent extends CustomEvent<SortedEventPayload> {
  constructor(payload: SortedEventPayload) {
    super(sortedEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}
