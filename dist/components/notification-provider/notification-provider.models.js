export var NotificationProviderProp;
(function (NotificationProviderProp) {
    NotificationProviderProp["MESSAGE_LIFE"] = "messageLife";
})(NotificationProviderProp || (NotificationProviderProp = {}));
export const notificationProviderProps = {
    [NotificationProviderProp.MESSAGE_LIFE]: {
        default: 5000,
        control: 'number',
        description: 'The time in milliseconds that a message will be displayed',
    },
};
export var NotificationType;
(function (NotificationType) {
    NotificationType["INFO"] = "info";
    NotificationType["SUCCESS"] = "success";
    NotificationType["WARNING"] = "warning";
    NotificationType["ERROR"] = "error";
})(NotificationType || (NotificationType = {}));
//# sourceMappingURL=notification-provider.models.js.map