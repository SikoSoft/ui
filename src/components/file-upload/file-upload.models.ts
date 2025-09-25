import { ControlType } from "@/models/Control";
import { PropConfigMap, PropTypes } from "@/models/Prop";

export interface FileUploadRequestBody {}

export interface FileUploadResponseBody {
  url: string;
}

export enum FileUploadProp {
  ENDPOINT_URL = "endpointUrl",
  ALLOWED_TYPES = "allowedTypes",
  PREVIEW = "preview",
}

export interface FileUploadProps extends PropTypes {
  [FileUploadProp.ENDPOINT_URL]: string;
  [FileUploadProp.ALLOWED_TYPES]: string[];
  [FileUploadProp.PREVIEW]: boolean;
}

export const fileUploadProps: PropConfigMap<FileUploadProps> = {
  [FileUploadProp.ENDPOINT_URL]: {
    default: "",
    control: {
      type: ControlType.TEXT,
    },
    description: "The URL of the endpoint which the file will be posted to",
  },
  [FileUploadProp.ALLOWED_TYPES]: {
    default: [],
    control: {
      type: ControlType.SELECT,
      options: [],
    },
    description: "An array of acceptable file types",
  },
  [FileUploadProp.PREVIEW]: {
    default: false,
    control: {
      type: ControlType.BOOLEAN,
    },
    description: "Whether or not a preview should be shown",
  },
};
