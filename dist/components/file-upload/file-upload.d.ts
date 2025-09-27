import { LitElement, TemplateResult } from 'lit';
import { FileUploadProp, FileUploadProps } from './file-upload.models';
import '../ss-button/ss-button';
export declare class FileUpload extends LitElement {
    static styles: import("lit").CSSResult;
    [FileUploadProp.ENDPOINT_URL]: FileUploadProps[FileUploadProp.ENDPOINT_URL];
    [FileUploadProp.ALLOWED_TYPES]: FileUploadProps[FileUploadProp.ALLOWED_TYPES];
    [FileUploadProp.PREVIEW]: FileUploadProps[FileUploadProp.PREVIEW];
    [FileUploadProp.BUTTON_TEXT]: FileUploadProps[FileUploadProp.BUTTON_TEXT];
    [FileUploadProp.AUTH_TOKEN]: FileUploadProps[FileUploadProp.AUTH_TOKEN];
    showSelector: boolean;
    url: string;
    get classes(): Record<string, boolean>;
    get isImage(): boolean;
    saveToServer(file: File): Promise<void>;
    openFileSelector(): void;
    render(): TemplateResult;
}
