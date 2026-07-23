document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target || !target.classList.contains('project-detail')) return;

    target.classList.add('project-highlight');
    setTimeout(() => {
        target.classList.remove('project-highlight');
    }, 1600);

    const activeChip = document.querySelector(`.quicknav-link[href="${hash}"]`);
    if (activeChip) {
        activeChip.classList.add('is-active');
    }
});