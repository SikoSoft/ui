import { PropConfigMap, PropTypes } from '../../models/Prop';

export enum SSCarouselProp {
  INFINITE = 'infinite',
  ACTIVE_INDEX = 'activeIndex',
  SHOW_BUTTONS = 'showButtons',
  MOUSE_SCROLL = 'mouseScroll',
}

export interface SSCarouselProps extends PropTypes {
  [SSCarouselProp.INFINITE]: boolean;
  [SSCarouselProp.ACTIVE_INDEX]: number;
  [SSCarouselProp.SHOW_BUTTONS]: boolean;
  [SSCarouselProp.MOUSE_SCROLL]: boolean;
}

export const ssCarouselProps: PropConfigMap<SSCarouselProps> = {
  [SSCarouselProp.INFINITE]: {
    default: false,
    control: 'boolean',
    description: 'Whether the carousel should loop infinitely',
  },
  [SSCarouselProp.ACTIVE_INDEX]: {
    default: 0,
    control: 'number',
    description: 'The index of the active slide',
  },
  [SSCarouselProp.SHOW_BUTTONS]: {
    default: false,
    control: 'boolean',
    description: 'Whether to show the navigation buttons',
  },
  [SSCarouselProp.MOUSE_SCROLL]: {
    default: false,
    control: 'boolean',
    description: 'Whether to allow mouse scrolling',
  },
};

export interface ContactPoint {
  x: number;
  y: number;
}
