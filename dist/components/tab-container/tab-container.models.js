export var TabContainerProp;
(function (TabContainerProp) {
    TabContainerProp["INDEX"] = "index";
    TabContainerProp["PANE_ID"] = "paneId";
})(TabContainerProp || (TabContainerProp = {}));
export const tabContainerProps = {
    [TabContainerProp.INDEX]: {
        default: 0,
        control: 'number',
        description: 'The index of the active tab',
    },
    [TabContainerProp.PANE_ID]: {
        default: '',
        control: 'text',
        description: 'The ID of the active tab pane',
    },
};
//# sourceMappingURL=tab-container.models.js.map