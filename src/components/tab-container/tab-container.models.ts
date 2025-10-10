import { PropConfigMap, PropTypes } from '@/models/Prop';

export interface Tab {
  title: string;
  content: HTMLElement;
}

export enum TabContainerProp {
  INDEX = 'index',
  PANE_ID = 'paneId',
}

export interface TabContainerProps extends PropTypes {
  [TabContainerProp.INDEX]: number;
  [TabContainerProp.PANE_ID]: string;
}

export const tabContainerProps: PropConfigMap<TabContainerProps> = {
  [TabContainerProp.INDEX]: {
    default: 0,
    control: 'number',
    description: 'The index of the active tab',
  },
  [TabContainerProp.PANE_ID]: {
    default: '',
    control: 'text',
    description: 'The ID of the active tab pane',
  },
};
