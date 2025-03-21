(function initialize() {
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

    function loadDetail(detail) {
        const detailBox = document.getElementById('detail-box');

        if (detail == "about") {
            detailBox.innerHTML = `
            <div class="about">
    <h2 class="heading">Sobre <span>Mi</span></h2>
    <p class="desc">Hola mi nombre es Santiago. Soy desarrollador web front-end y analista de datos Jr,
        que reside en Florida, Uruguay.
    </p>

    <p class="desc">Soy una persona autodidacta y apasionada por el desarrollo
        web, enfocada en aprovechar mis capacidades técnicas y
        habilidades transversales para crear sitios e interfaces útiles.
    </p>
    <p>Me he formado en instituciones como <a href="https://ceibal.edu.uy/institucional/que-es-ceibal/" target="_blank"
            rel="noreferrer">Ceibal</a> y <a href="https://www.guayerd.com/es/" target="_blank"
            rel="noreferrer">Guayerd</a>, donde adquirí habilidades técnicas
        sólidas y experiencia colaborativa en equipos de desarrollo.</p>
    <p class="desc">Intento enfrentar los desafíos con creatividad, resolviendo problemas de manera
        eficiente. Me mantengo actualizado en tendencias y tecnologías para ofrecer soluciones
        modernas e impactantes.
    </p>
    <p class="desc">Mi objetivo es diseñar soluciones web eficientes y atractivas, combinando
        creatividad y
        tecnología para aportar valor a las personas y las empresas.</p>
    <div class="aboutMe-list">
        <div class="aboutMe-item"></div>
    </div>
    </div>`;

        } else if (detail == "education") {
            detailBox.innerHTML = `<div class="education">
    <h2 class="heading">Mi <span>Educación</span></h2>
    <p class="desc">Cursos completados a través del programa de estudios <a target="_blank" rel="noreferrer"
            href="https://jovenesaprogramar.edu.uy">Jóvenes a
            Programar</a> gestionado por <a href="https://ceibal.edu.uy" target="_blank" rel="noreferrer">Ceibal</a>;
        centro
        de innovación educativa con tecnologías digitales del
        Estado Uruguayo. </p>


    <div class="resume-list">
        <div class="resume-item">
            <p class="year">2024</p>
            <h3>Specialization - Build Website with HTML, JavaScript, AngularJS and React</h3>
            <p class="company">Curso Online</p>
            <div class="img-box">
                <a href="https://coursera.org/share/77b3995dd458ce54583ea0f055642d49" target="_blank"
                    rel="noreferrer"><img
                        src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/Specialization - Build Website with HTML, JavaScript, AngularJS, and React.webp?raw=true"
                        alt="certificado"></a>
            </div>
        </div>
        <div class="resume-item">
            <p class="year">2024</p>
            <h3>Specialization - Learning MEAN Stack by Building Real world Application</h3>
            <p class="company">Curso Online</p>
            <div class="img-box">
                <a href="https://coursera.org/share/c53d00f6cc670b6dba1c2257a6f98b95" target="_blank"
                    rel="noreferrer"><img
                        src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/Specialization - Learning MEAN Stack by Building Real world Application.webp?raw=true"
                        alt="certificado"></a>
            </div>
        </div>
        <div class="resume-item">
            <p class="year">2024</p>
            <h3>Building RESTful APIs with Node.js and Express</h3>
            <p class="company">Curso Online</p>
            <div class="img-box">
                <a href="https://coursera.org/share/ed22e46ae05bb79a81c5c588a12fce32" target="_blank"
                    rel="noreferrer"><img src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/Building RESTful APIs with Node.js and Express.webp?raw=true"
                        alt="certificado"></a>
            </div>
        </div>
        <div class="resume-item">
            <p class="year">2024</p>
            <h3>React Fundamentals</h3>
            <p class="company">Curso Online</p>
            <div class="img-box">
                <a href="https://coursera.org/share/daaae1403b7393661235c4d8f3400093" target="_blank"
                    rel="noreferrer"><img src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/React Fundamentals.webp?raw=true" alt="certificado"></a>
            </div>
        </div>
        <div class="resume-item">
            <p class="year">2024</p>
            <h3>JavaScript for Web Development</h3>
            <p class="company">Curso Online</p>
            <div class="img-box">
                <a href="https://coursera.org/share/786cd5bfc01294665475bc30936c5d02" target="_blank"
                    rel="noreferrer"><img src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/JavaScript for Web Development.webp?raw=true" alt="certificado"></a>
            </div>
        </div>
        <div class="resume-item">
            <p class="year">2024</p>
            <h3>Build a Webpage with HTML and CSS</h3>
            <p class="company">Curso Online</p>
            <div class="img-box">
                <a href="https://coursera.org/share/89645a837aadebfdb658e67fa23c3f1c" target="_blank"
                    rel="noreferrer"><img src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/Build a Webpage with HTML and CSS.webp?raw=true"
                        alt="certificado"></a>
            </div>
        </div>
        <div class="resume-item">
            <p class="year">2024</p>
            <h3>Frontend Development using React</h3>
            <p class="company">Curso Online</p>
            <div class="img-box">
                <a href="https://coursera.org/share/743bf4aa41033c14219be951c2e66176" target="_blank"
                    rel="noreferrer"><img src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/Frontend Development using React.webp?raw=true"
                        alt="certificado"></a>
            </div>
        </div>
        <div class="resume-item">
            <p class="year">2024</p>
            <h3>Frontend Development using Angular</h3>
            <p class="company">Curso Online</p>
            <div class="img-box">
                <a href="https://coursera.org/share/72e2b0cb81854df7b810e2ca8b697c08" target="_blank"
                    rel="noreferrer"><img src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/Frontend Development using Angular.webp?raw=true"
                        alt="certificado"></a>
            </div>
        </div>
        <div class="resume-item">
            <p class="year">2024</p>
            <h3>Building a Complete MEAN Stack Application</h3>
            <p class="company">Curso Online</p>
            <div class="img-box">
                <a href="https://coursera.org/share/9bf6eebaaa5f9c88274e11dfe552f761" target="_blank"
                    rel="noreferrer"><img src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/Building a Complete MEAN Stack Application.webp?raw=true"
                        alt="certificado"></a>
            </div>
        </div>
        <div class="resume-item">
            <p class="year">2024</p>
            <h3>Libraries and Frameworks for Frontend Development</h3>
            <p class="company">Curso Online</p>
            <div class="img-box">
                <a href="https://coursera.org/share/cedc2944ec328401aecf2b604c84d3f7" target="_blank"
                    rel="noreferrer"><img src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/Libraries and Frameworks for Frontend Development.webp?raw=true"
                        alt="certificado"></a>
            </div>
        </div>
        <div class="resume-item">
            <p class="year">2023</p>
            <h3>Desarrollo Web - JavaScript, HTML, CSS</h3>
            <p class="company">Curso Online - JaP Ceibal</p>
            <div class="img-box">
                <a href="https://drive.google.com/file/d/1Y54aJsZrcrMwWFLfgWiyIKgjhMUVnIsi/view?usp=sharing"
                    target="_blank" rel="noreferrer"><img src="https://github.com/SagoDev/Portfolio-Web-Santiago-Lanz/blob/main/img/courses/Certificado Nivel 1 JaP.webp?raw=true"
                        alt="certificado"></a>
            </div>
        </div>
    </div>
</div>`;

        } else if (detail == "experience") {
            detailBox.innerHTML = `
            <div class="experience">
    <h2 class="heading">Mi <span>Experiencia</span></h2>
    <p class="desc">Si bien aún no tengo mi primera experiencia laboral en el rubro TI, miro hacia el
        futuro con mucho entusiasmo y optimismo.</p>
    <p class="desc">Me siento preparado para afrontar mis primeros desafios y avanzar dentro del mundo
        de las
        tecnologías de la información.</p>
    <p class="desc">Sé que seré una pieza fundamental que impulse a la empresa, grupo de trabajo o
        personas a lograr sus objetivos.</p>
</div>`;

        } else if (detail == "skills") {
            detailBox.innerHTML = `
            <div class="skills">
    <h2 class="heading">Mis <span>Habilidades</span></h2>
    <p class="desc">Tengo práctica en crear interfaces web modernas y
        funcionales, utilizando <span>HTML</span>, <span>CSS</span>,
        <span>JavaScript</span>, <span>React</span> y <span>Angular</span>.
    </p>
    <p class="desc">Durante más de 2 años, he trabajado en proyectos prácticos enfocados en estas
        tecnologías.</p>

    <div class="skills-list md-view d-none d-md-grid">
        <div class="skill-item">
            <i class='bx bxl-html5'></i>
            <span>HTML5</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-css3'></i>
            <span>CSS3</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-javascript'></i>
            <span>JavaScript</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-react'></i>
            <span>React.js</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-angular'></i>
            <span>Angular</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-nodejs'></i>
            <span>Node.js</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-mongodb'></i>
            <span>MongoDB</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-bootstrap'></i>
            <span>Bootstrap</span>
        </div>
    </div>
    <div class="skills-list sm-view d-md-none">
        <div class="skill-item">
            <i class='bx bxl-html5'></i>
            <span>HTML5</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-css3'></i>
            <span>CSS3</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-javascript'></i>
            <span>JavaScript</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-react'></i>
            <span>React.js</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-angular'></i>
            <span>Angular</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-nodejs'></i>
            <span>Node.js</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-mongodb'></i>
            <span>MongoDB</span>
        </div>
        <div class="skill-item">
            <i class='bx bxl-bootstrap'></i>
            <span>Bootstrap</span>
        </div>
    </div>
</div>`;
        }

    }
})();
