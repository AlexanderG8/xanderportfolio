# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server
npm run dev

# Build for production (runs tsc + vite build)
npm run build

# Lint and auto-fix
npm run lint

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

No test suite is configured in this project.

## Architecture

This is a **single-page React portfolio** built with Vite + TypeScript. There is only one route (`/`) rendering `IndexPage`.

### Entry flow

`main.tsx` → `BrowserRouter` → `Provider` (NextUI) → `App.tsx` → `IndexPage` → `DefaultLayout`

### Key layers

- **`src/pages/index.tsx`** — The single page. Assembles all sections: PersonalData, AboutMe, CardWorkExperience (×4), CardProjects (from JSON), CardDevelopmentSkills (from icon-stack), and ContactMe.
- **`src/layouts/default.tsx`** — Shell with the animated Particles background, Navbar, and footer.
- **`src/components/`** — Presentational components for each portfolio section.
- **`src/UI/Particles.tsx`** — WebGL particle background using the `ogl` library.
- **`src/data/projects.json`** — Project data following the `ProjectData` type. Add new projects here.
- **`src/utils/icon-stack.ts`** — Tech stack grouped into `frontend`, `backend`, `tools`, `learning` categories.
- **`src/config/site.ts`** — Site metadata and social links.
- **`src/types/index.ts`** — Shared types: `ProjectData`, `ProjectImage`, `IconSvgProps`.
- **`src/components/primitives.ts`** — `tailwind-variants` helpers (`title`, `subtitle`) for gradient text styles.
- **`src/hooks/use-theme.ts`** — Custom hook managing dark/light theme via `localStorage` and CSS class on `<html>`.

### UI stack

- **NextUI v2** for most UI components (Button, Card, Navbar, Avatar, etc.) — provider wraps the app in `provider.tsx`
- **Tailwind CSS v3** with `darkMode: "class"` — dark theme driven by `use-theme.ts`
- **MUI icons** (`@mui/icons-material`) used for section heading icons in `index.tsx`
- **Framer Motion** and **GSAP** available for animations

### Path aliases

`@/` maps to `src/` via `vite-tsconfig-paths`. Use `@/components/...`, `@/utils/...`, etc.

### Updating content

- **Work experience / About me**: Edit inline JSX in `src/pages/index.tsx`
- **Projects**: Edit `src/data/projects.json` — images go in `public/assets/images/<project>/`
- **Tech stack**: Edit `src/utils/icon-stack.ts`; add new icons to `src/components/icons.tsx`

### ESLint rules to follow

- Imports must be ordered: `type → builtin → external → internal → parent → sibling → index`, with a blank line between groups
- JSX props must be sorted alphabetically (callbacks last, shorthand first)
- No unused imports (warn)
- `no-console` is a warning
