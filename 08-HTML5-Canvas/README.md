# 8 - Fun with HTML5 Canvas

## Things I learned - 
- HTML `canvas` element that is used to draw graphics on web page
- `ctx = canvas.getContext('2d')` is used to get **CanvasRenderingContext2D** object that has property that can be used to make shapes in canvas.
- we can use `window.innerWidth` & height to get width & height of window & set on elements.
- Learned about hsl() & pretty much liked it as it is easy.
- Whenever you want to know what the property it has just console.log() it ;)

## Some important things - 
- What we do here is that we captured mouse events that when mousedown event happen then we make isDrawing variable `true` & when mouseup then then `false`.
- Rest when mousemove then we call draw function that draw the shape.
- To make a line that is the thing to getContext to make it.
``` javascript
ctx.beginPath();
ctx.moveTo(lastX, lastY);
ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke(); // means to put that thing
```
- We also made some extra things like showing different colors & change the width of the line.