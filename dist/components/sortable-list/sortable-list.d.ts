import { LitElement, TemplateResult } from 'lit';
import { SortableItem } from './sortable-item/sortable-item';
import './sortable-item/sortable-item';
import { SortableListProp, SortableListProps } from './sortable-list.models';
export declare class SortableList extends LitElement {
    private draggedElement;
    private lastSortedState;
    [SortableListProp.DISABLED]: SortableListProps[SortableListProp.DISABLED];
    private isDragging;
    static styles: import("lit").CSSResult;
    dragStart(event: DragEvent): void;
    dragEnd(event: DragEvent): void;
    dragOver(event: DragEvent): void;
    isDraggableItem(element: HTMLElement | null): element is SortableItem;
    drop(event: DragEvent): void;
    getSortedIds(): string[];
    isBefore(el1: SortableItem, el2: SortableItem): boolean;
    get classes(): Record<string, boolean>;
    render(): TemplateResult;
}
