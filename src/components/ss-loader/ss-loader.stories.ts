import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { StoryBook } from '../../lib/StoryBook';

import './ss-loader';
import { SSLoaderProps, ssLoaderProps } from './ss-loader.models';

const argTypes = StoryBook.buildArgTypes(ssLoaderProps);

const meta = {
  title: 'components/ss-toggle',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    on: true,
  },
  argTypes,
  render: args => html` <ss-toggle ?on=${args.on}></ss-toggle> `,
} satisfies Meta<SSLoaderProps>;

export default meta;
type Story = StoryObj<SSLoaderProps>;

export const Off: Story = {
  args: {
    on: false,
  },
};

export const On: Story = {
  args: {
    on: true,
  },
};
