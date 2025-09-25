export declare const fileUploadSuccessEventName = "file-upload-success";
export interface FileUploadSuccessEventPayload {
    url: string;
}
export declare class FileUploadSuccessEvent extends CustomEvent<FileUploadSuccessEventPayload> {
    constructor(payload: FileUploadSuccessEventPayload);
}
export declare const fileUploadFailedEventName = "file-upload-failed";
export type FileUploadFailedEventPayload = Record<string, never>;
export declare class FileUploadFailedEvent extends CustomEvent<FileUploadFailedEventPayload> {
    constructor(payload: FileUploadFailedEventPayload);
}
