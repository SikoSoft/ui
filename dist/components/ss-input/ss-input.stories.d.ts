import type { StoryObj } from '@storybook/web-components';
import './ss-input';
import { SSInputProps, InputType } from './ss-input.models';
declare const meta: {
    title: string;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        type: InputType.TEXT;
    };
    argTypes: Partial<import("@storybook/core/csf").ArgTypes<SSInputProps>> | undefined;
    render: (args: SSInputProps) => import("lit-html").TemplateResult<1>;
};
export default meta;
type Story = StoryObj<SSInputProps>;
export declare const Text: Story;
export declare const Number: Story;
export declare const Unsaved: Story;
