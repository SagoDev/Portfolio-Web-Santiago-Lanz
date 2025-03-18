document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('header nav')?.addEventListener('click', (e) => {
        if (e.target.matches('a')) {
            document.querySelector('header nav a.active')?.classList.remove('active');
            e.target.classList.add('active');
        }
    });    

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("active", entry.isIntersecting);
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("section").forEach(section => observer.observe(section));
});
