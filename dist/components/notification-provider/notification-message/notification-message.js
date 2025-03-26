var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b, _c, _d;
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { theme } from '../../../styles/theme';
import { NotificationMessageProp, notificationMessageProps, } from './notification-message.models';
let NotificationMessage = class NotificationMessage extends LitElement {
    constructor() {
        super(...arguments);
        this[_a] = notificationMessageProps[NotificationMessageProp.MESSAGE].default;
        this[_b] = notificationMessageProps[NotificationMessageProp.TYPE].default;
        this[_c] = notificationMessageProps[NotificationMessageProp.START_TIME].default;
        this[_d] = notificationMessageProps[NotificationMessageProp.MESSAGE_LIFE].default;
    }
    static { _a = NotificationMessageProp.MESSAGE, _b = NotificationMessageProp.TYPE, _c = NotificationMessageProp.START_TIME, _d = NotificationMessageProp.MESSAGE_LIFE; }
    static { this.styles = [
        theme,
        css `
      .notification-message {
        position: relative;
        background-color: var(--color, #ddd);
        color: #333;
        text-align: center;
        padding: 0.25rem;

        &.success {
          background-color: var(--color-success, #4caf50);
          color: #fff;
        }

        &.error {
          background-color: var(--color-error, #f44336);
          color: #fff;
        }

        &.info {
          background-color: var(--color-info, #2196f3);
          color: #fff;
        }

        .time-indicator {
          position: absolute;
          top: 0;
          left: 0;
          //width: 100%;
          height: 100%;
          z-index: 1;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.125),
            rgba(255, 255, 255, 0.25)
          );
          animation: time-elapsed var(--message-life, 1000ms) forwards;
        }

        .content {
          position: relative;
          height: 100%;
          width: 100%;
          z-index: 2;
        }
      }

      @keyframes time-elapsed {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }
    `,
    ]; }
    get classes() {
        return {
            'notification-message': true,
            [this[NotificationMessageProp.TYPE]]: true,
        };
    }
    render() {
        return html `
      <div
        class=${classMap(this.classes)}
        style=${`--message-life: ${this[NotificationMessageProp.MESSAGE_LIFE]}ms`}
      >
        <div class="time-indicator"></div>
        <div class="content">
          ${this[NotificationMessageProp.MESSAGE]}
          <slot></slot>
        </div>
      </div>
    `;
    }
};
__decorate([
    property()
], NotificationMessage.prototype, _a, void 0);
__decorate([
    property()
], NotificationMessage.prototype, _b, void 0);
__decorate([
    property({ type: Number })
], NotificationMessage.prototype, _c, void 0);
__decorate([
    property({ type: Number })
], NotificationMessage.prototype, _d, void 0);
NotificationMessage = __decorate([
    customElement('notification-message')
], NotificationMessage);
export { NotificationMessage };
//# sourceMappingURL=notification-message.js.map