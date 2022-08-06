# 3- CSS Variables

## Things I learned - 
- There are various input field available in HTML like range, color, date, time with common ones like text, password, checkbox etc.
- By declaring variables in root of CSS, we can access them by `document.documentElement` in JavaScript.
- When we use ` document.querySelectorAll('.controls input');` in that we get NodeList which is not array & contain only useful ones prototypes like forEach etc.
- If we want to blur thing in CSS then we can simply use `filter: blur()`.
- See why we are using CSS variables when they are in Sass. Sass variables are defined in the Sass file, but once compiled to CSS the values cannot be updated. CSS3 variables can have their values updated through the use of JavaScript. 


## Some important things - 
- Give `min` & `max` with `value` in input field of range & color. With that they can show default things. Not knew abot that before.
- in eventListener we have to take *change* & *mouseover* events.
- `this.dataset.sizing` give the `data-*` attributes present in that tag.
- We have to add values with suffix like *px* or none because the value that we got from input are just values & to change that in variables we need to add suffix to it.

> Also made custom scrollbar for the website.
