import { LitElement, TemplateResult } from 'lit';
import { SortableItem } from './sortable-item/sortable-item';
import './sortable-item/sortable-item';
export declare class SortableList extends LitElement {
    private draggedElement;
    private lastSortedState;
    private isDragging;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    dragStart(event: DragEvent): void;
    dragEnd(event: DragEvent): void;
    dragOver(event: DragEvent): void;
    isDraggableItem(element: HTMLElement | null): element is SortableItem;
    drop(event: DragEvent): void;
    getSortedIds(): string[];
    isBefore(el1: SortableItem, el2: SortableItem): boolean;
    mouseOver(event: MouseEvent): void;
    render(): TemplateResult;
}
