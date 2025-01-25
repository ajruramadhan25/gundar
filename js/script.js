document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector('.dropdown-container');

    dropdown.addEventListener('mouseenter', () => {
        const submenu = dropdown.querySelector('.dropdown');
        submenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        const submenu = dropdown.querySelector('.dropdown');
        submenu.style.display = 'none';
    });

    console.log("Website Loaded Successfully!");
});
function showModal(imagePath) {
    // Menampilkan modal dan memuat gambar
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    modalImage.src = imagePath;
    modal.classList.add("show");
}

function closeModal() {
    // Menutup modal
    var modal = document.getElementById("imageModal");
    modal.classList.remove("show");
}

// Select modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.querySelector('.close');

// Select all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Add click event for each image
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = item.src;
    });
});

// Close the modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target !== modalImage) {
        modal.style.display = 'none';
    }
});

// Navigation buttons
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');
const galleryContainer = document.querySelector('.gallery-container');

// Scroll distance
const scrollAmount = 600; // Adjust as needed

scrollLeft.addEventListener('click', () => {
    galleryContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

scrollRight.addEventListener('click', () => {
    galleryContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
