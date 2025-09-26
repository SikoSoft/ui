export var FileUploadProp;
(function (FileUploadProp) {
    FileUploadProp["ENDPOINT_URL"] = "endpointUrl";
    FileUploadProp["ALLOWED_TYPES"] = "allowedTypes";
    FileUploadProp["PREVIEW"] = "preview";
    FileUploadProp["BUTTON_TEXT"] = "buttonText";
    FileUploadProp["AUTH_TOKEN"] = "authToken";
})(FileUploadProp || (FileUploadProp = {}));
export const fileUploadProps = {
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
    [FileUploadProp.AUTH_TOKEN]: {
        default: '',
        control: 'text',
        description: 'Authorization token to include in the upload request headers',
    },
};
//# sourceMappingURL=file-upload.models.js.map