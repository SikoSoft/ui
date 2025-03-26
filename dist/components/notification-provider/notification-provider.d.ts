import { LitElement } from 'lit';
import { NotificationProviderProp, NotificationProviderProps, Notification, NotificationType } from './notification-provider.models';
import './notification-message/notification-message';
export declare class NotificationProvider extends LitElement {
    notificationId: number;
    notifications: Notification[];
    static styles: import("lit").CSSResult[];
    [NotificationProviderProp.MESSAGE_LIFE]: NotificationProviderProps[NotificationProviderProp.MESSAGE_LIFE];
    addNotification(message: string, type: NotificationType): number;
    removeNotification(id: number): void;
    render(): import("lit-html").TemplateResult<1>;
}
