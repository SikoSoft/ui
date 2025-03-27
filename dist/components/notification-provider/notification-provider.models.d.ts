import { PropConfigMap, PropTypes } from '@/models/Prop';
export declare enum NotificationProviderProp {
    MESSAGE_LIFE = "messageLife"
}
export interface NotificationProviderProps extends PropTypes {
    [NotificationProviderProp.MESSAGE_LIFE]: number;
}
export declare const notificationProviderProps: PropConfigMap<NotificationProviderProps>;
export declare enum NotificationType {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}
export interface Notification {
    id: number;
    type: NotificationType;
    message: string;
    startTime: Date;
    messageLife: number;
}
