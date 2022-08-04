# 2- JS-CSS Analog Clock

## Things I learned - 
- `setInterval(setClock, 1000)` can be used to perform a function at a given interval. Here time is in milliseconds.
- `div.number.number$12{$}*12` - this emmet feature make writing tedious code easier.
- In JavasScript we can put script tag in head by using `defer` in it. It will make to load js code parallel.
- In CSS3 we have `linear-gradient` to make the amazing effect. Not knew about this before but quite useful when not want to use background image but still want to give amazing background.
- [lorem picsum](https://picsum.photos/) this site is very useful for random images for website. It also contain width & height property that generates according to it.
- Variables in CSS. They are pretty useful when we want to give some custom styles.
- `::after` & `::before` pseudo elements in CSS allows to insert content on page without needing to add in HTML.

## Some important things - 
- in `tranform-origin` in CSS by default is to 50% which means to origin but we want to move them by bottom so we have to do it. **Pivot it to bottom**
- Here we also want to move minute & hour with what time they are showing otherwise they not look smooth that's why we use ratios to count them.
- `document.querySelector('[data-hour-hand]');` for accessing data-* in javascript use []
- To load JavaScript fuction right after loading then call it like here I do by calling setClock(), then setInterval() function take care things.