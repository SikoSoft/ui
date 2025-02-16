"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.On = exports.Off = void 0;
const lit_1 = require("lit");
const StoryBook_1 = require("../../lib/StoryBook");
require("./ss-toggle");
const ss_toggle_models_1 = require("./ss-toggle.models");
const argTypes = StoryBook_1.StoryBook.buildArgTypes(ss_toggle_models_1.ssToggleProps);
const meta = {
    title: 'components/ss-toggle',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        on: true,
    },
    argTypes,
    render: args => (0, lit_1.html) ` <ss-toggle ?on=${args.on}></ss-toggle> `,
};
exports.default = meta;
exports.Off = {
    args: {
        on: false,
    },
};
exports.On = {
    args: {
        on: true,
    },
};
//# sourceMappingURL=ss-toggle.stories.js.map