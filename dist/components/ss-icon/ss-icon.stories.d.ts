import type { StoryObj } from '@storybook/web-components';
import './ss-icon';
import { IconName, SSIconProps } from './ss-icon.models';
declare const meta: {
    title: string;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        name: IconName;
        size: number;
        color: string;
    };
    argTypes: Partial<import("@storybook/csf").ArgTypes<SSIconProps>> | undefined;
    render: (args: SSIconProps) => import("lit-html").TemplateResult<1>;
};
export default meta;
type Story = StoryObj<SSIconProps>;
export declare const Text: Story;
