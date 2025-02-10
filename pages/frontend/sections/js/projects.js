(function initialize() {
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
})();