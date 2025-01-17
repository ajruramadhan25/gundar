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
