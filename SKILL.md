---
name: design-system-sanskriti-boutique
description: >
  Apply the Sanskriti Boutique design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for e-commerce interfaces.
---

# Sanskriti Boutique — Design System Skill

## When to Use

- Building new UI components for Sanskriti Boutique.
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for e-commerce pages.
- Checking designs against the extracted token set.

## Context

- **Product:** Sanskriti Boutique — https://cloth-shop-cyan-iota.vercel.app/
- **Surface:** e-commerce
- **Audience:** Consumers and shoppers
- **Character:** Product-focused shopping experience with a rich, diverse color palette and 3 typefaces.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| color-1 | `#000000` | Text Primary |
| color-2 | `#D4AF37` | Accent |
| color-3 | `#E5E7EB` | Border |
| color-4 | `#FFFFFF` | Text Light |

### Typography

**Font stack:** Great Vibes, Playfair Display, Lora

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 9px | Captions, metadata |
| text-sm | 12px | Labels, secondary text |
| text-base | 16px | Body text (default) |
| text-lg | 30px | Subheadings, emphasis |
| text-xl | 36px | Section headings |
| text-2xl | 60px | Section headings |

**Weight scale:** 300 · 400 · 700
**Line heights:** 40px · 60px · 36px · 16px · 13.5px · 24px

### Spacing

**Base unit:** 8px

`space-1: 4px` · `space-2: 6px` · `space-3: 8px` · `space-4: 10px` · `space-5: 12px` · `space-6: 14px` · `space-7: 16px` · `space-8: 20px` · `space-9: 24px` · `space-10: 32px` · `space-11: 48px` · `space-12: 64px` · `space-13: 80px` · `space-14: 96px` · `space-15: 120px` · `space-16: 592px`

### Shapes

**Border radius:** `radius-full: 9999px`

### Elevation

- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-fast:** `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-fast:** `transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-base:** `0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-slow:** `0.5s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-slow:** `color 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), fill 0.5s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.5s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-slow:** `transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-slow:** `transform 1s cubic-bezier(0.4, 0, 0.2, 1)`

## Component Inventory

- **Buttons:** 35 detected
- **Links:** 18 detected
- **Inputs:** 5 detected
- **Navigation:** 1 elements
- **Lists:** 2 detected
- **Forms:** 1 detected
- **Images:** 79 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 8px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (9999px).
- Do not stack more than one primary CTA per viewport.
- Do not use red for non-error UI — reserve it for destructive actions and warnings.
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Persuasive, benefit-driven, trustworthy. Active voice, urgency without pressure.

## Authoring Workflow

When creating or documenting a component for this system:

1. State intent — one sentence on purpose.
2. Map tokens — list every token the component uses.
3. Define anatomy — named parts with token assignments.
4. Specify states — default, hover, focus-visible, active, disabled, loading, error, empty.
5. Describe interactions — keyboard, pointer, touch, edge cases.
6. Add a11y criteria — testable pass/fail checks.
7. List anti-patterns — concrete misuse examples.
8. Close with the Definition of Done checklist.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behavior
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle edge cases: empty, overflow, truncation, max content.
- Include keyboard navigation behavior.
- Document ARIA roles and labels.

## Definition of Done

- Default state renders (smoke test).
- All states visually verified.
- Zero hardcoded visual values — tokens only.
- Keyboard navigation works without pointer.
- No critical a11y violations.
- Tested at min and max breakpoint.
- At least one anti-pattern documented.
- Purpose, usage, and limitations documented.
