---
name: figma-component-generation
description: Generate presentational React + Tailwind components from Figma MCP (get_metadata, get_design_context, get_screenshot, download_assets). Use whenever the user pastes a Figma URL and asks to implement, generate, or code a component and its variants.
---

# Figma component generation

## Role

Generate small, generic, presentational React + Tailwind components from Figma MCP. Adapt MCP reference code to this repo (Vite + React + TS + Tailwind). Never treat MCP output as paste-ready.

Generate minimum amount of components. Keep things generic. For example creating Button.tsx is good but ButtonShowcase.tsx is bad (as this was only for demo)

## MCP Tools Mapping

| Tool                           | When                           | How                                                                                        |
| ------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------ |
| `get_metadata`                 | Always first after parsing URL | Confirm node type before any generation                                                    |
| `get_design_context`           | After metadata OK              | **Load `/figma-design-to-code` first.** Use returned code as layout/variant reference only |
| `get_screenshot`               | With `get_design_context`      | Visual ground truth for spacing, states, hierarchy                                         |
| `download_assets`              | Icons / vector assets present  | Prefer SVG; store under `src/assets/figma/`                                                |
| `get_variable_defs`            | Tokens unclear                 | Resolve color/spacing/type token names                                                     |
| `get_context_for_code_connect` | Variant axes unclear           | Clarify property names / Code Connect mapping                                              |

**Hard stop:** Figma MCP only. No REST API, no personal access token, no `fetch`/`axios` to `api.figma.com`. If MCP tools are missing → stop → tell user to connect `https://mcp.figma.com/mcp`.

## Rules & Guardrails

### Scope

- Generate **components only**. Node must be `COMPONENT` | `COMPONENT_SET` | `INSTANCE`. Else stop — no full pages.
- UI only: no `useState`, no click handlers, no data fetching.
- Tailwind only. No CSS modules. No inline `style=` except gradients/filters Tailwind cannot express.

### Generic API (mandatory)

- Accept content as props: `iconStart`, `iconEnd`, `titleIcon`, `CTA`, `heading`, `description`, `placeholder`, `children`, `className`.
- Visual axes from Figma (size, filled/outlined, radius) → typed props.
- Content axes (`previous`, `next`, `dropdown`, `play`, which glyph) → **not** booleans. Caller passes `ReactNode` slots.
- Never hardcode labels (`"Button"`, `"Previous"`).
- Never import an SVG catalog into the component. Never switch icons inside the component. Pass assets from gallery or thin `*-icons` helper.
- Never create content→value maps (icon name→SVG, size→className). Layout + visual variants only.

```tsx
// ❌ Hardcoded mappings
const icons = {
  sm: { settings: { light: settingsIcon, className: "size-4" } },
};

// ✅ Generic slots
type ButtonProps = {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  children?: ReactNode;
};
```

### File layout

- Output: `src/components/generated/<kebab-slug>.tsx` → `export function <PascalName>()`.
- Prefer under ~100 lines. Do not paste MCP combinatorial dumps.
- Related files → `src/components/generated/<group-name>/` (e.g. `checkbox/`, not flat root).
- **One React component per file.** No nested components or UI helpers in the public file.
  - Public: compose only.
  - Pieces: sibling files named for their job (`switch-track.tsx` → `SwitchTrack`).
  - Shared class builders that are not components → `src/utils.ts` or sibling `*-styles.ts`.

### Naming

- Component and variable names describe intent, not nicknames.
- Locals: `sumOfPrices` ✓ · `sum` ✗ · `controlSurfaceClass` ✓ · `chrome` ✗
- Exports: `CheckboxControl` / `SwitchTrack` ✓ · `Indicator` ✗

### Tailwind

- Use default scale utilities only (`h-6`, `w-11`, `rounded-2xl`, `gap-3`).
- Never one-off arbitrary classes (`h-[25px]`, `w-[45px]`, `rounded-[16px]`).
- Missing Figma value → add **once** to theme, then use named utility:
  - This repo: `@theme` in `src/index.css` (Tailwind v4)
  - Or `tailwind.config` / `tailwind.config.json` if present
- Generic helpers (`cx`, `cn`, `classNames`, `clamp`) → `src/utils.ts` (create if missing). Never define inside generated component files.

### Design system detection

After analyzing the node, if it looks like tokens/style guide (palettes, type scales, spacing systems, shadows, radii, breakpoints), ask:

> "This node appears to contain design system tokens. Would you like me to extract these as Tailwind configuration?"

**Extract only if confirmed.** Extract reusable systematic tokens only — not component-specific styles, one-offs, or unnamed colors.

| Signal     | Examples                                                                          |
| ---------- | --------------------------------------------------------------------------------- |
| Color      | Swatches; named tokens (primary/neutral); 50–900 scales; semantic (success/error) |
| Typography | Families; size scale (xs–2xl); weights; line-height / tracking                    |
| Spacing    | Numeric or named scales (xs–xl); layout padding                                   |
| Other      | Radius scale; shadows/elevation; breakpoints; animation duration/easing           |

Map → theme: `colors`, `fontFamily`/`fontSize`, `spacing`, `borderRadius`, `boxShadow`, `screens`. Prefer `@theme` in `src/index.css` for this repo; use `tailwind.config.js` only if the project already has one or user asks.

## Step-by-Step Workflow

1. **Parse URL** — Extract `fileKey` + `nodeId` (`node-id=1-2` → `1:2`).
2. **`get_metadata`** — If not `COMPONENT` | `COMPONENT_SET` | `INSTANCE` → stop.
3. **Detect design system** — If token/style-guide signals present → ask confirmation before any token extraction. Do not block component work unless the node is tokens-only.
4. **Fetch design** — Load `/figma-design-to-code`, then call `get_design_context` + `get_screenshot` in parallel when possible.
5. **Assets / clarity** — `download_assets` (SVG) for icons → `src/assets/figma/`. Call `get_variable_defs` / `get_context_for_code_connect` only when tokens or variant axes are unclear.
6. **Plan API** — List visual variant props vs content slots. Reject content booleans and icon catalogs.
7. **Write files** — Small presentational component(s); split siblings as needed; theme tokens for non-default sizes; helpers in `src/utils.ts`.
8. **Verify** — No nested components; no arbitrary Tailwind; no hardcoded content; props are generic; group directory if multi-file.
