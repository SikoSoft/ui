import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { theme } from '../../styles/theme';
import {
  NotificationProviderProp,
  NotificationProviderProps,
  Notification,
  notificationProviderProps,
} from './notification-provider.models';

@customElement('notification-provider')
export class NotificationProvider extends LitElement {
  private notificationId = 0;
  private notifications: Notification[] = [];

  @property({ type: Number })
  [NotificationProviderProp.MESSAGE_LIFE]: NotificationProviderProps[NotificationProviderProp.MESSAGE_LIFE] =
    notificationProviderProps[NotificationProviderProp.MESSAGE_LIFE].default;

  render() {
    return html` <div class="notification-provider"></div> `;
  }
}
