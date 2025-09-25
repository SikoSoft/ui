export const fileUploadSuccessEventName = "file-upload-success";

export interface FileUploadSuccessEventPayload {
  url: string;
}

export class FileUploadSuccessEvent extends CustomEvent<FileUploadSuccessEventPayload> {
  constructor(payload: FileUploadSuccessEventPayload) {
    super(fileUploadSuccessEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}

export const fileUploadFailedEventName = "file-upload-failed";

export type FileUploadFailedEventPayload = Record<string, never>;

export class FileUploadFailedEvent extends CustomEvent<FileUploadFailedEventPayload> {
  constructor(payload: FileUploadFailedEventPayload) {
    super(fileUploadFailedEventName, {
      bubbles: true,
      composed: true,
      detail: payload,
    });
  }
}
