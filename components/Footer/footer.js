fetch('/components/Footer/footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer').innerHTML = html);

const footerCSS = document.createElement('link');
footerCSS.rel = 'stylesheet'
footerCSS.href = '/components/Footer/footer.style.css'

document.head.appendChild(footerCSS);