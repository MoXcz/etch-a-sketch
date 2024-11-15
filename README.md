# Etch a Sketch

Redo of the previous attempt at the Odin Project.

This is something similar to an Etch-A-Sketch inside a web browser.

There's an easy way to make this a little more _functional_, and it involves
commenting out a section of `script.js` to not turn the color of a square in the
sketchpad to white after the mouse leaves the square.

This is not done so to conserve the original behavior intended for this project:

```js
// Line 33 - 35
square.addEventListener("mouseout", () => {
  square.style.backgroundColor = "white";
});
```

From [here](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)

