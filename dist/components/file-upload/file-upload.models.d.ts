import { PropConfigMap, PropTypes } from '@/models/Prop';
export interface FileUploadRequestBody {
}
export interface FileUploadResponseBody {
    url: string;
}
export declare enum FileUploadProp {
    ENDPOINT_URL = "endpointUrl",
    ALLOWED_TYPES = "allowedTypes",
    PREVIEW = "preview",
    BUTTON_TEXT = "buttonText"
}
export interface FileUploadProps extends PropTypes {
    [FileUploadProp.ENDPOINT_URL]: string;
    [FileUploadProp.ALLOWED_TYPES]: string[];
    [FileUploadProp.PREVIEW]: boolean;
    [FileUploadProp.BUTTON_TEXT]: string;
}
export declare const fileUploadProps: PropConfigMap<FileUploadProps>;
