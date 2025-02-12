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
    loading: {
      description: 'Whether the button shows loader and is disabled',
      control: 'boolean',
    },
    positive: {
      description: 'Whether to style the button in a positive manner',
      control: 'boolean',
    },
    negative: {
      description: 'Whether to style the button in a negative manner',
      control: 'boolean',
    },
  },
  render: args => html`
    <ss-button
      text=${args.text}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      ?positive=${args.positive}
      ?negative=${args.negative}
    ></ss-button>
  `,
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

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Positive: Story = {
  args: {
    positive: true,
  },
};

export const Negative: Story = {
  args: {
    negative: true,
  },
};
