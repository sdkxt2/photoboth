let timerDuration = 3;

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            document.getElementById('video').srcObject = stream;
        })
        .catch(err => {
            alert('Camera access denied. Please enable camera permissions.');
        });
}

function setFrame(color) {
    let video = document.getElementById('video');
    if (color === 'none') {
        video.style.border = '10px solid transparent';
    } else {
        video.style.border = `10px solid ${color}`;
    }
}

function setTimer(seconds) {
    timerDuration = seconds;
    alert(`Timer set to ${seconds} seconds`);
}

function takePicture() {
    alert(`Taking picture in ${timerDuration} seconds...`);
    setTimeout(() => {
        alert('Picture taken!');
        // Here, you can add logic to capture the image from the video feed
    }, timerDuration * 1000);
}