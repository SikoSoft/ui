export const sortEndEventName = "sort-end";

export interface SortEndEventPayload {
  sortedIds: string[];
}

export class SortEndEvent extends CustomEvent<SortEndEventPayload> {
  constructor(payload: SortEndEventPayload) {
    super(sortEndEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}

export const sortUpdatedEventName = "sort-updated";

export interface SortUpdatedEventPayload {
  sortedIds: string[];
}

export class SortUpdatedEvent extends CustomEvent<SortUpdatedEventPayload> {
  constructor(payload: SortUpdatedEventPayload) {
    super(sortUpdatedEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}
