// Creating speechSynthesisUtterance object
const msg = new SpeechSynthesisUtterance;

let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const stopButton = document.querySelector('#stop');
const speakButton = document.querySelector('#speak');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voices = this.getVoices();
    // console.log(voices);

    const voiceOptions = voices
        // .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
    voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
    // console.log(`changing to ${this.value}`);
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

// this function logic is very cool
function toggle(startOver = true) {
    speechSynthesis.cancel();
    if(startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    // console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

window.speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);

options.forEach(option => option.addEventListener('change', setOption));

speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));