# Droidsize motion system plan

Last reviewed: 10 August 2026

Status: deliberately deferred until the static Work directory, project pages, content, links, images, metadata, and responsive layouts are approved

The legacy blocking preloader, global custom cursor, and scroll-interception layer were removed during the production-readiness pass. They must not be reinstated as prerequisites for viewing or navigating the site.

## Intent

Motion should make Droidsize feel precise, attentive, and quietly alive. It is not a layer of decoration and it should never delay access to the work. Every effect must clarify entry, hierarchy, continuity, or response.

The static experience remains the source of truth. Headings, project content, links, and images must render visibly and remain usable when JavaScript is unavailable or reduced motion is requested.

## Approved title behaviour

The primary display title should reveal letter by letter from below.

- Preserve the complete heading as one accessible name.
- Wrap only the visual grapheme spans in `aria-hidden="true"`; do not make a screen reader announce individual letters.
- Clip each line or grapheme container so the motion appears to rise through the baseline.
- Animate only `opacity` and `transform`.
- Start around `translateY(0.7em)` and `opacity: 0`; finish at the natural position and full opacity.
- Use an 18–28 ms character stagger and a 480–650 ms duration.
- Prefer a direct ease-out curve such as quint or expo. Do not use bounce, spring overshoot, or elastic easing.
- A very small blur, at most 2 px, may be tested on large display type; remove it if glyph rendering becomes soft.
- Spaces should preserve layout but should not create an awkward visible pause.
- Under `prefers-reduced-motion: reduce`, show the complete title immediately with no transform.

## Reference research

- [Aceternity Text Generate Effect](https://ui.aceternity.com/components/text-generate-effect) — useful precedent for paced text disclosure.
- [Aceternity Text Animation Blur Fade In](https://ui.aceternity.com/blocks/text-animations/text-animation-blur-fade-in) — useful implementation reference for split text, offset, opacity, and restrained stagger.
- [Aceternity component explorer](https://ui.aceternity.com/explore) — reference library for interaction patterns, not a visual style to copy.
- [Watermelon UI](https://watermelon.sh/) — design-system reference; no specific public text-animation component was identified during this pass.

## Skills and implementation references found

These were researched but not installed. Existing local motion-review skills already cover much of the same ground.

| Reference                                                                                                                    | Use                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`nexu-io/open-design@emilkowalski-motion`](https://skills.sh/nexu-io/open-design/emilkowalski-motion)                       | Motion taste, timing, and interaction restraint |
| [`dylantarre/animation-principles@micro-interactions`](https://skills.sh/dylantarre/animation-principles/micro-interactions) | State-change and feedback patterns              |
| [`pixel-point/animate-text@animate-text`](https://skills.sh/pixel-point/animate-text/animate-text)                           | Text splitting and reveal patterns              |
| [`mindrally/skills@gsap`](https://skills.sh/mindrally/skills/gsap)                                                           | GSAP implementation guidance                    |
| [`mengto/skills@staggered-word-reveal`](https://skills.sh/mengto/skills/staggered-word-reveal)                               | Staggered editorial title treatment             |

The installed `emil-design-eng`, `review-animations`, and Impeccable animation-review flow should be used before adding another overlapping skill.

## Motion vocabulary by surface

### Global navigation

- Keep the existing menu reveal, focus trap, and Escape behaviour.
- Reduce the current menu motion to direct translation and opacity if it competes with the page.
- Logo and menu control respond through contrast or a 1–2 px translation, not scale pulses.

### Work directory

- Title: approved letter-wise rise and fade.
- Featured covers: one restrained image-settle animation on first entry; no repeated scroll theatrics.
- Project-index rows: arrow translates 4 px and thumbnail scales no more than 1.02 on hover-capable devices.
- Do not animate every row into view. The index should feel immediate and browsable.

### Project pages

- Hero title: same letter-wise system with slightly faster stagger on long titles.
- Cover: subtle reveal through a vertical clip or opacity; no parallax until crop behaviour is proven on mobile.
- Narrative rules may draw from left to right as sections enter, but the copy must already be visible.
- Technology icons should not bounce, rotate, or animate independently.
- Next-project arrow may translate horizontally on hover.

### Buttons and links

- Response begins within 100 ms.
- Use underline growth, contrast shift, or 2–4 px arrow movement.
- Avoid pill expansion, liquid blobs, magnetic movement on touch, and hover effects that move the hit target.

## Performance and accessibility constraints

- Keep the Work directory and detail routes as server-rendered static pages.
- Add the smallest possible client boundary around split-text behaviour.
- Prefer CSS for simple hover/focus transitions and GSAP only for coordinated sequences that need timeline control.
- Do not animate layout properties such as width, height, top, or left.
- Set `will-change` only while an animation is active.
- Test at 60 Hz mobile, keyboard-only, 200% zoom, reduced motion, and with JavaScript disabled.
- The page must not flash hidden text before hydration.

## Acceptance criteria for the later motion pass

1. The title reads correctly in the accessibility tree and in copy/paste.
2. JavaScript-disabled content is complete and visible.
3. Reduced-motion mode removes all non-essential entrance movement.
4. No animation creates horizontal overflow or changes the final layout.
5. Mobile input remains responsive and does not wait for animation completion.
6. Browser performance shows no long main-thread task caused by text splitting or scroll listeners.
7. Animation review passes without bounce, excessive stagger, repeated viewport reveals, or generic template motion.
