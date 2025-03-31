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
    <ss-carousel>
      <div class="frame">1</div>
      <div class="frame">2</div>
      <div class="frame">3</div>
      <div class="frame">4</div>
      <div class="frame">5</div>
      <div class="frame">6</div>
      <div class="frame">7</div>
      <div class="frame">8</div>
      <div class="frame">9</div>
      <div class="frame">10</div>
      <div class="frame">11</div>
    </ss-carousel>
  `,
} satisfies Meta<SSCarouselProps>;

/*
      <div>scene 1</div>
      <div>scene 2</div>
      <div>scene 3</div>
      <div>scene 4</div>
      <div>scene 5</div>
      */

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
