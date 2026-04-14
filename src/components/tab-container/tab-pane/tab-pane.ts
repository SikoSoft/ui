import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TabPaneProp, TabPaneProps, tabPaneProps } from './tab-pane.models';

@customElement('tab-pane')
export class TabPane extends LitElement {
  static styles = css`
    :host {
      display: none;
    }

    :host([active]) {
      display: block;
      padding: 16px;
    }
  `;

  @property()
  [TabPaneProp.TITLE]: TabPaneProps[TabPaneProp.TITLE] =
    tabPaneProps[TabPaneProp.TITLE].default;

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}
