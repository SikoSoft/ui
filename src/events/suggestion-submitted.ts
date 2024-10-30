export const suggestionSubmittedEventName = 'suggestion-submitted';

export interface SuggestionSubmittedEventPayload {
  selectedIndex: number;
}

export class SuggestiontSubmittedEvent extends CustomEvent<SuggestionSubmittedEventPayload> {
  constructor(payload: SuggestionSubmittedEventPayload) {
    super(suggestionSubmittedEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}
