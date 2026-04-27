# 🔧 Complete Codebase Refactoring — AI Instructions

> **Purpose:** Pass this prompt to an AI assistant after adding, modifying, or removing features. It will audit the entire codebase and perform a full refactor following the rules below. These rules are **project-agnostic** — they apply regardless of project size, structure, or framework.

---

## 🚀 How to Use This Prompt

1. Paste this entire document into an AI chat.
2. Tell the AI which project folder to refactor, or provide access to the codebase.
3. The AI will scan every file and folder, then apply all rules below systematically.
4. Review the AI's changes before committing.

---

## 📋 Rule 1 — File & Folder Naming Conventions

Scan every file and folder in the project. Rename anything that violates these conventions:

| Type | Convention | Pattern | Examples |
|---|---|---|---|
| React / Vue / Svelte **components** (`.jsx`, `.tsx`, `.vue`, `.svelte`) | **PascalCase** | `MyComponent.jsx` | `HeroSlider.jsx`, `UserCard.tsx` |
| **Component folders** | **PascalCase** | `ComponentName/` | `Navbar/`, `HeroSection/` |
| **Constants / data files** (`.js`, `.ts`) | **camelCase** | `myConstants.js` | `heroSlides.js`, `navLinks.ts` |
| **Custom hooks** (`.js`, `.ts`) | **camelCase** with `use` prefix | `useMyHook.js` | `useInView.js`, `useAuth.ts` |
| **Utility / helper files** (`.js`, `.ts`) | **camelCase** | `myHelper.js` | `formatDate.js`, `cn.ts` |
| **Style files** (`.css`, `.scss`, `.module.css`) | **camelCase** | `myStyle.css` | `typography.css`, `globals.css` |
| **Store / state slices** (`.js`, `.ts`) | **camelCase** | `mySlice.js` | `authSlice.js`, `uiStore.ts` |
| **Page files** (`.jsx`, `.tsx`) | **PascalCase** | `MyPage.jsx` | `HomePage.jsx`, `SettingsPage.tsx` |
| **Image & asset files** | **kebab-case** | `my-image.webp` | `hero-bg.webp`, `footer-logo.svg` |
| **Image / asset folders** | **kebab-case** | `my-folder/` | `icons/`, `hero-media/` |
| **Script files** (build tools, CLI) | **camelCase** | `myScript.mjs` | `optimizeImage.mjs` |
| **Config files** | Follow ecosystem convention | — | `vite.config.js`, `.eslintrc.js` |

### Naming Rules — Additional Details

- **No spaces in file names.** Replace spaces with hyphens for assets or camelCase for code.
- **No `snake_case`** for code files. Convert `my_component.js` → `myComponent.js` or `MyComponent.jsx`.
- **No `SCREAMING_CASE`** for file names (e.g., `MUSIC.png` → `music.png`). Exception: `README.md`, `LICENSE`, environment files.
- **Fix typos** in file names (e.g., `instagrame` → `instagram`, `twiter` → `twitter`, `payement` → `payment`, `cactuse` → `cactus`).
- **No ambiguous abbreviations.** If a file name uses unclear shorthand, rename to something descriptive (e.g., `Explor.js` → `exploreData.js`).
- **Constants file names should describe their data**, not the component that uses them (e.g., `Restaurant_Carousel.js` → `restaurantData.js`).

> **⚠️ CRITICAL:** After renaming any file or folder, update **ALL import paths and references** across the entire codebase. Search globally for the old name and replace every occurrence, including image `src` attributes, dynamic imports, and CSS `url()` references. Any file rename requires a corresponding search-and-replace.

---

## 📋 Rule 2 — Public Assets Organization

Scan the `public/` (or `static/`, `assets/`) directory:

1. **Consolidate loose files.** If image files sit directly inside a parent folder alongside sub-folders (e.g., `images/hat_house.svg` alongside `images/icons/`), move them into the appropriate sub-folder.
2. **Apply kebab-case** to all asset file names and folder names.
3. **Remove duplicate formats.** If both `.png` and `.webp` versions of the same image exist, keep only the `.webp` (unless the `.png` is used as a fallback).
4. **Fix folder name typos** (e.g., `payement/` → `payment/`).
5. **Delete unused assets.** If an image file is not referenced anywhere in `src/`, remove it (confirm with the user first).

---

## 📋 Rule 3 — Code Deduplication

Scan all source files for duplicated code patterns. Apply these extractions:

### A. Nearly Identical Components → Merge with Props

If two or more components share 80%+ of the same JSX structure, hooks, and logic — differing only in minor styling or text:
- **Merge** them into a single component.
- Add a `variant` prop (or similar) to handle the differences.
- **Delete** the duplicate component.
- Update all imports.

### B. Repeated Layout Patterns → Layout Wrapper Component

If multiple pages repeat the same layout shell (e.g., Navbar + Footer + wrapper div):
- Create a shared `PageLayout` component (or equivalent).
- Wrap page content inside it.
- Remove duplicated layout imports from each page.

### C. Repeated Class Name Strings → Helper or Component

If the same complex className string (especially with conditional logic) is copy-pasted across multiple elements:
- Extract it into a helper function, a constant, or a sub-component.
- Example: NavLink active class logic repeated 5+ times → create a `NavItem` component or a `getNavLinkClass()` helper.

### D. Scattered Asset Path Strings → Centralized Constants

If image paths or icon paths are declared as `const` variables inside multiple unrelated components:
- Create a single `imagePaths.js` (or `assetPaths.js`) constants file.
- Export grouped objects (e.g., `ICONS`, `LOGOS`, `SOCIAL_ICONS`, `PAYMENT_ICONS`).
- Import from this single source in all components.

### E. Repeated Hook Combinations → Combined Custom Hook

If the same 2+ hooks are called together in the same pattern across multiple components:
- Create a single custom hook that combines them.
- Example: If `useInView()` + `useUserInteraction()` + the same conditional className logic appears in 3+ components → create `useScrollReveal()`.

### F. Repeated UI Patterns → Reusable Components

If the same UI pattern (e.g., video + image overlay + play button) is rebuilt from scratch in multiple components:
- Extract it into a reusable component (e.g., `VideoCard`, `MediaPlayer`).
- Accept content differences via props or `children`.

### G. Inline `<style>` Tags → External CSS or Utility Classes

If any component contains inline `<style>` tags with raw CSS:
- Move those styles into a proper `.css` file or convert to Tailwind utility classes (if the project uses Tailwind).
- Never inline CSS via `<style>` tags inside React/Vue components.

---

## 📋 Rule 4 — Dead Code & Unused Files

1. **Delete test/scratch files.** Files named `test.js`, `temp.js`, `old_*.js`, or similar that contain old/unused code.
2. **Delete `.gitkeep` files** in directories that already contain other files.
3. **Remove unused imports** — any `import` statement where the imported value is never used.
4. **Remove unnecessary `React` imports** — in React 17+ with the new JSX transform, `import React from 'react'` is not needed unless you explicitly use `React.something`.
5. **Remove unused variables** — any `const`, `let`, or `function` that is declared but never referenced.
6. **Remove unused dependencies.** If `package.json` lists a dependency (e.g., `axios`) that is never imported anywhere in `src/`, flag it for removal (confirm with user).

---

## 📋 Rule 5 — Internationalization (i18n) Audit

If the project uses an i18n library (i18next, react-intl, vue-i18n, etc.):

1. **Find all hardcoded user-facing strings** in components — button labels, headings, paragraphs, placeholders, alt text, error messages.
2. **Move them to the translation JSON/YAML files** under descriptive, nested keys.
3. **Replace hardcoded strings** with translation function calls (`t('key')`, `$t('key')`, etc.).
4. **Ensure all supported languages** have corresponding entries (even if duplicated as placeholders initially).
5. **If translation files are empty**, populate them with the extracted strings.

> Skip this rule if the project has no i18n library installed.

---

## 📋 Rule 6 — Color & Design Token Centralization

If the project uses a CSS framework (Tailwind, etc.) or CSS custom properties:

1. **Find all hardcoded color values** (hex, rgb, hsl) repeated across multiple files.
2. **Define them as theme tokens** — CSS custom properties, Tailwind theme extensions, or a shared constants file.
3. **Replace every hardcoded occurrence** with the token reference.
4. **Name tokens semantically** (e.g., `--color-primary-navy`, `--color-accent-gold`) rather than by value (e.g., not `--color-blue-0B2751`).

> Skip this rule if the project has fewer than 3 files with hardcoded colors.

---

## 📋 Rule 7 — Route & URL Hygiene

1. **All URL paths should be lowercase** (e.g., `/Chambres` → `/chambres`).
2. **Use kebab-case for multi-word routes** (e.g., `/virtual-tour`, not `/virtualTour` or `/Virtual_Tour`).
3. **No special characters** in URLs (no accented characters like `/activités` — use `/activites` instead).
4. **Ensure route paths match page file names logically** (e.g., `RoomsPage.jsx` → `/rooms`).

---

## 📋 Rule 8 — Code Quality Standards

After all structural changes, do a final pass:

- [ ] **Consistent export style** — prefer `export default function Name` for components; named exports for utilities/constants.
- [ ] **Consistent indentation** — 2 spaces (or match project's `.editorconfig` / Prettier config).
- [ ] **No mixed quote styles** — pick single or double quotes consistently (match existing config).
- [ ] **Lazy-load page components** — use `React.lazy()` / dynamic `import()` for route-level code splitting.
- [ ] **Proper `alt` attributes** — every `<img>` must have a meaningful `alt` attribute, not empty or generic.
- [ ] **Unique IDs on interactive elements** — buttons, inputs, forms should have descriptive `id` attributes.
- [ ] **No `console.log` in production code** — remove or gate behind `process.env.NODE_ENV !== 'production'`.

---

## 📋 Rule 9 — Refactoring Process

Follow this exact order to avoid breaking changes:

```
Step 1: Audit — Scan all files and list every violation of the rules above.
Step 2: Plan  — Present a summary of all proposed changes BEFORE making any edits.
Step 3: Rename public assets — Rename files in public/, then search-and-replace all references.
Step 4: Rename src files — Rename constants, hooks, utils, styles, then update imports.
Step 5: Rename components & pages — Rename component files/folders, update imports and routes.
Step 6: Extract shared code — Create layout wrappers, merged components, custom hooks, centralized constants.
Step 7: Clean up — Delete dead code, unused files, empty imports.
Step 8: i18n migration — Move hardcoded strings (if applicable).
Step 9: Color tokens — Centralize repeated color values (if applicable).
Step 10: Verify — Run the dev server and build to confirm nothing is broken.
```

> **⚠️ GOLDEN RULE:** Never change functionality. The app must look and behave identically after refactoring. Only structure, naming, and code organization change.

---

## 📋 Rule 10 — Verification Checklist

After completing all refactoring steps, verify:

```
[ ] Dev server starts without errors (npm run dev / yarn dev)
[ ] Production build succeeds (npm run build / yarn build)
[ ] No broken images (all asset paths resolve correctly)
[ ] No broken routes (all pages load correctly)
[ ] No console errors in the browser
[ ] Lint passes (npm run lint)
[ ] UI looks identical to before the refactor
```
