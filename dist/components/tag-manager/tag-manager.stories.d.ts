import './tag-manager';
import { TagManagerProps } from './tag-manager.models';
declare const meta: {
    title: string;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        value: string;
    };
    argTypes: Partial<import("@storybook/core/csf").ArgTypes<TagManagerProps>> | undefined;
    render: (args: TagManagerProps) => import("lit-html").TemplateResult<1>;
};
export default meta;
