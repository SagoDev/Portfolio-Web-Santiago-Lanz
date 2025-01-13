fetch('/sections/what_can_I_do/html/what_can_I_do.html')
    .then(response => response.text())
    .then(html => document.getElementById('skills').innerHTML = html);

const skillsCSS = document.createElement('link');
skillsCSS.rel = 'stylesheet'
skillsCSS.href = '/sections/what_can_I_do/css/what_can_I_do.style.css'

document.head.appendChild(skillsCSS);