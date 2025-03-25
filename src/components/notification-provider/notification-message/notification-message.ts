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
  @property()
  [NotificationMessageProp.MESSAGE]: NotificationMessageProps[NotificationMessageProp.MESSAGE] =
    notificationMessageProps[NotificationMessageProp.MESSAGE].default;

  @property()
  [NotificationMessageProp.TYPE]: NotificationMessageProps[NotificationMessageProp.TYPE] =
    notificationMessageProps[NotificationMessageProp.TYPE].default;

  @property({ type: Number })
  [NotificationMessageProp.START_TIME]: NotificationMessageProps[NotificationMessageProp.START_TIME] =
    notificationMessageProps[NotificationMessageProp.START_TIME].default;

  render() {
    return html`
      <div class="notification-message">
        ${this[NotificationMessageProp.MESSAGE]}
        <slot></slot>
      </div>
    `;
  }
}
