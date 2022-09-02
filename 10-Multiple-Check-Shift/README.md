# 10 - Multiple Check Shift (Hold shift & check checkboxes)

> This was tough & logically diffcult to understand. So, keep a look at it.

## What project is all about - 
This is a common layout you would see in an email client. When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes in-between those two checkboxes should be checked.

## Things I learned -
- Now I become pretty comfortable with CSS ✌
- `:last-child` makes to do something on last child of that element that has that class & we can do like remove border-bottom from there.
- If we want to find that whether shiftKey is pressed or not we can do this by `e.shiftKey` which return `true` or `false`

## Some important things -
- The main thing here wa that we make a variable `inBetween` that keep whether we are in between that.
- We iterate between all checkbox items & initially `inBetween` was false but when it encounter the first one & the conditon that we specified met then it identify the first place to start & keep until we get to `this` then it reverse bool & stop to checking elements.
- It has condition that if it shift key is pressed & checked box is currently checked then we do that.