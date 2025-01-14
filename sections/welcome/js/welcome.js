fetch('/sections/welcome/html/welcome.html')
    .then(response => response.text())
    .then(html => document.getElementById('welcome').innerHTML = html);

const welcomeCSS = document.createElement('link');
welcomeCSS.rel = 'stylesheet'
welcomeCSS.href = '/sections/welcome/css/welcome.style.css'

document.head.appendChild( welcomeCSS);