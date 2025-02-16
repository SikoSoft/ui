"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negative = exports.Positive = exports.Loading = exports.Disabled = void 0;
const lit_1 = require("lit");
const StoryBook_1 = require("../../lib/StoryBook");
require("./ss-button");
const ss_button_models_1 = require("./ss-button.models");
const argTypes = StoryBook_1.StoryBook.buildArgTypes(ss_button_models_1.ssButtonProps);
const meta = {
    title: 'components/ss-button',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        text: 'Click me',
        disabled: false,
    },
    argTypes,
    render: args => (0, lit_1.html) `
    <ss-button
      text=${args.text}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      ?positive=${args.positive}
      ?negative=${args.negative}
    ></ss-button>
  `,
};
exports.default = meta;
exports.Disabled = {
    args: {
        text: "Can't touch this",
        disabled: true,
    },
};
exports.Loading = {
    args: {
        loading: true,
    },
};
exports.Positive = {
    args: {
        positive: true,
    },
};
exports.Negative = {
    args: {
        negative: true,
    },
};
//# sourceMappingURL=ss-button.stories.js.map