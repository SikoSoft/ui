import { LitElement, html, TemplateResult, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { SortEndEvent, SortUpdatedEvent } from './sortable-list.events';
import { SortableItem } from './sortable-item/sortable-item';
import './sortable-item/sortable-item';
import {
  SortableListProp,
  sortableListProps,
  SortableListProps,
} from './sortable-list.models';
import { classMap } from 'lit/directives/class-map.js';

@customElement('sortable-list')
export class SortableList extends LitElement {
  private draggedElement: SortableItem | undefined;
  private lastSortedState: string[] = [];

  @property({ type: Boolean })
  [SortableListProp.DISABLED]: SortableListProps[SortableListProp.DISABLED] =
    sortableListProps[SortableListProp.DISABLED].default;

  @state()
  private isDragging: boolean = false;

  static styles = css`
    :host {
      display: block;
    }

    .sortable-list:not(.disabled) {
      padding: 1rem;
    }
  `;

  get items(): HTMLElement[] {
    return [...this.children].filter(
      child => child.nodeName !== 'STYLE',
    ) as HTMLElement[];
  }

  protected firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);

    this.setupItems();

    this.setupSlot();
  }

  setupSlot() {
    const slotNode = this.shadowRoot?.querySelector('slot');
    if (slotNode) {
      slotNode.addEventListener('slotchange', () => {
        this.setupItems();
      });
    }
  }

  setupItems() {
    if (this.items.length > 0) {
      this.items.forEach((item, index) => {
        if (item.classList.contains('item')) {
          item.classList.remove('item');
        }

        item.classList.add('item');
        item.setAttribute('data-index', index.toString());
      });
    }
  }

  dragStart(event: DragEvent) {
    if (this.disabled) {
      return;
    }

    this.isDragging = true;

    if (event.target) {
      this.draggedElement = event.target as SortableItem;
      this.lastSortedState = this.getSortedIds();
    }
  }

  dragEnd(event: DragEvent) {
    if (this.disabled) {
      return;
    }

    this.isDragging = false;
  }

  dragOver(event: DragEvent) {
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
    if (this.disabled) {
      return;
    }

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

  @state()
  get classes(): Record<string, boolean> {
    return {
      'sortable-list': true,
      dragging: this.isDragging,
      disabled: this[SortableListProp.DISABLED],
    };
  }

  render(): TemplateResult {
    return html`<div
      class=${classMap(this.classes)}
      @dragstart=${this.dragStart}
      @dragend=${this.dragEnd}
      @dragover=${this.dragOver}
      @drop=${this.drop}
    >
      <slot></slot>
    </div>`;
  }
}
