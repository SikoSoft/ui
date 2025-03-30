import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import { StoryBook } from '../../lib/StoryBook';

import './ss-carousel';
import { SSCarouselProps, ssCarouselProps } from './ss-carousel.models';

const argTypes = StoryBook.buildArgTypes(ssCarouselProps);

const meta = {
  title: 'components/ss-carousel',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Heading',
    open: true,
  },
  argTypes,
  render: args => html`
    <ss-carousel
      >This is some content that can be toggled into view.</ss-carousel
    >
  `,
} satisfies Meta<SSCarouselProps>;

export default meta;
type Story = StoryObj<SSCarouselProps>;

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
