"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryBook = void 0;
class StoryBook {
    static buildArgTypes(props) {
        const argTypes = {};
        Object.keys(props).forEach(propKey => {
            const propName = propKey;
            const propConfig = props[propName];
            argTypes[propName] = {
                description: propConfig.description,
                control: propConfig.control,
                table: {
                    defaultValue: {
                        summary: JSON.stringify(propConfig.default).replace(/^"|"$/g, ''),
                    },
                },
            };
        });
        return argTypes;
    }
}
exports.StoryBook = StoryBook;
//# sourceMappingURL=StoryBook.js.map