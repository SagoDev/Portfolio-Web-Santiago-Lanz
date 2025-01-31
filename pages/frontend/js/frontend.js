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

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

let index = 0;

const activeProject = () => {
    const imgSlide = document.querySelector('.img-slide');

    imgSlide.style.transform = `translateX(calc(${index * -100}%-${index * 2}rem))`;
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
    }
    else {
        index = 5;
    }

    activeProject();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
    }
    else {
        index = 0;
    }

    activeProject();
});