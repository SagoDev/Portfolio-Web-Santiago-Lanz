const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail')

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});


const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');



nextBtn.addEventListener('click', () => {
    let firstCarousel = new bootstrap.Carousel(document.getElementById('first-carousel'));
    let secondCarousel = new bootstrap.Carousel(document.getElementById('second-carousel'));

    firstCarousel.next();
    secondCarousel.next();
});

prevBtn.addEventListener('click', () => {
    let firstCarousel = new bootstrap.Carousel(document.getElementById('first-carousel'));
    let secondCarousel = new bootstrap.Carousel(document.getElementById('second-carousel'));

    firstCarousel.prev();
    secondCarousel.prev();
});