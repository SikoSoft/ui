import { LitElement, html, TemplateResult, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { SortEndEvent, SortUpdatedEvent } from './sortable-list.events';
import { SortableItem } from './sortable-item/sortable-item';
import './sortable-item/sortable-item';

@customElement('sortable-list')
export class SortableList extends LitElement {
  private draggedElement: SortableItem | undefined;
  private lastSortedState: string[] = [];

  @state()
  private isDragging: boolean = false;

  static styles = css`
    .sortable-list {
      padding: 1rem;
    }
  `;

  dragStart(event: DragEvent) {
    this.isDragging = true;

    if (event.target) {
      this.draggedElement = event.target as SortableItem;
      this.lastSortedState = this.getSortedIds();
    }
  }

  dragEnd(event: DragEvent) {
    this.isDragging = false;
  }

  dragOver(event: DragEvent) {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    if (this.isDraggableItem(event.target) && this.draggedElement) {
      if (!event.target.parentNode) {
        return;
      }

      if (this.isBefore(this.draggedElement, event.target)) {
        event.target.parentNode.insertBefore(this.draggedElement, event.target);
      } else {
        event.target.parentNode.insertBefore(
          this.draggedElement,
          event.target.nextSibling,
        );
      }
    }

    event.preventDefault();
  }

  isDraggableItem(element: HTMLElement | null): element is SortableItem {
    return element?.nodeName === 'SORTABLE-ITEM';
  }

  drop(event: DragEvent) {
    const sortedIds = this.getSortedIds();

    this.dispatchEvent(new SortEndEvent({ sortedIds }));

    if (JSON.stringify(this.lastSortedState) !== JSON.stringify(sortedIds)) {
      this.dispatchEvent(new SortUpdatedEvent({ sortedIds }));
    }
  }

  getSortedIds(): string[] {
    const ids: string[] = [];

    const sortItems = this.querySelectorAll('sortable-item');
    for (let sortItem of sortItems) {
      const id = sortItem.getAttribute('id');

      if (id) {
        ids.push(id);
      }
    }

    return ids;
  }

  isBefore(el1: SortableItem, el2: SortableItem) {
    if (el2.parentNode === el1.parentNode)
      for (
        var cur = el1.previousSibling;
        cur && cur.nodeType !== 9;
        cur = cur.previousSibling
      )
        if (cur === el2) {
          return true;
        }
    return false;
  }

  render(): TemplateResult {
    return html`<div
      class="sortable-list"
      @dragstart=${this.dragStart}
      @dragend=${this.dragEnd}
      @dragover=${this.dragOver}
      @drop=${this.drop}
    >
      <slot></slot>
    </div>`;
  }
}
