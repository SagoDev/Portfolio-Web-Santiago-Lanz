document.addEventListener('DOMContentLoaded', async () => {
    const defaultSection = 'home';

    await loadSection(defaultSection);
});

let links = document.querySelectorAll('header nav a');

links.forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        const section = e.target.dataset.section;
        removeActiveFromElements(links);
        link.classList.add('active');

        await loadSection(section);
    });
});

function removeActiveFromElements(elements) {
    elements.forEach(element => {
        element.classList.remove('active');
    });
}

// Carga Dinámica de Sección
async function loadSection(section) {
    const sectionBox = document.getElementById('section-box');

    // Cargar HTML
    const sectionHTML = await fetch(`./sections/html/${section}.html`);
    const html = await sectionHTML.text();
    sectionBox.innerHTML = html;

    // Cargar CSS
    let sectionCSS = document.querySelector(`link[data-section="section-link"]`);
    if (!sectionCSS) {
        sectionCSS = document.createElement('link');
        sectionCSS.rel = 'stylesheet';
        sectionCSS.dataset.section = 'section-link';
        document.head.appendChild(sectionCSS);
    }
    sectionCSS.href = `./sections/css/${section}.style.css`;

    // Cargar JS
    let sectionJS = document.querySelector(`script[data-section="section-script"]`);
    if (sectionJS) {
        sectionJS.remove();
    }
    sectionJS = document.createElement('script');
    sectionJS.dataset.section = 'section-script';
    sectionJS.src = `./sections/js/${section}.js`;
    document.body.appendChild(sectionJS);

    // Cambiar Clase
    sectionBox.className = section;
}
