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
  AUTH_TOKEN = 'authToken',
}

export interface FileUploadProps extends PropTypes {
  [FileUploadProp.ENDPOINT_URL]: string;
  [FileUploadProp.ALLOWED_TYPES]: string;
  [FileUploadProp.PREVIEW]: boolean;
  [FileUploadProp.BUTTON_TEXT]: string;
  [FileUploadProp.AUTH_TOKEN]: string;
}

export const fileUploadProps: PropConfigMap<FileUploadProps> = {
  [FileUploadProp.ENDPOINT_URL]: {
    default: '',
    control: 'text',
    description: 'The URL of the endpoint which the file will be posted to',
  },
  [FileUploadProp.ALLOWED_TYPES]: {
    default: '',
    control: 'text',
    description: 'A comma separated list of acceptable file types',
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
  [FileUploadProp.AUTH_TOKEN]: {
    default: '',
    control: 'text',
    description: 'Authorization token to include in the upload request headers',
  },
};
