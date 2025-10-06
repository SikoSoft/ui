var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SortableItemProp, sortableItemProps, } from './sortable-item.models';
let SortableItem = class SortableItem extends LitElement {
    constructor() {
        super(...arguments);
        this[_a] = sortableItemProps[SortableItemProp.DISABLED].default;
        this.id = '';
        this.dragging = false;
    }
    static { _a = SortableItemProp.DISABLED; }
    static { this.styles = css `
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
  `; }
    dragStart(event) {
        if (this.disabled) {
            return;
        }
        this.dragging = true;
    }
    dragEnd(event) {
        if (this.disabled) {
            return;
        }
        this.dragging = false;
    }
    get classes() {
        return {
            'sortable-item': true,
            dragging: this.dragging,
            disabled: this[SortableItemProp.DISABLED],
        };
    }
    render() {
        return html `
      <div
        class=${classMap(this.classes)}
        draggable="${!this.disabled}"
        @dragstart=${this.dragStart}
        @dragend=${this.dragEnd}
        part="item"
      >
        ${!this.disabled
            ? html `
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
};
__decorate([
    property({ type: Boolean })
], SortableItem.prototype, _a, void 0);
__decorate([
    property()
], SortableItem.prototype, "id", void 0);
__decorate([
    state()
], SortableItem.prototype, "dragging", void 0);
__decorate([
    state()
], SortableItem.prototype, "classes", null);
SortableItem = __decorate([
    customElement('sortable-item')
], SortableItem);
export { SortableItem };
//# sourceMappingURL=sortable-item.js.map