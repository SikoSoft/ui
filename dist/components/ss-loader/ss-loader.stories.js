"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Padded = void 0;
const lit_1 = require("lit");
const StoryBook_1 = require("../../lib/StoryBook");
require("./ss-loader");
const ss_loader_models_1 = require("./ss-loader.models");
const argTypes = StoryBook_1.StoryBook.buildArgTypes(ss_loader_models_1.ssLoaderProps);
const meta = {
    title: 'components/ss-loader',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        padded: false,
    },
    argTypes,
    render: args => (0, lit_1.html) ` <ss-loader ?padded=${args.padded}></ss-loader> `,
};
exports.default = meta;
exports.Padded = {
    args: {
        padded: false,
    },
};
//# sourceMappingURL=ss-loader.stories.js.map