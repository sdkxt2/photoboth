let cameraStream = null;
let photoStrip = [];

window.addEventListener('load', async () => {
    const video = document.getElementById('video');
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = cameraStream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
        alert('Could not access the camera. Please check your permissions and try again.');
    }
});

document.getElementById('take-picture').addEventListener('click', () => {
    const timerValue = document.getElementById('timer').value;
    if (timerValue > 0) {
        showProgress(timerValue);
        setTimeout(takePicture, timerValue * 1000);
    } else {
        takePicture();
    }
});

function takePicture() {
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgUrl = canvas.toDataURL('image/png');

    if (photoStrip.length >= 4) {
        window.location.href = "Preview.html"; // redirect to new page
    } else {
        photoStrip.push(imgUrl);
        updatePhotoStrip();
    }
    hideProgress();
}

function updatePhotoStrip() {
    const photoStripDiv = document.getElementById('photo-strip');
    photoStripDiv.innerHTML = '';
    photoStrip.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        photoStripDiv.appendChild(img);
    });
}

function showProgress(timeInSeconds) {
    const progressDiv = document.getElementById('progress');
    progressDiv.style.width = '0%';
    progressDiv.style.display = 'block';
    let startTime = Date.now();
    let interval = setInterval(() => {
        let elapsedTime = (Date.now() - startTime) / 1000;
        let progressPercent = (elapsedTime / timeInSeconds) * 100;
        progressDiv.style.width = progressPercent + '%';
        if (elapsedTime >= timeInSeconds) {
            clearInterval(interval);
        }
    }, 100);
}

function hideProgress() {
    const progressDiv = document.getElementById('progress');
    progressDiv.style.display = 'none';
}