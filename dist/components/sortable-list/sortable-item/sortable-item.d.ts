import { LitElement, TemplateResult } from 'lit';
export declare class SortableItem extends LitElement {
    static styles: import("lit").CSSResult;
    id: string;
    dragging: boolean;
    dragStart(event: DragEvent): void;
    dragEnd(event: DragEvent): void;
    get classes(): Record<string, boolean>;
    render(): TemplateResult;
}
