import { LitElement } from 'lit';
export declare class SSInputAuto extends LitElement {
    static styles: import("lit").CSSResult[];
    input: string;
    maxMatches: number;
    minInput: number;
    suggestions: string[];
    selectedIndex: number;
    get show(): boolean;
    get maxSelectedIndex(): number;
    connectedCallback(): void;
    private _adjustSelectedIndex;
    private _sendSelectedEvent;
    private _sendSubmitEvent;
    render(): import("lit-html").TemplateResult<1>;
}
