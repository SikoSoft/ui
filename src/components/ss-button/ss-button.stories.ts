import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './ss-button';

const meta = {
  title: 'ss-button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'Click me',
  },
  argTypes: {
    text: {
      description: 'Human readable content to be displayed',
      control: 'text',
    },
    disabled: {
      description: 'Whether the field is locked from use',
      control: 'boolean',
    },
  },
  render: args => html` <ss-button text=${args.text}></ss-button> `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Disabled: Story = {
  args: {
    text: "Can't touch this",
    disabled: true,
  },
};
