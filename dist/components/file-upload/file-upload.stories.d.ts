import type { StoryObj } from '@storybook/web-components';
import './file-upload';
import { FileUploadProps } from './file-upload.models';
declare const meta: {
    title: string;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        buttonText: string;
        endpointUrl: string;
        allowedTypes: string;
        preview: true;
    };
    argTypes: Partial<import("@storybook/core/csf").ArgTypes<FileUploadProps>> | undefined;
    render: (args: FileUploadProps) => import("lit-html").TemplateResult<1>;
};
export default meta;
type Story = StoryObj<FileUploadProps>;
export declare const Preview: Story;
export declare const NoPreview: Story;
export declare const OnlyImages: Story;
