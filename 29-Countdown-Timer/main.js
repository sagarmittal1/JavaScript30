let countDown;
const displayTime = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const alert = document.querySelector('.alert');

function timer(seconds) {
    clearInterval(countDown);

    const now = Date.now();
    const then = now + (seconds*1000);
    displayTimeLeft(seconds);
    displayEndTime(then);

    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000);
        if(secondsLeft < 0) {
            alert.currentTime = 0;
            alert.play();
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds/60);
    const remainderSeconds = seconds%60;
    // if remaining seconds are less than 10 then add 0 before it.
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = `Time Left: ${display}`;   
    displayTime.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    const adjustHours = hours > 12 ? hours - 12 : hours;
    endTime.textContent = `Be back at ${adjustHours}:${minutes < 10 ? '0':''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const minutes = parseInt(this.minutes.value);
    timer(minutes*60);
    this.reset();
})