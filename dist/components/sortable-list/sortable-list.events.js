export const sortEndEventName = "sort-end";
export class SortEndEvent extends CustomEvent {
    constructor(payload) {
        super(sortEndEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
export const sortUpdatedEventName = "sort-updated";
export class SortUpdatedEvent extends CustomEvent {
    constructor(payload) {
        super(sortUpdatedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
//# sourceMappingURL=sortable-list.events.js.map