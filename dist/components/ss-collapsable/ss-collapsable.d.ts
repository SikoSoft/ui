import { LitElement } from 'lit';
export declare class SSCollapsable extends LitElement {
    static styles: import("lit").CSSResult[];
    title: string;
    open: boolean;
    get classes(): {
        box: boolean;
        collapsable: boolean;
        open: boolean;
    };
    private _handleIconClick;
    private _toggle;
    render(): import("lit-html").TemplateResult<1>;
}
