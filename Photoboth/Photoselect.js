// Image source array (replace with your actual images)
const images = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1507003211169-0fc1a8c2f0e0?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 1'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 2'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 3'
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1539571696357-5a69c57a7277?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 4'
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1499645089130-e7e6fac2e2d9?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 5'
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 6'
    },
    {
        id: 7,
        url: 'https://images.unsplash.com/photo-1530577197743-7adf14294584?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 7'
    },
    {
        id: 8,
        url: 'https://images.unsplash.com/photo-1547212371-45e5dd1275b3?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 8'
    },
    {
        id: 9,
        url: 'https://images.unsplash.com/photo-1593104781264-abc191deef16?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 9'
    },
    {
        id: 10,
        url: 'https://images.unsplash.com/photo-1558190545-2a4e99a0885c?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 10'
    },
    {
        id: 11,
        url: 'https://images.unsplash.com/photo-1545167622-3a6ac756c3c7?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 11'
    },
    {
        id: 12,
        url: 'https://images.unsplash.com/photo-1474978528675-4c8c2d1e8c95?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Portrait 12'
    }
];

const photoGrid = document.getElementById('photoGrid');
const frameGrid = document.getElementById('frameGrid');
const selectButton = document.getElementById('selectButton');

let selectedImages = [];

// Render photo grid
function renderPhotoGrid() {
    photoGrid.innerHTML = images.map(image => `
        <div class="photo-item" data-id="${image.id}">
            <img 
                src="${image.url}" 
                alt="${image.alt}" 
                class="w-full h-48 object-cover rounded-lg"
                onerror="this.src='https://via.placeholder.com/300?text=Image+Error'"
            >
        </div>
    `).join('');

    // Add click event to photos
    document.querySelectorAll('.photo-item').forEach(item => {
        item.addEventListener('click', () => {
            const imageId = parseInt(item.dataset.id);
            
            if (selectedImages.includes(imageId)) {
                selectedImages = selectedImages.filter(id => id !== imageId);
                item.classList.remove('selected');
            } else if (selectedImages.length < 4) {
                selectedImages.push(imageId);
                item.classList.add('selected');
            }
        });
    });
}

// Update frame with selected images
function updateFrame() {
    const selectedPhotos = images.filter(image => 
        selectedImages.includes(image.id)
    );

    const frameContent = selectedPhotos.map(image => `
        <div class="h-32 rounded overflow-hidden">
            <img 
                src="${image.url}" 
                alt="${image.alt}" 
                class="w-full h-full object-cover"
            >
        </div>
    `).concat(
        Array(4 - selectedPhotos.length).fill('<div class="bg-gray-200 h-32 rounded flex items-center justify-center text-gray-500">Select Photos</div>')
    ).join('');

    frameGrid.innerHTML = frameContent;
}

// Select button handler
selectButton.addEventListener('click', () => {
    if (selectedImages.length === 4) {
        updateFrame();
    } else {
        alert('Please select 4 photos');
    }
});

// Initial render
renderPhotoGrid();