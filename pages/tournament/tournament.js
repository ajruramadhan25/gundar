const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
    const noContent = document.getElementById('no-content');

    // Fungsi untuk menerapkan filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas aktif dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Ambil filter yang dipilih
            const filter = button.getAttribute('data-filter');
            let visibleCards = 0;

            // Tampilkan/ sembunyikan kartu sesuai filter
            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-type') === filter) {
                    card.style.display = 'block';
                    visibleCards++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Tampilkan pesan "No Content" jika tidak ada kartu yang sesuai
            if (visibleCards === 0) {
                noContent.style.display = 'block';
            } else {
                noContent.style.display = 'none';
            }
        });
    });

    // Default: Tampilkan semua
    filterButtons[0].click();