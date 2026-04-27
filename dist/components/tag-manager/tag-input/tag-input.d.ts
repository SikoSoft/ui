import { LitElement, PropertyValues } from 'lit';
import '../../ss-input/ss-input';
import '../tag-input/tag-input';
import { TagInputProp, TagInputProps } from './tag-input.models';
export declare class TagInput extends LitElement {
    private suggestionTimeout;
    static styles: import("lit").CSSResult[];
    [TagInputProp.VALUE]: TagInputProps[TagInputProp.VALUE];
    [TagInputProp.ENABLE_SUGGESTIONS]: TagInputProps[TagInputProp.ENABLE_SUGGESTIONS];
    [TagInputProp.MSG_TAG]: TagInputProps[TagInputProp.MSG_TAG];
    [TagInputProp.MSG_ADD]: TagInputProps[TagInputProp.MSG_ADD];
    suggestions: string[];
    lastInputHadResults: boolean;
    lastInput: string;
    get showButton(): boolean;
    firstUpdated(_changedProperties: PropertyValues): Promise<void>;
    private syncSlotItems;
    private handleSubmitted;
    private handleChanged;
    private requestSuggestions;
    private handleSaveClick;
    private save;
    private sendAddedEvent;
    render(): import("lit-html").TemplateResult<1>;
}
