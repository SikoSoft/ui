import type { StoryObj } from '@storybook/web-components';
import './sortable-list';
import { SortableListProps } from './sortable-list.models';
declare const meta: {
    title: string;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {};
    argTypes: Partial<import("@storybook/core/csf").ArgTypes<SortableListProps>> | undefined;
    render: (args: SortableListProps) => import("lit-html").TemplateResult<1>;
};
export default meta;
type Story = StoryObj<SortableListProps>;
export declare const Default: Story;
