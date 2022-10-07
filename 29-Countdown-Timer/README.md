# 29 - Countdown Timer

> Also added sound alert when the time get's up & made it responsive.

## Things I learned
- `Date.now()` method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.**Useful for making countdown timer**
- In `setInterval()` if we use it to countdown then sometimes it will stop on browser & iPhone for performance issues. So call it in a varibale instead of calling on self.
- Make the structure & identify for which to make function.
- `clearInterval()` to stop the interval.
- Also learned about `new Date(timestamp)` that we can pass timestamp to Date object. 
- In this I learn how to deal with JavaScript parts with how to make functions & used them accordingly.

## Some important things
- If remaining seconds or minutes are less than 10 then add 0 before it. `remainderSeconds < 10 ? '0' : ''`