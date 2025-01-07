fetch('/components/Navbar/navBar.html')
    .then(response => response.text())
    .then(html => document.getElementById('navBar').innerHTML = html);

const navCSS = document.createElement('link');
navCSS.rel = 'stylesheet'
navCSS.href = '/components/Navbar/navBar.style.css'

document.head.appendChild(navCSS);
document.getElementById('navBar').innerHTML = navCSS;
