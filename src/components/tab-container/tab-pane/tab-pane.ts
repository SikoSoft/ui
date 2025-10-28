import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TabPaneProp, TabPaneProps, tabPaneProps } from './tab-pane.models';
import { TabPaneReadyChangedEvent } from './tab-pane.events';

@customElement('tab-pane')
export class TabPane extends LitElement {
  @property()
  [TabPaneProp.TITLE]: TabPaneProps[TabPaneProp.TITLE] =
    tabPaneProps[TabPaneProp.TITLE].default;

  firstUpdated() {
    this.dispatchEvent(new TabPaneReadyChangedEvent({}));
  }

  render() {
    return html`
      <div class="tab-pane">
        <slot></slot>
      </div>
    `;
  }
}
