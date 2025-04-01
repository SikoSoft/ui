import type { StoryObj } from '@storybook/web-components';
import './ss-carousel';
import { SSCarouselProps } from './ss-carousel.models';
declare const meta: {
    title: string;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        showButtons: true;
        infinite: true;
    };
    argTypes: Partial<import("@storybook/core/csf").ArgTypes<SSCarouselProps>> | undefined;
    render: (args: SSCarouselProps) => import("lit-html").TemplateResult<1>;
};
export default meta;
type Story = StoryObj<SSCarouselProps>;
export declare const ShowButtonsInfinite: Story;
export declare const ShowButtonsFinite: Story;
export declare const NoButtons: Story;
