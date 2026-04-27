# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`@ss/ui` is a Lit 3 web components library. It is consumed by other projects (orbit, etc.) via the GitHub npm registry. The `dist/` folder is committed and published as part of version releases.

## Commands

```bash
npm run build        # tsc + vite build (run before committing dist changes)
npm run build-tsc    # TypeScript compile only (outputs to dist/)
npm run lint         # ESLint --fix on src/
npm run storybook    # Storybook dev server on port 6006
```

There are no tests beyond Storybook stories.

## Architecture

### Component structure

Each component lives in `src/components/[component-name]/` with up to four files:

- **`[name].ts`** — Lit component class, registered via `@customElement()`
- **`[name].models.ts`** — prop enum, props interface, and `PropConfigMap` (drives Storybook controls and default values)
- **`[name].events.ts`** — typed CustomEvent subclasses (only if the component emits events)
- **`[name].stories.ts`** — Storybook stories using `StoryBook.buildArgTypes()` to auto-generate controls from the `PropConfigMap`

Some components contain child components in subdirectories (e.g., `sortable-list/sortable-item/`, `tab-container/tab-pane/`, `tag-manager/tag-input/`). Child components follow the same four-file pattern.

### Props pattern

Props are defined as an enum, interface, and `PropConfigMap` — all three must stay in sync:

```ts
export enum SSButtonProp { TEXT = 'text', DISABLED = 'disabled' }
export interface SSButtonProps { [SSButtonProp.TEXT]: string; [SSButtonProp.DISABLED]: boolean; }
export const ssButtonProps: PropConfigMap<SSButtonProps> = { ... }
```

The component class uses computed property names to declare `@property()` fields: `@property() [SSButtonProp.TEXT]: SSButtonProps[SSButtonProp.TEXT] = '';`

### Theming

`src/styles/theme.ts` exports a `theme` CSS template literal included in every component's `static styles`. It defines CSS custom properties under the `--ssui-*` namespace with defaults. Components expose a two-level fallback: `var(--component-local-var, var(--ssui-global-var))` so consumers can override at the component level or globally.

### Build output

`npm run build` runs `tsc` (outputs `.js`, `.d.ts`, `.js.map` to `dist/`) then `vite build`. The `exports` map in `package.json` exposes granular per-component entry points pointing into `dist/`. Always run `npm run build` before committing when source files change, since `dist/` is checked in and consumed directly by other projects.

### Adding a new component

1. Create `src/components/[name]/` with the four standard files
2. Export it from `src/components/index.ts`
3. Add all `exports` entries to `package.json` (component, events, models variants)
4. Run `npm run build` to populate `dist/`
