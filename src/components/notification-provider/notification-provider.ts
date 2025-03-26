import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
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
  notificationId = 0;

  @state()
  notifications: Notification[] = [];

  public static styles = [
    theme,
    css`
      .notification-provider {
        position: fixed;
        top: 0;
        left: 10vw;
        width: 80vw;
        z-index: 1000;
      }
    `,
  ];

  @property({ type: Number, reflect: true })
  [NotificationProviderProp.MESSAGE_LIFE]: NotificationProviderProps[NotificationProviderProp.MESSAGE_LIFE] =
    notificationProviderProps[NotificationProviderProp.MESSAGE_LIFE].default;

  addNotification(message: string, type: NotificationType, permanent = false) {
    const id = this.notificationId++;
    const notification: Notification = {
      id,
      message,
      type,
      startTime: new Date(),
    };

    this.notifications = [...this.notifications, notification];

    if (!permanent) {
      setTimeout(() => {
        this.notifications = this.notifications.filter(
          n => n.id !== notification.id,
        );
      }, this[NotificationProviderProp.MESSAGE_LIFE]);
    }
  }

  render() {
    return html`
      <div class="notification-provider">
        ${repeat(
          this.notifications,
          n => n.id,
          n => {
            return html` <notification-message
              message=${n.message}
              type=${n.type}
              startTime=${n.startTime.getTime()}
            ></notification-message>`;
          },
        )}
      </div>
    `;
  }
}
