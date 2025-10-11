import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { StoryBook } from '../../lib/StoryBook';

import './ss-select';
import { SSSelectProps, ssSelectProps } from './ss-select.models';

const argTypes = StoryBook.buildArgTypes(ssSelectProps);

const meta = {
  title: 'components/ss-select',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    multiple: false,
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
    ],
  },
  argTypes,
  render: args => html`
    <ss-select
      .options=${args.options}
      selected=${args.selected}
      ?multiple=${args.multiple}
    ></ss-select>
  `,
} satisfies Meta<SSSelectProps>;

export default meta;
type Story = StoryObj<SSSelectProps>;
export const PreSelectedOption: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
    ],
    selected: 'option-2',
  },
};

export const MultipleSelect: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
      { label: 'Option 4', value: 'option-4' },
      { label: 'Option 5', value: 'option-5' },
    ],
    selected: ['option-2', 'option-4'],
    multiple: true,
  },
};
