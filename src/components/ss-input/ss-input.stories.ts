import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { StoryBook } from '../../lib/StoryBook';

import './ss-input';
import { InputType } from '../../models/Input';
import { SSInputProps, ssInputProps } from './ss-input.models';

const argTypes = StoryBook.buildArgTypes(ssInputProps);

const meta = {
  title: 'components/ss-input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    type: InputType.TEXT,
  },
  argTypes,
  render: args => html`
    <ss-input type=${args.type} ?autoComplete=${args.autoComplete}></ss-input>
  `,
} satisfies Meta<SSInputProps>;

export default meta;
type Story = StoryObj<SSInputProps>;

export const Text: Story = {
  args: {
    type: InputType.TEXT,
  },
};
