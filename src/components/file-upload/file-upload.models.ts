import { PropConfigMap, PropTypes } from '@/models/Prop';

export interface FileUploadRequestBody {}

export interface FileUploadResponseBody {
  url: string;
}

export enum FileUploadProp {
  ENDPOINT_URL = 'endpointUrl',
  ALLOWED_TYPES = 'allowedTypes',
  PREVIEW = 'preview',
  BUTTON_TEXT = 'buttonText',
}

export interface FileUploadProps extends PropTypes {
  [FileUploadProp.ENDPOINT_URL]: string;
  [FileUploadProp.ALLOWED_TYPES]: string[];
  [FileUploadProp.PREVIEW]: boolean;
  [FileUploadProp.BUTTON_TEXT]: string;
}

export const fileUploadProps: PropConfigMap<FileUploadProps> = {
  [FileUploadProp.ENDPOINT_URL]: {
    default: '',
    control: 'text',
    description: 'The URL of the endpoint which the file will be posted to',
  },
  [FileUploadProp.ALLOWED_TYPES]: {
    default: [],
    control: 'text',
    description: 'An array of acceptable file types',
  },
  [FileUploadProp.PREVIEW]: {
    default: false,
    control: 'boolean',
    description: 'Whether or not a preview should be shown',
  },
  [FileUploadProp.BUTTON_TEXT]: {
    default: 'Choose file',
    control: 'text',
    description: 'The text to display on the upload button',
  },
};
