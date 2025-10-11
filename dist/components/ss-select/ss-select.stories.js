import { html } from 'lit';
import { StoryBook } from '../../lib/StoryBook';
import './ss-select';
import { ssSelectProps } from './ss-select.models';
const argTypes = StoryBook.buildArgTypes(ssSelectProps);
const meta = {
    title: 'components/ss-select',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        multiple: false,
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ],
    },
    argTypes,
    render: args => html `
    <ss-select
      .options=${args.options}
      selected=${args.selected}
      ?multiple=${args.multiple}
    ></ss-select>
  `,
};
export default meta;
export const PreSelectedOption = {
    args: {
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ],
        selected: 'option-2',
    },
};
export const MultipleSelect = {
    args: {
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
            { label: 'Option 4', value: 'option-4' },
            { label: 'Option 5', value: 'option-5' },
        ],
        selected: ['option-2', 'option-4'],
        multiple: true,
    },
};
//# sourceMappingURL=ss-select.stories.js.map