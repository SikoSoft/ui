import { html } from 'lit';
import { StoryBook } from '../../lib/StoryBook';
import './sortable-list';
import { sortableListProps } from './sortable-list.models';
const argTypes = StoryBook.buildArgTypes(sortableListProps);
const meta = {
    title: 'components/sortable-list',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {},
    argTypes,
    render: args => html `
    <sortable-list>
      <sortable-item>Item 1</sortable-item>
      <sortable-item>Item 2</sortable-item>
      <sortable-item>Item 3</sortable-item>
      <sortable-item>Item 4</sortable-item>
    </sortable-list>
  `,
};
export default meta;
export const Default = {
    args: {},
};
//# sourceMappingURL=sortable-list.stories.js.map