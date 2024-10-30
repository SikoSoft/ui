export const suggestionChangedEventName = 'suggestion-changed';

export interface SuggestionChangedEventPayload {
  value: string;
}

export class SuggestionChangedEvent extends CustomEvent<SuggestionChangedEventPayload> {
  constructor(payload: SuggestionChangedEventPayload) {
    super(suggestionChangedEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}
