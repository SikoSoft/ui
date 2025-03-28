import { html } from 'lit';
import { StoryBook } from '../../lib/StoryBook';
import './ss-icon';
import { IconName, ssIconProps } from './ss-icon.models';
const argTypes = StoryBook.buildArgTypes(ssIconProps);
const meta = {
    title: 'components/ss-icon',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        name: IconName.PROFILE,
        size: ssIconProps.size.default,
        color: ssIconProps.color.default,
    },
    argTypes,
    render: args => html `
    <ss-icon name=${args.name} size=${args.size} color=${args.color}></ss-icon>
  `,
};
export default meta;
export const Text = {
    args: {
        name: IconName.PROFILE,
    },
};
//# sourceMappingURL=ss-icon.stories.js.map