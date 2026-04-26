# Agent Guidelines

## Project

`justui` — desktop app, visual interface for [`just`](https://github.com/casey/just). Discovers justfiles, browses recipes, runs them, keeps history.

## Stack

- Electron + TypeScript + Vite (Electron Forge scaffold).
- Vue 3 in the renderer. `vite.renderer.config.mts` is `.mts` because `@vitejs/plugin-vue@6` is ESM-only.
- xterm.js for the terminal.

## Tooling

- `npm run format:check`
- `npm run :fix`
- `npm run typecheck`

## Visual style

- 1px hairlines, dense, restrained typography, accent used sparingly.
- Dark only. No gradients, no shadows, no glassmorphism.
- Inter for UI, monospace for recipes and CLI.

## Philosophy

- Convention over configuration. Zero settings screen.
- Keyboard-first. Every action a power user takes should be reachable without the mouse.
- Keep this file current. When the stack, layout, visual rules, or any guideline here changes, update it in the same change.
