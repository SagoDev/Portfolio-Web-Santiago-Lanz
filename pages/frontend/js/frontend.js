const aboutBtns = document.querySelectorAll('.about-btn');

aboutBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const aboutDetails = document.querySelectorAll('.about-detail')

        aboutBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        aboutDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        aboutDetails[idx].classList.add('active');
    });
});