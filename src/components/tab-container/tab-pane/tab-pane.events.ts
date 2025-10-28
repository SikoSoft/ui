export const tabPaneReadyChangedEventName = 'tab-pane-ready';

export type TabPaneReadyChangedPayload = Record<string, never>;

export class TabPaneReadyChangedEvent extends CustomEvent<TabPaneReadyChangedPayload> {
  constructor(detail: TabPaneReadyChangedPayload) {
    super(tabPaneReadyChangedEventName, {
      detail,
      bubbles: true,
      composed: true,
    });
  }
}
