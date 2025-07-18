# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 (canary) project using the App Router, demonstrating various Next.js features. It uses:
- React 19 RC
- TypeScript with strict mode
- Tailwind CSS with Vercel design tokens
- pnpm as package manager

## Essential Commands

```bash
# Development
pnpm dev          # Start development server (port 3000)

# Building
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run Next.js linter
pnpm prettier     # Format code
pnpm test         # Run prettier:check and lint
```

## High-Level Architecture

The codebase is organized around Next.js App Router demonstrations:

### Key Directories

- `/app/` - Main application with feature demonstrations:
  - Each subdirectory represents a different App Router feature
  - Routes are file-system based
  - Special files: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
  
- `/ui/` - Shared React components used across demos
  - `AddressBar.tsx` - Navigation component
  - `Boundary.tsx` - Visual boundary indicators
  - Various UI primitives

- `/lib/` - Utilities and demo data:
  - `demos.ts` - Configuration for all demo routes
  - Demo-specific utilities for each feature

### Path Alias

Use `#/` prefix for imports from project root:
```typescript
import { demos } from '#/lib/demos';
```

## App Router Patterns

When modifying or adding features:

1. **Server Components by Default** - Components are server-side unless marked with 'use client'
2. **Layouts** - Use `layout.tsx` for shared UI that preserves state
3. **Data Fetching** - Use async/await directly in Server Components
4. **Streaming** - Wrap components in Suspense for progressive rendering
5. **Route Groups** - Use `(folder)` syntax to organize without affecting URLs
6. **Parallel Routes** - Use `@folder` syntax for simultaneous page rendering

## Styling Approach

Multiple styling methods are demonstrated:
- Tailwind CSS (primary)
- CSS Modules (`.module.css` files)
- Global styles in `/styles/globals.css`
- Styled-jsx and other CSS-in-JS solutions in `/app/styling/`

## Development Notes

- Git hooks run prettier on commit via lint-staged
- TypeScript path resolution uses `#/` prefix
- Development server uses turbopack (experimental bundler)
- All demos are listed in `/lib/demos.ts` with metadata