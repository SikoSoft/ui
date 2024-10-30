import { LitElement } from 'lit';
export interface SelectOption {
    value: string;
    label: string;
}
export declare class SSSelect extends LitElement {
    static styles: import("lit").CSSResult[];
    options: SelectOption[];
    selected: string;
    selectNode: HTMLSelectElement;
    get value(): string;
    private _handleSelectChanged;
    render(): import("lit-html").TemplateResult<1>;
}
