"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const lit_1 = require("lit");
const StoryBook_1 = require("../../lib/StoryBook");
require("./ss-input");
const Input_1 = require("../../models/Input");
const ss_input_models_1 = require("./ss-input.models");
const argTypes = StoryBook_1.StoryBook.buildArgTypes(ss_input_models_1.ssInputProps);
const meta = {
    title: 'components/ss-input',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        type: Input_1.InputType.TEXT,
    },
    argTypes,
    render: args => (0, lit_1.html) `
    <ss-input type=${args.type} ?autoComplete=${args.autoComplete}></ss-input>
  `,
};
exports.default = meta;
exports.Text = {
    args: {
        type: Input_1.InputType.TEXT,
    },
};
//# sourceMappingURL=ss-input.stories.js.map