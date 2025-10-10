import type { StoryObj } from '@storybook/web-components';
import './tab-container';
import './tab-pane/tab-pane';
import { TabContainerProps } from './tab-container.models';
declare const meta: {
    title: string;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        index: number;
        paneId: string;
    };
    argTypes: Partial<import("@storybook/core/csf").ArgTypes<TabContainerProps>> | undefined;
    render: (args: TabContainerProps) => import("lit-html").TemplateResult<1>;
};
export default meta;
type Story = StoryObj<TabContainerProps>;
export declare const Default: Story;
export declare const SecondTabActive: Story;
export declare const ThirdTabActive: Story;
