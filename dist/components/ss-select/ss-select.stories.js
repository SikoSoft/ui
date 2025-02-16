"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreSelectedOption = void 0;
const lit_1 = require("lit");
const StoryBook_1 = require("../../lib/StoryBook");
require("./ss-select");
const ss_select_models_1 = require("./ss-select.models");
const argTypes = StoryBook_1.StoryBook.buildArgTypes(ss_select_models_1.ssSelectProps);
const meta = {
    title: 'components/ss-select',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ],
    },
    argTypes,
    render: args => (0, lit_1.html) `
    <ss-select .options=${args.options} selected=${args.selected}></ss-select>
  `,
};
exports.default = meta;
exports.PreSelectedOption = {
    args: {
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ],
        selected: 'option-2',
    },
};
//# sourceMappingURL=ss-select.stories.js.map