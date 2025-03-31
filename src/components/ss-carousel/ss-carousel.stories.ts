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
    showButtons: true,
  },
  argTypes,
  render: args => html`
    <ss-carousel ?showButtons=${args.showButtons}>
      <div class="frame">1</div>
      <div class="frame">2</div>
      <div class="frame">3</div>
      <div class="frame">4</div>
      <div class="frame">5</div>
      <div class="frame">6</div>
      <div class="frame">7</div>
      <div class="frame">8</div>
    </ss-carousel>
  `,
} satisfies Meta<SSCarouselProps>;

export default meta;
type Story = StoryObj<SSCarouselProps>;

export const ShowButtons: Story = {
  args: {
    showButtons: true,
  },
};

export const NoButtons: Story = {
  args: {
    showButtons: false,
  },
};
