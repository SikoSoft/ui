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
    navigationIndex: ssCarouselProps.navigationIndex.default,
    showButtons: true,
    infinite: true,
    width: ssCarouselProps.width.default,
    height: ssCarouselProps.height.default,
    gap: ssCarouselProps.gap.default,
    perspective: ssCarouselProps.perspective.default,
    discrete: ssCarouselProps.discrete.default,
  },
  argTypes,
  render: args => html`
    <ss-carousel
      ?showButtons=${args.showButtons}
      ?infinite=${args.infinite}
      width=${args.width}
      height=${args.height}
      gap=${args.gap}
      perspective=${args.perspective}
      ?discrete=${args.discrete}
      navigationIndex=${args.navigationIndex}
    >
      <div class="something">Test</div>
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

export const DiscreteWithButtons: Story = {
  args: {
    discrete: true,
    buttons: true,
  },
};

export const DiscreteWithoutButtons: Story = {
  args: {
    discrete: true,
    buttons: false,
  },
};
