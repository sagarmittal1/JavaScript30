const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const radioButtons = document.querySelectorAll('input[type="radio"]');

function getVideo() {    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
        video.play();
        console.log(stream)
    }).catch(err => {
        console.error('Please allow the camera to start using it!!');
    })
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0,0, width, height);

        // pixels = redEffect(pixels);

        radioButtons.forEach(radioButton => {
            if(radioButton.checked) {
                if(radioButton.id === 'rgbSplit') {
                    pixels = rgbSplit(pixels);
                }else{
                    pixels = redEffect(pixels);
                }
            }
        })

        // pixels = rgbSplit(pixels);
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    // taking the data from canvas
    const data = canvas.toDataURL('image/jpeg');

    // creating a link to add it to strip
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome buddy"/>`;
    // link.style.transform = `scaleX(-1)`;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);

