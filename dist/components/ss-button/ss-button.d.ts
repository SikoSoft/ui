import { LitElement } from 'lit';
import '../components/ss-loader';
export declare class SSButton extends LitElement {
    static styles: import("lit").CSSResult[];
    text: string;
    disabled: boolean;
    loading: boolean;
    positive: boolean;
    negative: boolean;
    class: string;
    get classes(): Record<string, boolean>;
    private _handleClick;
    render(): import("lit-html").TemplateResult<1>;
}
