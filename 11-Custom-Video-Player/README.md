# 11 - Custom Video Player

## About this
- As name suggests a custom video player
- Added fullscreen feature with keypress like if pressed `F` then maximize or minimize like in YouTube
- Made keypress event of `space` like if spacebar pressed then video will be paused or played.
- **Its CSS sucks like WTF to made this simple functionality**

## Things I learned
- How to made hierachy of divs like in this we made a div of `player` in which there are two div `video` & `player__controls` & in that inside we have different controls.
- Learn about **BEM** convention of writing CSS.
- Learn more about range input field that step available in that.
- `cursor: pointer` to change the cursor. Not knew about this before.
- `background: transparent` to make background transparent.
- *A good way to start with writing JavaScript*
    - get elements
    - build out functions
    - hook up event listener
- Learn more about video functions in JavaScript like `video.paused`, `video.currentTime`, `video.duration`, `video.volume`, `video.playbackRate`.
- `parseFloat()` to convert string to float.
- `player.requestFullscreen` & `player.exitFullscreen` to maximize or minimize respectively.
- **This project taught me very much. The End**

## Some important things
- When we update progress bar then we keep check when mousedown then mousemove then mouseup.
- We update progress bar when there is `timeupdate` event means currentTime changes otherwise it will be called in every millisecond thats will crash it.
- When we want to take `keypress` event then we `addEventListener` on `window` not on player or anything bcoz we want global of DOM