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
    infinite: true,
    width: ssCarouselProps.width.default,
    height: ssCarouselProps.height.default,
    gap: ssCarouselProps.gap.default,
  },
  argTypes,
  render: args => html`
    <ss-carousel
      ?showButtons=${args.showButtons}
      ?infinite=${args.infinite}
      width=${args.width}
      height=${args.height}
      gap=${args.gap}
    >
      <div class="something">1</div>
      <div class="different">2</div>
      <div>3</div>
      <div>4</div>
      <span>5</span>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </ss-carousel>
  `,
} satisfies Meta<SSCarouselProps>;

export default meta;
type Story = StoryObj<SSCarouselProps>;

export const ShowButtonsInfinite: Story = {
  args: {
    showButtons: true,
    infinite: true,
  },
};

export const ShowButtonsFinite: Story = {
  args: {
    showButtons: true,
    infinite: false,
  },
};

export const NoButtons: Story = {
  args: {
    showButtons: false,
  },
};
