const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');

function openModal(imgSrc) {
    if (!modal || !modalImg) return;
    modalImg.src = imgSrc;
    modal.classList.remove('hidden');
    void modal.offsetWidth; 
    modal.classList.remove('opacity-0');
    modalImg.classList.replace('scale-95', 'scale-100');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal || !modalImg) return;
    modal.classList.add('opacity-0');
    modalImg.classList.replace('scale-100', 'scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modalImg.src = '';
        document.body.style.overflow = '';
    }, 300);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeModal();
    }
});