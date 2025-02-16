import { html } from 'lit';
import { StoryBook } from '../../lib/StoryBook';
import './ss-toggle';
import { ssToggleProps } from './ss-toggle.models';
const argTypes = StoryBook.buildArgTypes(ssToggleProps);
const meta = {
    title: 'components/ss-toggle',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        on: true,
    },
    argTypes,
    render: args => html ` <ss-toggle ?on=${args.on}></ss-toggle> `,
};
export default meta;
export const Off = {
    args: {
        on: false,
    },
};
export const On = {
    args: {
        on: true,
    },
};
//# sourceMappingURL=ss-toggle.stories.js.map