import { LitElement, html, TemplateResult, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('sortable-item')
export class SortableItem extends LitElement {
  static styles = css`
    .sortable-item {
      padding: 1rem;
      display: flex;
      border: 1px transparent solid;

      &.dragging {
      }
    }
  `;

  @property()
  id = '';

  @state() dragging = false;

  dragStart(event: DragEvent) {
    this.dragging = true;
    //console.log("dragstart", { event });
  }

  dragEnd(event: DragEvent) {
    this.dragging = false;
    //console.log("dragend", { event });
  }

  @state()
  get classes(): Record<string, boolean> {
    return {
      'sortable-item': true,
      dragging: this.dragging,
    };
  }

  render(): TemplateResult {
    return html`
      <div
        class=${classMap(this.classes)}
        draggable="true"
        @dragstart=${this.dragStart}
        @dragend=${this.dragEnd}
      >
        <div class="handle" part="handle">↕️</div>
        <slot></slot>
      </div>
    `;
  }
}
