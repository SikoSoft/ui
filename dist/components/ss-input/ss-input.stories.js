import { html } from 'lit';
import { StoryBook } from '../../lib/StoryBook';
import './ss-input';
import { InputType } from '../../models/Input';
import { ssInputProps } from './ss-input.models';
const argTypes = StoryBook.buildArgTypes(ssInputProps);
const meta = {
    title: 'components/ss-input',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        type: InputType.TEXT,
    },
    argTypes,
    render: args => html `
    <ss-input type=${args.type} ?autoComplete=${args.autoComplete}></ss-input>
  `,
};
export default meta;
export const Text = {
    args: {
        type: InputType.TEXT,
    },
};
//# sourceMappingURL=ss-input.stories.js.map