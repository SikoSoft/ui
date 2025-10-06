import { LitElement, html, TemplateResult, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  SortableItemProp,
  SortableItemProps,
  sortableItemProps,
} from './sortable-item.models';

@customElement('sortable-item')
export class SortableItem extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .sortable-item:not(.disabled) {
      padding: 1rem;
      display: flex;
      border: 1px transparent solid;
      width: 100%;
      box-sizing: border-box;

      .handle {
        cursor: grab;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;

        &:hover {
          scale: 1.5;
        }
      }

      .content {
        flex-grow: 1;
        padding-left: 1rem;
      }

      &.dragging {
        border: 1px #000 dashed;

        .handle {
          cursor: grabbing;
        }
      }
    }
  `;

  @property({ type: Boolean })
  [SortableItemProp.DISABLED]: SortableItemProps[SortableItemProp.DISABLED] =
    sortableItemProps[SortableItemProp.DISABLED].default;

  @property()
  id = '';

  @state() dragging = false;

  dragStart(event: DragEvent) {
    if (this.disabled) {
      return;
    }

    this.dragging = true;
  }

  dragEnd(event: DragEvent) {
    if (this.disabled) {
      return;
    }

    this.dragging = false;
  }

  @state()
  get classes(): Record<string, boolean> {
    return {
      'sortable-item': true,
      dragging: this.dragging,
      disabled: this[SortableItemProp.DISABLED],
    };
  }

  render(): TemplateResult {
    return html`
      <div
        class=${classMap(this.classes)}
        draggable="${!this.disabled}"
        @dragstart=${this.dragStart}
        @dragend=${this.dragEnd}
        part="item"
      >
        ${!this.disabled
          ? html`
              <div class="handle" part="handle">
                <ss-icon name="sort" size="20" color="currentColor"></ss-icon>
              </div>
            `
          : nothing}
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
