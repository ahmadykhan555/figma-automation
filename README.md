# Figma Component Automation

A demo project showcasing automated React component generation from Figma designs using the [Figma MCP server](https://mcp.figma.com/mcp). This approach accelerates UI development by eliminating the tedious HTML/CSS work, allowing developers to focus on business logic instead of pixel-perfect styling.

## What This Demo Shows

This project demonstrates how to:

- **Generate components from Figma URLs** — Paste a Figma component URL and get production-ready React + TypeScript + Tailwind components
- **Extract design tokens** — Automatically convert Figma design systems into Tailwind configuration
- **Handle assets efficiently** — Download and optimize SVG icons, images, and other assets
- **Maintain design consistency** — Generated components follow established patterns and naming conventions

## How It Works

The automation is powered by a [Cursor AI skill](/.cursor/skills/figma-component-generation.mdc) that:

1. **Parses Figma URLs** to extract file keys and node IDs
2. **Fetches design context** using Figma MCP tools (`get_design_context`, `get_screenshot`, `download_assets`)
3. **Generates React components** with proper TypeScript interfaces and Tailwind classes
4. **Organizes output** into structured directories with consistent naming

### Generated Components

The project includes several generated components demonstrating different UI patterns:

- **Navigation** — `TopBar`, `Navbar`, `ShopHeader` with responsive layouts
- **Interactive elements** — `Button` with variants (filled/outlined, sizes, tones)
- **Content blocks** — `Card`, `FeatureCard` with flexible media and text slots  
- **Layout helpers** — `Hero` section with background, content, and controls

All components follow a consistent API pattern with:
- Generic prop names (`heading`, `description`, `iconStart`, `children`)
- Visual variant props (`tone`, `size`, `variant`)
- Content slots instead of hardcoded text
- Proper TypeScript interfaces

## Key Benefits

- **Speed** — Generate complex components in seconds instead of hours
- **Consistency** — All components follow the same patterns and conventions  
- **Maintainability** — Clean, readable code with proper abstractions
- **Designer-Developer Sync** — Components stay in sync with Figma designs
- **Focus** — Developers spend time on logic, not layout

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Lint code
npm run lint
```

## Architecture

- **Vite** — Fast build tool and dev server
- **React 18** — Component framework with TypeScript
- **Tailwind CSS v4** — Utility-first styling with custom design tokens
- **ESLint** — Code quality and consistency (flat config)

## Figma Integration

The project uses the Figma MCP server to communicate directly with Figma's API. Generated components include:

- `@generated from Figma node <nodeId>` annotations for traceability
- Extracted design tokens as Tailwind CSS variables
- Optimized SVG icons as individual React components
- Responsive layouts matching Figma designs

## Skills and Automation

See [`.cursor/skills/figma-component-generation.mdc`](.cursor/skills/figma-component-generation.mdc) for the complete automation workflow including:

- MCP tool usage patterns
- Component API design rules  
- File organization conventions
- Asset optimization strategies
- Design token extraction logic

This approach transforms UI development from a manual, time-intensive process into an automated, scalable workflow that maintains design fidelity while producing developer-friendly code.