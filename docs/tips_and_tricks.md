# Tips & Tricks

### General

```tsx
// alternative layout to "max-w-xl mx-auto"
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center" />;

// base gets overridden as we go further right
base < components < utilities;
```

For gradient-text:

```css
bg-clip-text text-transparent <gradients>
```

### Experimental CSS Carousels

```css
._carousel {
  anchor-name: --carousel-01;
}

/* scroll buttons */
._carousel::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: white;
  opacity: 0.7;
  cursor: pointer;

  position: absolute;
  position-anchor: --carousel-01;
  outline: none;
}

._carousel::scroll-button(*):hover,
._carousel::scroll-button(*):focus {
  opacity: 1;
}

._carousel::scroll-button(*):active {
  translate: 1px 1px;
}

._carousel::scroll-button(*):disabled {
  opacity: 0.2;
  cursor: unset;
}

._carousel::scroll-button(left) {
  content: url("public/payload-cms/svgs/arrow-left.svg");
  left: calc(var(--gutter-h) + 10px);
  /* bottom: 0; */
}

._carousel::scroll-button(right) {
  content: url("public/payload-cms/svgs/arrow-right.svg");
  left: calc(var(--gutter-h) + 60px);
  /* bottom: 0; */
}
```

<br />

### Disabling "unexpected any" lint errors in a project

For specific lines

```ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
```

For entire-pages

```ts
/* eslint-disable @typescript-eslint/no-explicit-any */
```

For a given function: disable right before function declaration and able right after.

```ts
/* eslint-disable @typescript-eslint/no-explicit-any */
function ErrorFunction() {}
/* eslint-enable @typescript-eslint/no-explicit-any */
```

Disable globally

```ts
// .eslintrc.cjs or .eslint.config.js

rules:{
  "@typescript-eslint/no-explicit-any" : "off"
}

```
