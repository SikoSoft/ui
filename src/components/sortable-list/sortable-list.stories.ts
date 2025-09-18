import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { StoryBook } from '../../lib/StoryBook';

import './sortable-list';
import { SortableListProps, sortableListProps } from './sortable-list.models';

const argTypes = StoryBook.buildArgTypes(sortableListProps);

const meta = {
  title: 'components/sortable-list',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes,
  render: args => html`
    <sortable-list>
      <sortable-item>Item 1</sortable-item>
      <sortable-item>Item 2</sortable-item>
      <sortable-item>Item 3</sortable-item>
      <sortable-item>Item 4</sortable-item>
    </sortable-list>
  `,
} satisfies Meta<SortableListProps>;

export default meta;
type Story = StoryObj<SortableListProps>;

export const Default: Story = {
  args: {},
};
