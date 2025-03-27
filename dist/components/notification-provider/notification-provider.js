var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { theme } from '../../styles/theme';
import { NotificationProviderProp, notificationProviderProps, } from './notification-provider.models';
import './notification-message/notification-message';
let NotificationProvider = class NotificationProvider extends LitElement {
    constructor() {
        super(...arguments);
        this.notificationId = 0;
        this.notifications = [];
        this[_a] = notificationProviderProps[NotificationProviderProp.MESSAGE_LIFE].default;
    }
    static { _a = NotificationProviderProp.MESSAGE_LIFE; }
    static { this.styles = [
        theme,
        css `
      .notification-provider {
        position: fixed;
        top: 0;
        left: 10vw;
        width: 80vw;
        z-index: 1000;
      }
    `,
    ]; }
    addNotification(message, type) {
        const id = this.notificationId++;
        const notification = {
            id,
            message,
            type,
            startTime: new Date(),
            messageLife: this[NotificationProviderProp.MESSAGE_LIFE],
        };
        this.notifications = [...this.notifications, notification];
        setTimeout(() => {
            this.removeNotification(id);
        }, this[NotificationProviderProp.MESSAGE_LIFE]);
        return id;
    }
    removeNotification(id) {
        this.notifications = this.notifications.filter(n => n.id !== id);
    }
    render() {
        return html `
      <div class="notification-provider">
        ${repeat(this.notifications, n => n.id, n => {
            return html ` <notification-message
              @notification-clicked=${() => this.removeNotification(n.id)}
              message=${n.message}
              type=${n.type}
              startTime=${n.startTime.getTime()}
              messageLife=${n.messageLife}
            ></notification-message>`;
        })}
      </div>
    `;
    }
};
__decorate([
    state()
], NotificationProvider.prototype, "notifications", void 0);
__decorate([
    property({ type: Number, reflect: true })
], NotificationProvider.prototype, _a, void 0);
NotificationProvider = __decorate([
    customElement('notification-provider')
], NotificationProvider);
export { NotificationProvider };
//# sourceMappingURL=notification-provider.js.map