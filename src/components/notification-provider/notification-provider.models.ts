import { PropConfigMap, PropTypes } from '@/models/Prop';

export enum NotificationProviderProp {
  MESSAGE_LIFE = 'messageLife',
}

export interface NotificationProviderProps extends PropTypes {
  [NotificationProviderProp.MESSAGE_LIFE]: number;
}

export const notificationProviderProps: PropConfigMap<NotificationProviderProps> =
  {
    [NotificationProviderProp.MESSAGE_LIFE]: {
      default: 5000,
      control: 'number',
      description: 'The time in milliseconds that a message will be displayed',
    },
  };

export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export interface Notification {
  id: number;
  type: NotificationType;
  message: string;
  startTime: Date;
}
