import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './ss-toggle';

const meta = {
  title: 'components/ss-toggle',
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
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  render: args => html` <ss-toggle ?on=${args.on}></ss-toggle> `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

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
