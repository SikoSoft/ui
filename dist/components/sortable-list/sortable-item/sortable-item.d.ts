import { LitElement, TemplateResult } from 'lit';
import { SortableItemProp, SortableItemProps } from './sortable-item.models';
export declare class SortableItem extends LitElement {
    static styles: import("lit").CSSResult;
    [SortableItemProp.DISABLED]: SortableItemProps[SortableItemProp.DISABLED];
    id: string;
    dragging: boolean;
    dragStart(event: DragEvent): void;
    dragEnd(event: DragEvent): void;
    get classes(): Record<string, boolean>;
    render(): TemplateResult;
}
