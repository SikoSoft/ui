var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b;
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { TabIndexChangedEvent } from './tab-container.events';
import { TabContainerProp, tabContainerProps, } from './tab-container.models';
let TabContainer = class TabContainer extends LitElement {
    constructor() {
        super(...arguments);
        this[_a] = tabContainerProps[TabContainerProp.INDEX].default;
        this[_b] = tabContainerProps[TabContainerProp.PANE_ID].default;
        this.tabs = [];
    }
    static { _a = TabContainerProp.INDEX, _b = TabContainerProp.PANE_ID; }
    static { this.styles = css `
    .slot-container {
      display: none;
    }

    .tab-headers {
      display: flex;
      border-bottom: 1px solid var(--border-color, #ccc);
      background-color: var(--header-bg-color, #f9f9f9);

      .tab-header {
        padding: 12px 16px;
        cursor: pointer;
        border: 1px solid transparent;
        border-bottom: none;
        margin-bottom: -1px;

        &:hover {
          background-color: var(--header-hover-bg-color, #eee);
        }

        &.active {
          border: 1px solid var(--border-color, #ccc);
          border-bottom: none;
          background-color: var(--active-header-bg-color, #fff);
          font-weight: bold;
        }
      }
    }

    .tab-content {
      .tab-pane {
        display: none;
        padding: 16px;

        &.active {
          display: block;
        }

        &.hidden {
          display: none;
        }
      }
    }
  `; }
    get panes() {
        return [...this.children].filter(child => child.nodeName === 'TAB-PANE');
    }
    firstUpdated(_changedProperties) {
        this.setupPanes();
        this.setupSlot();
    }
    setupSlot() {
        const slotNode = this.shadowRoot?.querySelector('slot');
        if (slotNode) {
            slotNode.addEventListener('slotchange', () => {
                this.setupPanes();
            });
        }
    }
    async setupPanes() {
        await this.updateComplete;
        const tabs = [];
        this.panes.forEach((pane, index) => {
            const tabPane = pane;
            tabs.push({
                title: pane.getAttribute('title') || `Tab ${index + 1}`,
                content: tabPane.cloneNode(true),
            });
        });
        this.tabs = tabs;
    }
    setActiveIndex(index) {
        this.index = index;
        this.dispatchEvent(new TabIndexChangedEvent({ index, paneId: this.paneId }));
    }
    render() {
        return html `
      <div class="slot-container" part="slot-container">
        <slot></slot>
      </div>

      <div class="tab-container" part="container">
        <div class="tab-headers" part="headers">
          ${repeat(this.tabs, (tab, index) => html `
              <div
                part="header"
                class=${classMap({
            'tab-header': true,
            active: this.index === index,
        })}
                @click=${() => {
            this.setActiveIndex(index);
        }}
              >
                ${tab.title}
              </div>
            `)}
        </div>

        <div class="tab-content" part="content">
          ${repeat(this.tabs, (tab, index) => html `
              <div
                part="pane"
                class=${classMap({
            'tab-pane': true,
            active: this.index === index,
        })}
              >
                ${tab.content}
              </div>
            `)}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ reflect: true, type: Number })
], TabContainer.prototype, _a, void 0);
__decorate([
    property()
], TabContainer.prototype, _b, void 0);
__decorate([
    state()
], TabContainer.prototype, "tabs", void 0);
TabContainer = __decorate([
    customElement('tab-container')
], TabContainer);
export { TabContainer };
//# sourceMappingURL=tab-container.js.map