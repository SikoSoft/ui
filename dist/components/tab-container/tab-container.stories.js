import { html } from 'lit';
import { StoryBook } from '../../lib/StoryBook';
import './tab-container';
import './tab-pane/tab-pane';
import { TabContainerProp, tabContainerProps, } from './tab-container.models';
const argTypes = StoryBook.buildArgTypes(tabContainerProps);
const meta = {
    title: 'components/tab-container',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        index: tabContainerProps[TabContainerProp.INDEX].default,
        paneId: tabContainerProps[TabContainerProp.PANE_ID].default,
    },
    argTypes,
    render: args => html `
    <tab-container index=${args.index} paneId=${args.paneId}>
      <tab-pane title="Tab 1">
        <div style="padding: 16px;">Content for Tab 1</div>
      </tab-pane>
      <tab-pane title="Tab 2">
        <div style="padding: 16px;">Content for Tab 2</div>
      </tab-pane>
      <tab-pane title="Tab 3">
        <div style="padding: 16px;">Content for Tab 3</div>
      </tab-pane>
      <tab-pane title="Tab 4">
        <div style="padding: 16px;">Content for Tab 4</div>
      </tab-pane>
    </tab-container>
  `,
};
export default meta;
export const Default = {};
export const SecondTabActive = {
    args: {
        index: 1,
    },
};
export const ThirdTabActive = {
    args: {
        index: 2,
    },
};
//# sourceMappingURL=tab-container.stories.js.map