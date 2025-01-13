fetch('/sections/who_am_I/html/who_am_I.html')
    .then(response => response.text())
    .then(html => document.getElementById('me').innerHTML = html);

const meCSS = document.createElement('link');
meCSS.rel = 'stylesheet'
meCSS.href = '/sections/who_am_I/css/who_am_I.style.css'

document.head.appendChild(meCSS);