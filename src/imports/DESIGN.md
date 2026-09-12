---
name: Kinetic Obsidian
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#e4bfb1'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#ab897d'
  outline-variant: '#5b4137'
  surface-tint: '#ffb599'
  primary: '#ffb599'
  on-primary: '#5a1c00'
  primary-container: '#ff5e00'
  on-primary-container: '#531900'
  inverse-primary: '#a63b00'
  secondary: '#70ffba'
  on-secondary: '#003822'
  secondary-container: '#00e598'
  on-secondary-container: '#00613e'
  tertiary: '#ffb692'
  on-tertiary: '#552000'
  tertiary-container: '#ee6d1b'
  on-tertiary-container: '#4e1d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#4dffb1'
  secondary-fixed-dim: '#00e296'
  on-secondary-fixed: '#002112'
  on-secondary-fixed-variant: '#005233'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#793100'
  background: '#111317'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
typography:
  display-numeric:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-numeric-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  metric-label:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.02em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.25rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 3rem
  gutter-mobile: 1rem
  margin-mobile: 1rem
  tap-target-min: 3rem
  tap-target-lg: 3.5rem
---

## Brand & Style

The design system embodies raw kinetic power, premium discipline, and tactical precision. Designed for dedicated athletes, gym-goers, and high-performance individuals, it delivers an immersive, high-contrast dark environment optimized for low-light gym floors and high-glare outdoor tracks. 

The aesthetic blends **Modern Tactile Performance** with **Technical Minimalism**:
- **High Contrast & Visibility:** Deep graphite backgrounds paired with radiant electric orange highlights guarantee instant legibility between intense sets.
- **Ergonomic & Touch-First:** Oversized tap targets (minimum 48px to 56px), prominent stepper controls, and distinct tactile interactive states engineered for sweaty hands and fast logging.
- **Athletic Drive:** Numeric data (weights, reps, rest intervals) is prioritized through sharp, punchy geometry, instilling momentum and focus.
- **Korean Localization Context:** Korean typography is balanced for concise, direct gym directives (e.g., "세트 완료", "휴식 시작", "목표 달성"), maintaining optimal tracking and line heights that eliminate awkward typographic wraps.

## Colors

The palette leverages a deep obsidian canvas to reduce eye fatigue and make vibrant performance accents pop with electric intensity.

### Palette Breakdown
- **Primary (`#FF5E00` / `#FF6F00`):** Electric Kinetic Orange. Used for critical forward actions (Start Workout, Finish Set), active rest timers, and key motivational progress indicators.
- **Secondary / Success (`#00E699`):** Neon Emerald. Reserved for PR (Personal Record) badges, completed sets, checkmarks, and positive metric deltas.
- **Tertiary (`#FF7A29`):** Coral Orange. Used for secondary active states, segmented control selections, and streak counters.
- **Neutral Canvas (`#0D0F12`):** Obsidian Base. The foundational background of the entire application.
- **Surface Elevation (`#161A20`):** Elevated card containers, modal sheets, and navigation bars.
- **Surface Highlight / Border (`#222834`):** Crisp structural dividing lines, unselected state outlines, and inactive metric rings.
- **Typography Primary (`#FFFFFF`):** High-contrast pure white for headings, metric values, and primary labels.
- **Typography Secondary (`#8E9BAE`):** Muted slate gray for secondary captions, inactive tab labels, units (`kg`, `회`, `초`), and timestamps.
- **Destructive (`#FF3B30`):** Crimson red for discarding workouts, deleting routines, or failed sets.

### Application Rules
- Never use `#FF5E00` for massive plain background fills; use it exclusively as an energetic catalyst (CTAs, active progress bars, key accents).
- High visual weight is given to `#00E699` solely to reward completion and success states, maintaining clear semantic separation from the orange action state.

## Typography

The typographic system utilizes a dynamic pairing of **Plus Jakarta Sans** for clear, modern Korean/Latin UI language and **Space Grotesk** for hyper-legible, geometric athletic metrics (weight, reps, sets, rest timers).

### Key Roles
- **Display Numeric (`Space Grotesk`):** Built for the main rest timer and heavy metric readouts. High tabular figures prevent layout jitter during live countdowns.
- **Headlines (`Plus Jakarta Sans`):** Heavyweight (700/800) characters provide punchy visual hierarchy for routine names, workout categories, and modal titles.
- **Metric Labels (`Space Grotesk`):** Paired immediately alongside input steppers for numeric entries (e.g., `100 kg`, `12 reps`).
- **Body & Labels:** Set in clean, neutral weights to ensure complete readability of Korean exercise descriptions (e.g., "바벨 백스쿼트", "견갑골 안정화 유지") without clipping or excessive line tension.

## Layout & Spacing

The layout is built for fluid mobile-first thumb-zone execution, adhering to an **8px base grid rhythm** with 4px micro-adjustments for compact metric badges.

### Screen Architecture
- **Margins & Gutters:** Base margin of `16px` (1rem) on mobile screens up to 480px. For large displays/tablets (481px+), outer gutters widen to `24px` with a maximum content container bound of `520px` to maintain phone-proportioned ergonomics.
- **Ergonomic Safe Zones:** All primary execution triggers (Complete Set, Next Exercise, Rest Skip) are anchored inside the lower 35% of the viewport to accommodate effortless single-hand thumb reach.
- **Spacing Rhythm:**
  - `space-xs (8px)` separates tightly coupled items (metric values and their units).
  - `space-md (16px)` acts as the default interior card padding.
  - `space-xl (24px)` defines section bounds between exercise routines and stats overviews.

## Elevation & Depth

This design system eschews standard diffused gray drop shadows in favor of **Tonal Layering**, **Crisp Low-Contrast Outlines**, and **Phosphor Glow Embers**.

### Depth Hierarchy
1. **Base Layer (Level 0 - `#0D0F12`):** The primary view canvas. Flat, matte, absorbing reflection.
2. **Elevated Cards (Level 1 - `#161A20`):** Workout blocks, exercise cards, and sheet surfaces. Bound with a crisp `1px solid #222834` border.
3. **Interactive Overlays (Level 2 - `#1F242D`):** Active set rows, selected segmented filters, and input step buttons.
4. **Floating HUD / Modals (Level 3 - `rgba(22, 26, 32, 0.94)`):** Sticky bottom control trays with `backdrop-filter: blur(16px)` and a subtle `1px solid rgba(255, 255, 255, 0.08)` top border.

### Neon Glow & Energetic Feedback
- When a set is logged or a timer is running, components use subtle ambient colored glow:
  - Active Orange Glow: `box-shadow: 0 4px 20px rgba(255, 94, 0, 0.28)`
  - Completed Emerald Glow: `box-shadow: 0 4px 16px rgba(0, 230, 153, 0.22)`
- Surfaces remain strictly dark to keep the luminous energy focused on user achievements and immediate workout data.

## Shapes

The design system employs a structured, athletic curved geometry. The scale balances high-tech precision with comfortable handheld ergonomics:

- **Base Radius (`rounded-md` - 8px):** Internal elements, chips, tags, and stepper counters.
- **Card Containers (`rounded-lg` - 16px):** Primary set lists, workout summary blocks, and exercise rows.
- **Hero Containers (`rounded-xl` - 24px):** Bottom sheets, main progress ring wrappers, and routine header banners.
- **Action Controls (`rounded-full` - 9999px):** Quick toggle pills, timer control buttons, floating action buttons (FABs), and set check-off circles.

## Components

### 1. Buttons
- **Primary Action (CTA):** Height `56px`, full width or floating thumb pill. Background `#FF5E00`, label `#FFFFFF` in `Plus Jakarta Sans` Bold 16px. Active press scales to `98%` with high tactile spring animation.
- **Secondary Action:** Height `48px`, background `transparent`, border `1.5px solid #222834`, text `#FFFFFF`. Hover/press fills with `#222834`.
- **Success/Completion Button:** Height `48px` to `56px`, background `#00E699`, text `#0D0F12` font-weight 700. Used for "운동 완료" (Finish Workout).

### 2. Set Row & Exercise Cards
- **Container:** Background `#161A20`, border `1px solid #222834`, radius `16px`, padding `16px`.
- **Row Columns:** 4-column layout: Set Number (`#8E9BAE`), Previous Record (`#8E9BAE`), Target KG/Reps (`#FFFFFF` Bold), Completion Checkbox.
- **Completed State:** Background transitions to `rgba(0, 230, 153, 0.06)`, border tints to `rgba(0, 230, 153, 0.3)`.

### 3. Checkboxes & Check Circles (Tactile Loggers)
- Circular shape, diameter `36px` to `40px` for foolproof fingertip targeting.
- Unchecked: `2px solid #222834`, background `#0D0F12`.
- Checked: Background `#00E699`, border `#00E699`, icon pure `#0D0F12` checkmark with instant haptic pulse.

### 4. Input Steppers & Quick Adjusters
- Numeric input boxes flanked by large `+` and `-` squircle touch buttons (`44px × 44px`, background `#222834`, active background `#FF5E00`).
- Numeric values rendered in `Space Grotesk` 20px Bold with unit suffix (`kg`, `회`) in `#8E9BAE`.

### 5. Chips & Category Filters
- Height `36px`, pill-shaped (`9999px`), padding `8px 16px`.
- Inactive: Background `#161A20`, border `1px solid #222834`, label `#8E9BAE`.
- Active: Background `#FF5E00`, border `#FF5E00`, label `#FFFFFF` font-weight 700.

### 6. Progress Rings & Live Rest Timers
- Circular SVG progress meter with a track of `#222834` (stroke width `8px`) and active indicator in `#FF5E00` with round cap styling.
- Center typography features `display-numeric-mobile` for counting down seconds (`01:30`), with a subtitle label in Korean (`휴식 중`).

### 7. Badges & Micro-Metrics
- **PR Badge (Personal Record):** Background `rgba(0, 230, 153, 0.15)`, text `#00E699`, border `1px solid rgba(0, 230, 153, 0.3)`, radius `6px`, font size `11px` bold.
- **RPE / Difficulty Indicator:** Segmented 1-10 mini-dots scaling from Emerald (`1-6`) to Orange (`7-8`) to Crimson Red (`9-10`).