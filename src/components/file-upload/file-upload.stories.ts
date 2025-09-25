import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { StoryBook } from '../../lib/StoryBook';

import './file-upload';
import { FileUploadProps, fileUploadProps } from './file-upload.models';

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
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif'],
    preview: true,
  },
  argTypes,
  render: args => html`
    <file-upload
      buttonText=${args.buttonText}
      endpointUrl=${args.endpointUrl}
      .allowedTypes=${args.allowedTypes}
      ?preview=${args.preview}
    ></file-upload>
  `,
} satisfies Meta<FileUploadProps>;

export default meta;

type Story = StoryObj<FileUploadProps>;

export const Preview: Story = {
  args: {
    preview: true,
  },
};

export const NoPreview: Story = {
  args: {
    preview: false,
  },
};
