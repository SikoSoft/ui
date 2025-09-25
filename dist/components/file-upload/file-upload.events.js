export const fileUploadSuccessEventName = "file-upload-success";
export class FileUploadSuccessEvent extends CustomEvent {
    constructor(payload) {
        super(fileUploadSuccessEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
export const fileUploadFailedEventName = "file-upload-failed";
export class FileUploadFailedEvent extends CustomEvent {
    constructor(payload) {
        super(fileUploadFailedEventName, {
            bubbles: true,
            composed: true,
            detail: payload,
        });
    }
}
//# sourceMappingURL=file-upload.events.js.map