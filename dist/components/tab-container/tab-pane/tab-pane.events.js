export const tabPaneReadyChangedEventName = 'tab-pane-ready';
export class TabPaneReadyChangedEvent extends CustomEvent {
    constructor(detail) {
        super(tabPaneReadyChangedEventName, {
            detail,
            bubbles: true,
            composed: true,
        });
    }
}
//# sourceMappingURL=tab-pane.events.js.map