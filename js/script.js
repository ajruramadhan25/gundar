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
