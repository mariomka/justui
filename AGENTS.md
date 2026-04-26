# Agent Guidelines

## Project

`justui` — desktop app, visual interface for [`just`](https://github.com/casey/just). Discovers justfiles, browses recipes, runs them, keeps history.

## Stack

- Electron Forge + Vite + TypeScript.
- Vue 3 renderer.
- Tailwind CSS v4 + shadcn-vue.
- xterm.js terminal.

## Tooling

- Prettier — `npm run format` / `format:check`.
- ESLint flat config — `npm run lint` / `lint:fix`.
- `vue-tsc` — `npm run typecheck`.
- Vitest — `npm test` / `test:watch`.
- shadcn-vue — `npx shadcn-vue@latest add <name>`.

## Workflow

- Husky pre-commit runs lint-staged (eslint + prettier on staged files), `typecheck`, and `test`. No need to run them manually before committing — run them mid-task only when you want fast feedback.

## Conventions

- Co-locate tests with their source.

## Visual style

- 1px hairlines, dense, restrained typography, accent used sparingly.
- Dark only. No gradients, no shadows, no glassmorphism.
- Inter for UI, monospace for recipes and CLI.

## Philosophy

- Convention over configuration. Zero settings screen.
- Keyboard-first. Every action a power user takes should be reachable without the mouse.
- Keep this file current. When the stack, layout, visual rules, or any guideline here changes, update it in the same change.
