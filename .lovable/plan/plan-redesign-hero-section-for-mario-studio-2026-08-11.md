# Plan - Redesign Hero Section for Mario Studio

Redesign the website hero section and navigation to match the composition, layout, typography, and visual style of the reference design provided in the uploaded image.

## Proposed Changes

### Design Tokens & Layout

- Add a new "Bento" layout structure to the hero section.
- Implement strict black and lime green (#c5ff33) color scheme across all redesigned components.
- Use "Space Grotesk" for all typography with high-contrast font weights as seen in the reference.

### Components

- **Redesign Navigation (`src/components/site-header.tsx`)**:
  - Implement a hidden/minimal navigation menu.
  - Create a "MENU" toggle button (hamburger style) as seen in the reference top-right.
  - Add a full-screen or slide-over menu overlay containing the nav links (AGENCE, SERVICES, PROJETS, etc.).
- **Redesign Hero (`src/components/hero-bento.tsx`)**:
  - Create a new component `HeroBento` to replace the existing `HeroSlider` on the landing page.
  - Composition (based on reference):
    - **Left Top**: Branding (" MARIO STUDIO") and a large typographic headline ("DESIGNONS AUJOURD'HUI. MARQUONS DEMAIN.").
    - **Left Bottom**: Subtext, CTA button ("DÉCOUVRIR NOS PROJETS"), and client logos.
    - **Center**: Large portrait image (using a high-quality placeholder or the reference if suitable) with a vertical text label ("STRATÉGIE — CRÉATIVITÉ — PERFORMANCE").
    - **Right Middle/Bottom**: Small bento boxes for "PROJETS LIVRÉS" (100+) and "CRÉONS ENSEMBLE" with icons.
    - **Right Bottom**: Contact info and a circular arrow CTA.
- **Update Landing Page (`src/routes/index.tsx`)**:
  - Replace `HeroSlider` with the new `HeroBento`.

### Styling (`src/styles.css`)

- Define specific utility classes for the bento grid lines (thin borders, specific spacing).
- Ensure high-contrast typography hierarchy (extra bold headlines, small mono-style labels).

## Technical Details

- Use `framer-motion` for the navigation overlay animation and scroll reveals within the bento grid.
- Use `lucide-react` for icons (ArrowUpRight, Menu, etc.).
- The grid will be responsive, collapsing from the multi-column desktop layout to a single-column flow on mobile while maintaining the high-contrast aesthetic.

## Constraints & Considerations

- Maintain all existing SEO and accessibility features.
- Ensure the navigation menu is fully keyboard accessible.
- The reference design is in French; I will use the current English content but match the typographic style (uppercase, bold).