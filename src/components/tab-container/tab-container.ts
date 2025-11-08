import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { TabPane } from './tab-pane/tab-pane';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { TabIndexChangedEvent } from './tab-container.events';
import {
  Tab,
  TabContainerProp,
  tabContainerProps,
  TabContainerProps,
} from './tab-container.models';

@customElement('tab-container')
export class TabContainer extends LitElement {
  static styles = css`
    .slot-container {
      display: none;
    }

    .tab-headers {
      display: flex;
      border-bottom: 1px solid
        var(--tabs-border-color, var(--ssui-tabs-border-color, #ccc));
      background-color: var(
        --tabs-header-bg-color,
        var(--ssui-tabs-header-bg-color, #f9f9f9)
      );

      .tab-header {
        padding: 12px 16px;
        cursor: pointer;
        border: 1px solid transparent;
        border-bottom: none;
        margin-bottom: -1px;

        &:hover {
          background-color: var(
            --tabs-header-hover-bg-color,
            var(--ssui-tabs-header-hover-bg-color, #eee)
          );
        }

        &.active {
          border: 1px solid
            var(--tabs-border-color, var(--ssui-tabs-border-color, #ccc));
          border-bottom: none;
          background-color: var(
            --tabs-active-header-bg-color,
            var(--ssui-tabs-active-header-bg-color, #fff)
          );
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
  `;

  @property({ reflect: true, type: Number })
  [TabContainerProp.INDEX]: TabContainerProps[TabContainerProp.INDEX] =
    tabContainerProps[TabContainerProp.INDEX].default;

  @property()
  [TabContainerProp.PANE_ID]: TabContainerProps[TabContainerProp.PANE_ID] =
    tabContainerProps[TabContainerProp.PANE_ID].default;

  @state()
  tabs: Tab[] = [];

  get panes(): HTMLElement[] {
    return [...this.children].filter(
      child => child.nodeName === 'TAB-PANE',
    ) as HTMLElement[];
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
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
    const tabs: Tab[] = [];
    this.panes.forEach((pane, index) => {
      const tabPane = pane as TabPane;
      tabs.push({
        title: pane.getAttribute('title') || `Tab ${index + 1}`,
        content: tabPane.cloneNode(true) as TabPane,
      });
    });
    this.tabs = tabs;
  }

  setActiveIndex(index: number) {
    this.index = index;

    this.dispatchEvent(
      new TabIndexChangedEvent({ index, paneId: this.paneId }),
    );
  }

  render() {
    return html`
      <div class="slot-container" part="slot-container">
        <slot></slot>
      </div>

      <div class="tab-container" part="container">
        <div class="tab-headers" part="headers">
          ${repeat(
            this.tabs,
            (tab, index) => html`
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
            `,
          )}
        </div>

        <div class="tab-content" part="content">
          ${repeat(
            this.tabs,
            (tab, index) => html`
              <div
                part="pane"
                class=${classMap({
                  'tab-pane': true,
                  active: this.index === index,
                })}
              >
                ${tab.content}
              </div>
            `,
          )}
        </div>
      </div>
    `;
  }
}
