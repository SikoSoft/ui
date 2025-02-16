import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { SSButtonProp, SSButtonProps } from './ss-button';
import './ss-button';

const meta = {
  title: 'components/ss-button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'Click me',
    disabled: false,
  },
  argTypes: {
    [SSButtonProp.TEXT]: {
      description: 'Human readable content to be displayed',
      control: 'text',
    },
    [SSButtonProp.DISABLED]: {
      description: 'Whether the field is locked from use',
      control: 'boolean',
    },
    [SSButtonProp.LOADING]: {
      description: 'Whether the button shows loader and is disabled',
      control: 'boolean',
    },
    [SSButtonProp.POSITIVE]: {
      description: 'Whether to style the button in a positive manner',
      control: 'boolean',
    },
    [SSButtonProp.NEGATIVE]: {
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
} satisfies Meta<SSButtonProps>;

export default meta;
type Story = StoryObj<SSButtonProps>;

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
