import { PropConfigMap, PropTypes } from '../../models/Prop';

export enum SSCarouselProp {
  INFINITE = 'infinite',
  NAVIGATION_INDEX = 'navigationIndex',
  SHOW_BUTTONS = 'showButtons',
  MOUSE_SCROLL = 'mouseScroll',
  WIDTH = 'width',
  HEIGHT = 'height',
  GAP = 'gap',
  PERSPECTIVE = 'perspective',
}

export interface SSCarouselProps extends PropTypes {
  [SSCarouselProp.INFINITE]: boolean;
  [SSCarouselProp.NAVIGATION_INDEX]: number;
  [SSCarouselProp.SHOW_BUTTONS]: boolean;
  [SSCarouselProp.MOUSE_SCROLL]: boolean;
  [SSCarouselProp.WIDTH]: number;
  [SSCarouselProp.HEIGHT]: number;
  [SSCarouselProp.GAP]: number;
  [SSCarouselProp.PERSPECTIVE]: number;
}

export const ssCarouselProps: PropConfigMap<SSCarouselProps> = {
  [SSCarouselProp.INFINITE]: {
    default: false,
    control: 'boolean',
    description: 'Whether the carousel should loop infinitely',
  },
  [SSCarouselProp.NAVIGATION_INDEX]: {
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
  [SSCarouselProp.WIDTH]: {
    default: 210,
    control: 'number',
    description: 'The width of the carousel',
  },
  [SSCarouselProp.HEIGHT]: {
    default: 140,
    control: 'number',
    description: 'The height of the carousel',
  },
  [SSCarouselProp.GAP]: {
    default: 10,
    control: 'number',
    description: 'The gap between frames',
  },
  [SSCarouselProp.PERSPECTIVE]: {
    default: 500,
    control: 'number',
    description: 'The perspective of the carousel',
  },
};

export interface ContactPoint {
  x: number;
  y: number;
}
