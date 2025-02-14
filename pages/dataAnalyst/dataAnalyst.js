let links = document.querySelectorAll('header nav a');

links.forEach((link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();

        removeActive(links);
        link.classList.add('active');
    });
}));

function removeActive(elements) {
    elements.forEach(element => {
        element.classList.remove('active');
    });
}