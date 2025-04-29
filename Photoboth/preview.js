function downloadImage() {
    alert('Downloading image...');
    // Add logic to download the captured image
}

function shareImage() {
    if (document.getElementById('shareCheck').checked) {
        alert('Sharing image...');
        // Add logic to share the image via social media
    } else {
        alert('Please select the share option first.');
    }
}

function printImage() {
    if (document.getElementById('printCheck').checked) {
        alert('Printing image...');
        // Add logic to print the image
    } else {
        alert('Please select the print option first.');
    }
}

function confirmSelection() {
    if (!document.getElementById('printCheck').checked && !document.getElementById('shareCheck').checked) {
        alert('Please select at least one option (Print or Share) before proceeding.');
    } else {
        window.location.href = 'share.html';
    }
}