import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './ss-input';
import { InputType } from '../../models/Input';

const meta = {
  title: 'components/ss-input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    type: InputType.TEXT,
  },
  argTypes: {
    type: {
      description: 'What form element type the input behaves as',
      options: Object.values(InputType),
    },
  },
  render: args => html` <ss-input type=${args.type}></ss-input> `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Text: Story = {
  args: {
    type: InputType.TEXT,
  },
};
