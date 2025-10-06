export var SortableListProp;
(function (SortableListProp) {
    SortableListProp["DISABLED"] = "disabled";
})(SortableListProp || (SortableListProp = {}));
export const sortableListProps = {
    [SortableListProp.DISABLED]: {
        default: false,
        control: 'boolean',
        description: 'Whether or not the list is disabled (i.e. items cannot be sorted)',
    },
};
//# sourceMappingURL=sortable-list.models.js.map