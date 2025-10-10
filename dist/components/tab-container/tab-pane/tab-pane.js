var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TabPaneProp, tabPaneProps } from './tab-pane.models';
let TabPane = class TabPane extends LitElement {
    constructor() {
        super(...arguments);
        this[_a] = tabPaneProps[TabPaneProp.TITLE].default;
    }
    static { _a = TabPaneProp.TITLE; }
    render() {
        return html `
      <div class="tab-pane">
        <slot></slot>
      </div>
    `;
    }
};
__decorate([
    property()
], TabPane.prototype, _a, void 0);
TabPane = __decorate([
    customElement('tab-pane')
], TabPane);
export { TabPane };
//# sourceMappingURL=tab-pane.js.map