# 1- JavaScript Drum Kit

## Things I learned 
- Use of `<kbd>` HTML tag.
- What are keycodes & how to use them.
- data-* attributes where * can be anything specified. They are like to store custom data on HTML itself
- Use of rem for making some responsive & easier working in CSS. I knew but started using now.
- Use of attributes in giving class property in querySelector


## Some important things -
- Whenever we play to play sound then we add playing class in HTML code then the transition effect happened there.
- After the transition is done we remove by transionend property.
- We use keydown event not keyup event as when the user want to press multiple times then it will not work as stated.
- We can play audio in JavaScript by just using `.play()`.
- We use **window** in JavaScript to capture key that are preseed not document.
- `audio.currentTime = 0` for rewinding sound. Use to prevent delaying sound. this is pretty important.