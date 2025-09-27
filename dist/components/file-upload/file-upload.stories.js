import { html } from 'lit';
import { StoryBook } from '../../lib/StoryBook';
import './file-upload';
import { fileUploadProps } from './file-upload.models';
const argTypes = StoryBook.buildArgTypes(fileUploadProps);
const meta = {
    title: 'components/file-upload',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        buttonText: fileUploadProps.buttonText.default,
        endpointUrl: 'https://example.com/upload',
        allowedTypes: '',
        preview: true,
    },
    argTypes,
    render: args => html `
    <file-upload
      buttonText=${args.buttonText}
      endpointUrl=${args.endpointUrl}
      allowedTypes=${args.allowedTypes}
      ?preview=${args.preview}
    ></file-upload>
  `,
};
export default meta;
export const Preview = {
    args: {
        preview: true,
    },
};
export const NoPreview = {
    args: {
        preview: false,
    },
};
export const OnlyImages = {
    args: {
        allowedTypes: 'image/*',
    },
};
//# sourceMappingURL=file-upload.stories.js.map