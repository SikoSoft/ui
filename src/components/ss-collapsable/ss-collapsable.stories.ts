import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './ss-collapsable';

const meta = {
  title: 'components/ss-collapsable',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Heading',
    open: true,
  },
  argTypes: {
    open: {
      description: 'Whether the content is in opened state',
      control: 'boolean',
    },
    title: {
      description: 'The heading in which is always displayed',
      control: 'text',
    },
  },
  render: args => html`
    <ss-collapsable ?open=${args.open} title=${args.title}
      >This is some content that can be toggled into view.</ss-collapsable
    >
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Open: Story = {
  args: {
    title: 'Collapsable',
    open: true,
  },
};

export const Closed: Story = {
  args: {
    title: 'Collapsable',
    open: false,
  },
};
