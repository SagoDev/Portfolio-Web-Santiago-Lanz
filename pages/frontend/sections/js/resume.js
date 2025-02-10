(function initializeButtons() {
    const defaultDetail = 'about';

    loadDetail(defaultDetail);

    const btns = document.querySelectorAll('div button');

    btns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const detail = e.target.dataset.detail;
            removeActiveFromElements(btns);
            btn.classList.add('active');
            await loadDetail(detail);
        });
    });

    async function loadDetail(detail) {
        const detailBox = document.getElementById('detail-box');
        const detailHTML = await fetch(`pages/frontend/sections/html/resume.${detail}.html`);
        const html = await detailHTML.text();
        detailBox.innerHTML = html;
    }
})();
