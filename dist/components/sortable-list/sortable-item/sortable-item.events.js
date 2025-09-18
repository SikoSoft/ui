export const sortedEventName = "sorted";
export class SortedEvent extends CustomEvent {
    constructor(payload) {
        super(sortedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
//# sourceMappingURL=sortable-item.events.js.map