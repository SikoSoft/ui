import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { theme } from '../../../styles/theme';
import {
  NotificationMessageProp,
  NotificationMessageProps,
  notificationMessageProps,
} from './notification-message.models';

@customElement('notification-message')
export class NotificationMessage extends LitElement {
  static styles = [
    theme,
    css`
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
  ];
  @property()
  [NotificationMessageProp.MESSAGE]: NotificationMessageProps[NotificationMessageProp.MESSAGE] =
    notificationMessageProps[NotificationMessageProp.MESSAGE].default;

  @property()
  [NotificationMessageProp.TYPE]: NotificationMessageProps[NotificationMessageProp.TYPE] =
    notificationMessageProps[NotificationMessageProp.TYPE].default;

  @property({ type: Number })
  [NotificationMessageProp.START_TIME]: NotificationMessageProps[NotificationMessageProp.START_TIME] =
    notificationMessageProps[NotificationMessageProp.START_TIME].default;

  @property({ type: Number })
  [NotificationMessageProp.MESSAGE_LIFE]: NotificationMessageProps[NotificationMessageProp.MESSAGE_LIFE] =
    notificationMessageProps[NotificationMessageProp.MESSAGE_LIFE].default;

  get classes(): Record<string, boolean> {
    return {
      'notification-message': true,
      [this[NotificationMessageProp.TYPE]]: true,
    };
  }

  render() {
    return html`
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
}
