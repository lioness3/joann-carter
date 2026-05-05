# Comment Style Rule

When writing or editing any code comments in this project:

- Write all comments in **lowercase**
- Use **UPPERCASE** for keywords: component names, function names, CSS properties, variables, and key concepts central to what the code does
- Keep comments **direct and short** — 2 lines maximum
- Never capitalize the first letter just because it starts a sentence

## Examples

**Correct:**
```js
// RESIZEOBSERVER checks if MULTIPLE container overflows its visible width
// attaches to SCROLLREF on every IMAGE change
```

```css
/* OVERFLOW-X enables horizontal scroll on MULTIPLE */
```

**Incorrect:**
```js
// This effect sets up a ResizeObserver that watches the scroll container and
// updates the isScrollable state whenever the container resizes, so we know
// whether to show the scroll indicator to the user.
```

Apply this style to all inline comments, block comments, and JSDoc content.
