export var SortableItemProp;
(function (SortableItemProp) {
    SortableItemProp["DISABLED"] = "disabled";
})(SortableItemProp || (SortableItemProp = {}));
export const sortableItemProps = {
    [SortableItemProp.DISABLED]: {
        default: false,
        control: 'boolean',
        description: 'Whether or not the item is disabled (i.e. cannot be sorted)',
    },
};
//# sourceMappingURL=sortable-item.models.js.map