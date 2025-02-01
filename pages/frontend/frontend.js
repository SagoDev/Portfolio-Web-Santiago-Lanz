document.addEventListener('DOMContentLoaded', async () => {
    const defaultSection = 'home';

    await loadSection(defaultSection);
});

document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        const section = e.target.dataset.section;
        await loadSection(section);
    });
});

async function loadSection(section) {
    const sectionBox = document.getElementById('section-box');

    // Cargar HTML
    const sectionHTML = await fetch(`./sections/html/${section}.html`);
    const html = await sectionHTML.text();
    sectionBox.innerHTML = html;

    // Cargar CSS
    let sectionCSS = document.querySelector(`link[data-section="section-link"]`);   
    sectionCSS.href = `./sections/css/${section}.style.css`;

    // Cargar JS
    let sectionJS = document.querySelector(`script[data-section="section-script"]`);
    sectionJS.src = `/pages/frontend/sections/js/${section}.js`;

    // Cambiar Clase
    sectionBox.className = section;
}