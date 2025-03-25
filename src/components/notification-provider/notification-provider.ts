import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { theme } from '../../styles/theme';
import {
  NotificationProviderProp,
  NotificationProviderProps,
  Notification,
  notificationProviderProps,
  NotificationType,
} from './notification-provider.models';

import './notification-message/notification-message';

@customElement('notification-provider')
export class NotificationProvider extends LitElement {
  private notificationId = 0;
  private notifications: Notification[] = [];

  public static styles = [
    theme,
    css`
      .notification-provider {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
      }
    `,
  ];

  @property({ type: Number })
  [NotificationProviderProp.MESSAGE_LIFE]: NotificationProviderProps[NotificationProviderProp.MESSAGE_LIFE] =
    notificationProviderProps[NotificationProviderProp.MESSAGE_LIFE].default;

  connectedCallback(): void {
    super.connectedCallback();
    this.addNotification('Hello, world!', NotificationType.INFO);
    this.addNotification('Hello, world!', NotificationType.SUCCESS);
    this.addNotification('Hello, world!', NotificationType.WARNING);
  }

  addNotification(message: string, type: Notification['type']) {
    const id = this.notificationId++;
    const notification: Notification = {
      id,
      message,
      type,
      startTime: new Date(),
    };

    this.notifications.push(notification);

    setTimeout(() => {
      this.notifications = this.notifications.filter(
        n => n.id !== notification.id,
      );
    }, this[NotificationProviderProp.MESSAGE_LIFE]);
  }

  render() {
    return html`
      <div class="notification-provider">
        ${this.notifications.map(n => {
          return html` <notification-message
            message=${n.message}
            type=${n.type}
            startTime=${n.startTime.getTime()}
          ></notification-message>`;
        })}
      </div>
    `;
  }
}
