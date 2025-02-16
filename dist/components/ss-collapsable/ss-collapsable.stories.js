"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Closed = exports.Open = void 0;
const lit_1 = require("lit");
const StoryBook_1 = require("../../lib/StoryBook");
require("./ss-collapsable");
const ss_collapsable_models_1 = require("./ss-collapsable.models");
const argTypes = StoryBook_1.StoryBook.buildArgTypes(ss_collapsable_models_1.ssCollapsableProps);
const meta = {
    title: 'components/ss-collapsable',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Heading',
        open: true,
    },
    argTypes,
    render: args => (0, lit_1.html) `
    <ss-collapsable ?open=${args.open} title=${args.title}
      >This is some content that can be toggled into view.</ss-collapsable
    >
  `,
};
exports.default = meta;
exports.Open = {
    args: {
        title: 'Collapsable',
        open: true,
    },
};
exports.Closed = {
    args: {
        title: 'Collapsable',
        open: false,
    },
};
//# sourceMappingURL=ss-collapsable.stories.js.map