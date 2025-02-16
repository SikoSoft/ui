import { LitElement, PropertyValueMap } from 'lit';
import '../ss-input-auto/ss-input-auto';
import { SSInputProp, SSInputProps } from './ss-input.models';
export declare class SSInput extends LitElement {
    private clickFocusHandler;
    static styles: import("lit").CSSResult[];
    [SSInputProp.TYPE]: SSInputProps[SSInputProp.TYPE];
    [SSInputProp.VALUE]: SSInputProps[SSInputProp.VALUE];
    [SSInputProp.AUTO_COMPLETE]: SSInputProps[SSInputProp.AUTO_COMPLETE];
    [SSInputProp.PLACEHOLDER]: SSInputProps[SSInputProp.PLACEHOLDER];
    [SSInputProp.SUGGESTIONS]: SSInputProps[SSInputProp.SUGGESTIONS];
    _value: string;
    inputField: HTMLInputElement;
    autoCompleteNode: HTMLElement;
    container: HTMLSpanElement;
    hasFocus: boolean;
    autoDismissed: boolean;
    get showAutoComplete(): boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    focus(): void;
    clear(): void;
    private _handleChange;
    private _handleKeyDown;
    private _sendSuggestionUpEvent;
    private _sendSuggestionDownEvent;
    private _sendSuggestionSelectEvent;
    private _sendSubmittedEvent;
    private _handleSubmit;
    private _handleInput;
    private _handleFocus;
    private _handleBlur;
    private _suggestionSelectHandler;
    render(): import("lit-html").TemplateResult<1>;
}
