// Tema claro/escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');

// Verificar preferência salva ou do sistema
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
body.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'dark';
updateNavbarTheme(savedTheme);

themeToggle.addEventListener('change', function () {
    const theme = this.checked ? 'dark' : 'light';
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateNavbarTheme(theme);
});

function updateNavbarTheme(theme) {
    if (window.scrollY > 50) {
        if (theme === 'light') {
            navbar.style.backgroundColor = 'rgba(240, 248, 255, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(5, 5, 16, 0.95)';
        }
    } else {
        if (theme === 'light') {
            navbar.style.backgroundColor = 'rgba(240, 248, 255, 0.9)';
        } else {
            navbar.style.backgroundColor = 'rgba(5, 5, 16, 0.8)';
        }
    }
}

// Inicializar Particles.js
document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00f7ff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00f7ff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
});

// Inicializar Typed.js com melhorias
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ['Desenvolvedor Full-Stack', 'Especialista em IoT', 'Criador de Soluções Digitais'],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: "|",
        autoInsertCss: false
    };
    new Typed('#typed', options);

});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const currentTheme = body.getAttribute('data-theme');

    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        if (currentTheme === 'light') {
            navbar.style.backgroundColor = 'rgba(240, 248, 255, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(5, 5, 16, 0.95)';
        }
    } else {
        navbar.style.padding = '15px 0';
        if (currentTheme === 'light') {
            navbar.style.backgroundColor = 'rgba(240, 248, 255, 0.9)';
        } else {
            navbar.style.backgroundColor = 'rgba(5, 5, 16, 0.8)';
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button
window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Animate progress bars on scroll
window.addEventListener('scroll', function () {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');

    if (skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('aria-valuenow') + '%';
            bar.style.width = width;
        });
    }
});

// Filtros de Projetos e Certificações
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const certificationItems = document.querySelectorAll('.certification-item');

// Filtros de projetos
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const tech = button.getAttribute('data-tech');
        const certFilter = button.getAttribute('data-cert-filter');

        // Remover classe active de todos os botões do mesmo grupo
        const buttonGroup = button.parentElement.querySelectorAll('.filter-btn');
        buttonGroup.forEach(btn => btn.classList.remove('active'));

        // Adicionar classe active ao botão clicado
        button.classList.add('active');

        // Filtro de projetos por categoria
        if (filter) {
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Filtro de projetos por tecnologia
        if (tech) {
            projectItems.forEach(item => {
                if (tech === 'all' || item.getAttribute('data-tech') === tech) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Filtro de certificações
        if (certFilter) {
            certificationItems.forEach(item => {
                if (certFilter === 'all' || item.getAttribute('data-cert-type') === certFilter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
});

// Inicializar animação das barras de progresso
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('aria-valuenow') + '%';
        bar.style.width = width;
    });
}

// Executar quando a seção de habilidades estiver visível
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

const JSON_PROJECTS_FILE = '../assets/data/projects.json'; // Ajuste o caminho conforme necessário
const JSON_SKILLS_FILE = '../assets/data/skills.json';
const JSON_COURSES_FILE = '../assets/data/courses.json';

const containerProjects = document.getElementById('container-projects')
const containerSkills = document.getElementById('container-skills')
const containerCourses = document.getElementById('container-cursos')

// const params = new URLSearchParams(window.location.search);
// const projectId = params.get('id'); // Pega o valor do parâmetro 'id'

fetch(JSON_PROJECTS_FILE)
    .then(response => {
        // Verifica se a resposta HTTP está OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
// <a href="https://keven-costa.github.io/teste/pages/project.html?id=${p.id}" class="hero-btn">Ver Detalhes</a>
        data.forEach(p => {
            const cardString = `
        <div class="col-lg-4 col-md-6 project-item" data-category="frontend" data-tech="react">
            <div class="project-card">
                <div class="project-img">
                    <img src=${p.img[0]} alt="Sistema de Gestão Inteligente">
                    <div class="project-overlay">
                        <a href="project.html?id=${p.id}" class="hero-btn">Ver Detalhes</a>
                    </div>
                </div>
                <div class="project-content">
                    <h4 class="project-title">${p.title}</h4>
                    <p>${p.short_description}</p>
                    <div class="project-tech">

                        ${renderTec(p.technologies_used)}

                    </div>
                </div>
            </div>
        </div>
    `;

            // Inserts the HTML string directly inside the container, at the end
            containerProjects.insertAdjacentHTML('beforeend', cardString);
        });

    })
    .catch(error => {
        console.error('Erro ao carregar o JSON:', error);
        // Mostrar mensagem de erro para o usuário
    });

fetch(JSON_SKILLS_FILE)
    .then(response => {
        // Verifica se a resposta HTTP está OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {

        data.forEach(skill => {
            const cardString = `
            <div class="col-md-4 col-sm-6" >
                    <div class="skill-item">
                        <i class="bi bi-code-square skill-icon"></i>
                        <h4>${skill.category}</h4>
                        <p>${skill.description}</p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow=${skill.level}
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </div>
    `;

            // Inserts the HTML string directly inside the container, at the end
            containerSkills.insertAdjacentHTML('beforeend', cardString);
        });

    })
    .catch(error => {
        console.error('Erro ao carregar o JSON:', error);
        // Mostrar mensagem de erro para o usuário
    });

fetch(JSON_COURSES_FILE)
    .then(response => {
        // Verifica se a resposta HTTP está OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {

        data.forEach(course => {
            const cardString = `
                <div class="col-md-6 col-lg-4 certification-item" data-cert-type="frontend">
                    <div class="certification-card">
                        <div class="cert-badge">${course.category}</div>
                        <div class="certification-img">
                            <img src=${course.imagem}
                                alt="Certificação React Avançado">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${course.title}</h5>
                            <p class="card-text">${course.description}</p>
                            <p class="text-muted"><small>Emitido em: ${course.conclusion_date}</small></p>
                        </div>
                    </div>
                </div> 
    `;

            // Inserts the HTML string directly inside the container, at the end
            containerCourses.insertAdjacentHTML('beforeend', cardString);
        });

    })
    .catch(error => {
        console.error('Erro ao carregar o JSON:', error);
        // Mostrar mensagem de erro para o usuário
    });


function renderTec(tecnologias) {
    // Usa .map() para criar um array de strings para cada tecnologia
    const techSpans = tecnologias.map(tec => {
        // Retorna a string HTML para cada <span>. Adicionei uma classe de exemplo para estilização.
        return `<span class="tech-tag">${tec}</span>`;
    });

    return techSpans.join('');
}