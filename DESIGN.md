# Droidsize Visual System

## Direction

An assured monochrome studio identity built on the expressive Aiolith layout and motion system. Premium comes from contrast, proportion, pacing, and finish—not gradients, glow, or decorative color.

Reference qualities:

- [Unseen Studio](https://mobbin.com/sites/sections/64611226-7921-4e34-9001-83c7e91bd803): restrained dark canvas, sparse navigation, and one dominant typographic idea.
- [Analogue Agency](https://mobbin.com/sites/sections/7063e124-d7b5-4fe4-9797-b318a5be20d1): thin structural rules and capability information without card decoration.
- [basement.studio](https://mobbin.com/sites/sections/46c7d616-63fa-43e1-9d92-a40549a89e16): direct oversized type and monochrome service presentation.
- [Phantom Studios](https://mobbin.com/sites/sections/45201db1-877b-41bc-9f37-c9ec9181933f): grayscale imagery, typographic hierarchy, and compact inverse controls.

These are directional references, not layouts to copy.

## Color

| Token                   | Value     | Role                                    |
| ----------------------- | --------- | --------------------------------------- |
| `--site-canvas`         | `#080808` | Continuous page background              |
| `--site-surface`        | `#101010` | Navigation, footer, and grouped content |
| `--site-surface-raised` | `#171717` | Hover and emphasized dark surfaces      |
| `--site-ink`            | `#F3F3EE` | Primary text and marks                  |
| `--site-muted`          | `#AAA9A4` | Secondary text and labels               |
| `--site-line`           | `#2B2B2B` | Dividers and boundaries                 |
| `--site-inverse`        | `#F3F3EE` | Decisive inverse sections and actions   |
| `--site-inverse-ink`    | `#080808` | Text on inverse surfaces                |

The studio shell is intentionally dark. The Work directory and project stories support both warm-light and near-black editorial themes through `--work-*` tokens. Purple, violet, indigo, chromatic gradients, and colored glow effects are not part of the public website system.

Contrast targets:

- Primary ink on canvas: `17.99:1`
- Muted ink on canvas: `8.51:1`
- Primary ink on dark surface: `17.09:1`
- Muted black label on inverse surface: `4.66:1`

## Typography

- The supplied Droidsize SVG mark and lowercase wordmark are the consistent site signature in the header and footer.
- Existing sans-serif stack remains for interface and long-form copy to avoid an unnecessary typography migration.
- Display headings use solid color, a maximum visual size of `6rem`, and letter spacing no tighter than `-0.04em`.
- Body copy is limited to readable line lengths and uses the muted ink token only where contrast remains AA-compliant.
- Gradient text is not used.

## Composition

- Dark canvas continues between sections; hierarchy comes from spacing and rules rather than alternating tinted backgrounds.
- White inverse surfaces are deliberate: primary actions, the partnership statement, and product support. Work pages may be viewed in their warm-light or near-black editorial theme.
- Capability and standards content uses ruled structures instead of decorative card grids.
- Corners top out at `1rem` for content containers. Pills are reserved for compact controls and tags.
- Project imagery is grayscale at rest and may reveal color on hover where hover is available.

### Work system

The Work directory and project pages form a self-contained editorial world inside the broader dark studio site.

- Light canvas: warm white `#FAFAF8`; ink: `#0A0A0A`; secondary copy: `#62625F`; rules: `#D5D5CF`.
- Dark canvas: `#0A0A0A`; ink: `#F2F0EA`; secondary copy: `#AAA9A4`; rules: `#2A2A2A`.
- Two featured projects establish hierarchy; the full portfolio uses a compact ruled index rather than a repeated card grid.
- Project covers are flat editorial abstractions built from real product workflows, fine linework, restrained project colors, and generous negative space.
- Product titles, relationship, and status remain live HTML and never appear baked into cover artwork.
- Product pages lead with the user-facing problem and product story. Droidsize's role and the technical stack follow.
- Open-source pages add a plainly labelled public-development block without unsupported license or production-readiness badges.
- The navigation and footer follow the selected Work theme so the route feels like one continuous editorial composition.
- Desktop navigation stays compact and centered; mobile uses a full-viewport menu with focus containment, Escape close, and at least 44 px controls.
- The footer is a quiet ruled information system rather than an oversized decorative wordmark panel.

## Motion

- The blocking preloader, global custom cursor, and scroll interception have been removed. Future motion must be progressive enhancement and may not delay access to content.
- Keep entrance motion short and direct; avoid bounce and glow.
- Hover states may shift contrast, image saturation, or arrow position.
- `prefers-reduced-motion` must continue to collapse animation and smooth scrolling.
- The approved future display-title treatment is a letter-wise rise and fade from below. Its implementation and review criteria are recorded in `docs/motion-system-plan.md`.

## Interaction

- Primary actions are off-white with near-black text.
- Focus rings are white on dark surfaces and black on inverse surfaces.
- Interactive targets remain at least 44 CSS pixels in their smallest dimension.
- Navigation stays sparse, compact, and monochrome.

## Accessibility

- Maintain WCAG 2.1 AA contrast.
- Never encode meaning through color alone.
- Preserve semantic headings, landmarks, skip navigation, keyboard focus trapping, and escape-to-close behavior.
- Verify the homepage, company, contact, legal, and product-support routes at desktop and mobile widths after visual changes.
