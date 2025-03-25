import { PropConfigMap, PropTypes } from '@/models/Prop';
import { NotificationType } from '../notification-provider.models';

export enum NotificationMessageProp {
  MESSAGE = 'message',
  TYPE = 'type',
  START_TIME = 'startTime',
}

export interface NotificationMessageProps extends PropTypes {
  [NotificationMessageProp.MESSAGE]: string;
  [NotificationMessageProp.TYPE]: NotificationType;
  [NotificationMessageProp.START_TIME]: number;
}

export const notificationMessageProps: PropConfigMap<NotificationMessageProps> =
  {
    [NotificationMessageProp.MESSAGE]: {
      default: '',
      control: 'text',
      description: 'The message to display',
    },
    [NotificationMessageProp.TYPE]: {
      default: NotificationType.INFO,
      control: 'text',
      description: 'The type of message to display',
    },
    [NotificationMessageProp.START_TIME]: {
      default: new Date().getTime(),
      control: 'number',
      description: 'The time the message was created',
    },
  };
