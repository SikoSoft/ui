import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './ss-toggle';

const meta = {
  title: 'ss-toggle',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    on: true,
  },
  argTypes: {
    on: {
      description: 'Whether the toggle is in enabled state',
      control: 'boolean',
    },
  },
  render: args => html` <ss-toggle ?on=${args.on}></ss-toggle> `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const On: Story = {
  args: {
    on: true,
  },
};

export const Off: Story = {
  args: {
    on: false,
  },
};
