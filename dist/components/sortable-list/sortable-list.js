var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { SortEndEvent, SortUpdatedEvent } from './sortable-list.events';
import './sortable-item/sortable-item';
import { SortableListProp, sortableListProps, } from './sortable-list.models';
import { classMap } from 'lit/directives/class-map.js';
let SortableList = class SortableList extends LitElement {
    constructor() {
        super(...arguments);
        this.lastSortedState = [];
        this[_a] = sortableListProps[SortableListProp.DISABLED].default;
        this.isDragging = false;
    }
    static { _a = SortableListProp.DISABLED; }
    static { this.styles = css `
    :host {
      display: block;
    }

    .sortable-list:not(.disabled) {
      padding: 1rem;
    }
  `; }
    dragStart(event) {
        if (this.disabled) {
            return;
        }
        this.isDragging = true;
        if (event.target) {
            this.draggedElement = event.target;
            this.lastSortedState = this.getSortedIds();
        }
    }
    dragEnd(event) {
        if (this.disabled) {
            return;
        }
        this.isDragging = false;
    }
    dragOver(event) {
        if (this.disabled) {
            return;
        }
        if (!(event.target instanceof HTMLElement)) {
            return;
        }
        if (this.isDraggableItem(event.target) && this.draggedElement) {
            if (!event.target.parentNode) {
                return;
            }
            if (this.isBefore(this.draggedElement, event.target)) {
                event.target.parentNode.insertBefore(this.draggedElement, event.target);
            }
            else {
                event.target.parentNode.insertBefore(this.draggedElement, event.target.nextSibling);
            }
        }
        event.preventDefault();
    }
    isDraggableItem(element) {
        return element?.nodeName === 'SORTABLE-ITEM';
    }
    drop(event) {
        if (this.disabled) {
            return;
        }
        const sortedIds = this.getSortedIds();
        this.dispatchEvent(new SortEndEvent({ sortedIds }));
        if (JSON.stringify(this.lastSortedState) !== JSON.stringify(sortedIds)) {
            this.dispatchEvent(new SortUpdatedEvent({ sortedIds }));
        }
    }
    getSortedIds() {
        const ids = [];
        const sortItems = this.querySelectorAll('sortable-item');
        for (let sortItem of sortItems) {
            const id = sortItem.getAttribute('id');
            if (id) {
                ids.push(id);
            }
        }
        return ids;
    }
    isBefore(el1, el2) {
        if (el2.parentNode === el1.parentNode)
            for (var cur = el1.previousSibling; cur && cur.nodeType !== 9; cur = cur.previousSibling)
                if (cur === el2) {
                    return true;
                }
        return false;
    }
    get classes() {
        return {
            'sortable-list': true,
            dragging: this.isDragging,
            disabled: this[SortableListProp.DISABLED],
        };
    }
    render() {
        return html `<div
      class=${classMap(this.classes)}
      @dragstart=${this.dragStart}
      @dragend=${this.dragEnd}
      @dragover=${this.dragOver}
      @drop=${this.drop}
    >
      <slot></slot>
    </div>`;
    }
};
__decorate([
    property({ type: Boolean })
], SortableList.prototype, _a, void 0);
__decorate([
    state()
], SortableList.prototype, "isDragging", void 0);
__decorate([
    state()
], SortableList.prototype, "classes", null);
SortableList = __decorate([
    customElement('sortable-list')
], SortableList);
export { SortableList };
//# sourceMappingURL=sortable-list.js.map