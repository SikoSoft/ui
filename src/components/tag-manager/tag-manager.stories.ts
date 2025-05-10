import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { StoryBook } from '../../lib/StoryBook';

import './tag-manager';
import { TagManagerProps, tagManagerProps } from './tag-manager.models';

const argTypes = StoryBook.buildArgTypes(tagManagerProps);

const meta = {
  title: 'components/tag-manager',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    value: '',
  },
  argTypes,
  render: args => html` <tag-manager></tag-manager>> `,
} satisfies Meta<TagManagerProps>;

export default meta;
type Story = StoryObj<TagManagerProps>;
