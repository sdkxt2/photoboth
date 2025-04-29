
        const landing = document.getElementById('landing');
        const booth = document.getElementById('booth');
        const startBtn = document.getElementById('start');
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const captureBtn = document.getElementById('capture');
        const retakeBtn = document.getElementById('retake');
        const downloadLink = document.getElementById('download');
        const ctx = canvas.getContext('2d');

        // Start Photo Booth
        startBtn.addEventListener('click', () => {
            landing.style.display = 'none';
            booth.classList.remove('hidden');
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => { video.srcObject = stream; })
                .catch(err => console.error("Camera access denied", err));
        });

        // Capture Photo
        captureBtn.addEventListener('click', () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            video.classList.add('hidden');
            canvas.classList.remove('hidden');
            captureBtn.classList.add('hidden');
            retakeBtn.classList.remove('hidden');
            downloadLink.classList.remove('hidden');
            downloadLink.href = canvas.toDataURL();
        });

        // Retake Photo
        retakeBtn.addEventListener('click', () => {
            video.classList.remove('hidden');
            canvas.classList.add('hidden');
            captureBtn.classList.remove('hidden');
            retakeBtn.classList.add('hidden');
            downloadLink.classList.add('hidden');
        });