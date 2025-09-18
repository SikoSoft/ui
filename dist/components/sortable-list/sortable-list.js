var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { SortEndEvent, SortUpdatedEvent } from './sortable-list.events';
import './sortable-item/sortable-item';
let SortableList = class SortableList extends LitElement {
    constructor() {
        super(...arguments);
        this.lastSortedState = [];
        this.isDragging = false;
    }
    static { this.styles = css `
    .sortable-list {
      background-color: #eee;
      padding: 1rem;
    }
  `; }
    connectedCallback() {
        super.connectedCallback();
        //window.addEventListener("dragover", this.dragOver);
    }
    dragStart(event) {
        //console.log('dragStart', event);
        this.isDragging = true;
        if (event.target) {
            this.draggedElement = event.target;
            this.lastSortedState = this.getSortedIds();
        }
    }
    dragEnd(event) {
        //console.log('dragEnd', event);
        this.isDragging = false;
    }
    dragOver(event) {
        //console.log("dragover", event.target);
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
        //console.log("drop", event);
        const sortedIds = this.getSortedIds();
        this.dispatchEvent(new SortEndEvent({ sortedIds }));
        if (JSON.stringify(this.lastSortedState) !== JSON.stringify(sortedIds)) {
            this.dispatchEvent(new SortUpdatedEvent({ sortedIds }));
        }
    }
    getSortedIds() {
        //console.log("getSortedIds");
        const ids = [];
        const sortItems = this.querySelectorAll('sort-item');
        for (let sortItem of sortItems) {
            const id = sortItem.getAttribute('id');
            if (id) {
                ids.push(id);
            }
        }
        console.log(sortItems);
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
    mouseOver(event) {
        //  console.log({ event });
    }
    render() {
        return html `<div
      class="sort-container"
      @dragstart=${this.dragStart}
      @dragend=${this.dragEnd}
      @dragover=${this.dragOver}
      @drop=${this.drop}
      @mouseover=${this.mouseOver}
    >
      <slot></slot>
    </div>`;
    }
};
__decorate([
    state()
], SortableList.prototype, "isDragging", void 0);
SortableList = __decorate([
    customElement('sortable-list')
], SortableList);
export { SortableList };
//# sourceMappingURL=sortable-list.js.map