let links = document.querySelectorAll('header nav a');
let slidebarOptions = document.querySelectorAll('.ad-about .personal-dashboard .dashboard-slidebar .slidebar-body .slidebar-options button');

links.forEach((link => {
    link.addEventListener('click', async (e) => {

        removeActive(links);
        link.classList.add('active');
    });
}));

slidebarOptions.forEach((option => {
    option.addEventListener('click', async (e) => {
        e.preventDefault();

        removeActive(slidebarOptions);
        option.classList.add('active');
    });
}));

function removeActive(elements) {
    elements.forEach(element => {
        element.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 }); 
    
    sections.forEach(section => observer.observe(section));
});