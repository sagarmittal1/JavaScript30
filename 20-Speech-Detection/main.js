window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

const words = document.querySelector('.words');
let p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
    const loveScript = transcript.replace(/khushi|anshika|shukla|parmar/gi, '💞❤️💕');
    p.textContent = loveScript;

    if(e.results[0].isFinal) {
        p = document.createElement('p');
        words.append(p);
    }
})

recognition.addEventListener('end', recognition.start);
recognition.start();