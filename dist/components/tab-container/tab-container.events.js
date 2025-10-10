export const tabIndexChangedEventName = 'tab-index-changed';
export class TabIndexChangedEvent extends CustomEvent {
    constructor(detail) {
        super(tabIndexChangedEventName, {
            detail,
            bubbles: true,
            composed: true,
        });
    }
}
//# sourceMappingURL=tab-container.events.js.map