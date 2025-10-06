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
    args: { disabled: false },
    argTypes,
    render: args => html `
    <sortable-list ?disabled=${args.disabled}>
      <sortable-item ?disabled=${args.disabled}>Item 1</sortable-item>
      <sortable-item ?disabled=${args.disabled}>Item 2</sortable-item>
      <sortable-item ?disabled=${args.disabled}>Item 3</sortable-item>
      <sortable-item ?disabled=${args.disabled}>Item 4</sortable-item>
    </sortable-list>
  `,
};
export default meta;
export const Default = {
    args: {},
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
//# sourceMappingURL=sortable-list.stories.js.map