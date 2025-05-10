import { html } from 'lit';
import { StoryBook } from '../../lib/StoryBook';
import './tag-manager';
import { tagManagerProps } from './tag-manager.models';
const argTypes = StoryBook.buildArgTypes(tagManagerProps);
const meta = {
    title: 'components/tag-manager',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        value: '',
    },
    argTypes,
    render: args => html ` <tag-manager></tag-manager>> `,
};
export default meta;
//# sourceMappingURL=tag-manager.stories.js.map