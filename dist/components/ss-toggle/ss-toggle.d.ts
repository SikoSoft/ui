import { LitElement } from 'lit';
export declare class SSToggle extends LitElement {
    static styles: import("lit").CSSResult;
    on: boolean;
    get classes(): {
        toggle: boolean;
        on: boolean;
    };
    private _handleClick;
    render(): import("lit-html").TemplateResult<1>;
}
