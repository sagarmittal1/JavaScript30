# 20 - Speech Detection (Recognition)

> P.S. Just check that microphone is not using it in another browser if not working.

## Things I learned
- webkitSpeechRecognition is currently under development and has few issues with continuous recognition (true)
- Learned in deep of `SpeechRecognition()`
- `recognition.interimResults = true;` make the results come after speaking & not waiting for user to speak fully & then show.
- Learned about `result` & `end` events.

## Some important things
- If the results are not showing then check if you write this `recognition.start()`
- We create a p element first then after the results get final then we create another p tag & make the textContent & this goes on.
- In transcript we make results of it & then check `e.results[0]` to convert it into array & they use map then join to make what we want.