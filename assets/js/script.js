// Tema claro/escuro
var themeToggle = document.getElementById('theme-toggle');
var body = document.body;
var navbar = document.querySelector('.navbar');
// Verificar preferência salva ou do sistema
var savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
body.setAttribute('data-theme', savedTheme);
if (themeToggle) {
    themeToggle.checked = savedTheme === 'dark';
}
updateNavbarTheme(savedTheme);
themeToggle.addEventListener('change', function () {
    var theme = this.checked ? 'dark' : 'light';
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateNavbarTheme(theme);
});
function updateNavbarTheme(theme) {
    if (window.scrollY > 50) {
        if (theme === 'light') {
            navbar.style.backgroundColor = 'rgba(9, 14, 19, 0.95)';
        }
        else {
            navbar.style.backgroundColor = 'rgba(5, 5, 16, 0.95)';
        }
    }
    else {
        if (theme === 'light') {
            navbar.style.backgroundColor = 'rgba(240, 248, 255, 0.9)';
        }
        else {
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
        strings: ['Desenvolvedor Full-Stack', 'Entusiasta em IoT', 'Criador de Soluções Digitais'],
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
    var currentTheme = body.getAttribute('data-theme');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        if (currentTheme === 'light') {
            navbar.style.backgroundColor = 'rgba(240, 248, 255, 0.95)';
        }
        else {
            navbar.style.backgroundColor = 'rgba(5, 5, 16, 0.95)';
        }
    }
    else {
        navbar.style.padding = '15px 0';
        if (currentTheme === 'light') {
            navbar.style.backgroundColor = 'rgba(240, 248, 255, 0.9)';
        }
        else {
            navbar.style.backgroundColor = 'rgba(5, 5, 16, 0.8)';
        }
    }
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    // O TypeScript infere 'anchor' como HTMLAnchorElement, o que é ótimo.
    anchor.addEventListener('click', function (e) {
        // 💡 Correção: 'this: HTMLAnchorElement' resolve o erro de tipagem.
        e.preventDefault();
        // Agora o TS sabe que 'this' possui o método getAttribute
        var targetId = this.getAttribute('href');
        // Verificação de nulidade implícita (if/return)
        if (!targetId || targetId === '#')
            return;
        // O retorno de document.querySelector é 'Element | null'.
        var targetElement = document.querySelector(targetId);
        // Verificamos se o elemento alvo existe
        if (targetElement) {
            // 💡 Verificação Extra: Para usar 'offsetTop', o TypeScript
            // precisa saber que 'targetElement' é um HTMLElement.
            // Aqui, usamos um Type Guard (instanceof) ou Type Assertion (as HTMLElement).
            if (targetElement instanceof HTMLElement) {
                window.scrollTo({
                    // Usamos 'targetElement.offsetTop'
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});
// Back to top button
window.addEventListener('scroll', function () {
    var backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    }
    else {
        backToTop.classList.remove('active');
    }
});
window.addEventListener('scroll', function () {
    var skillsSection = document.getElementById('skills');
    // O retorno é NodeListOf<Element>, então 'progressBars' contém 'Element's
    var progressBars = document.querySelectorAll('.progress-bar');
    if (skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
        progressBars.forEach(function (bar) {
            // 💡 Correção: Asserção de Tipo para garantir que 'bar' tenha '.style'
            var progressBar = bar;
            var width = progressBar.getAttribute('aria-valuenow') + '%';
            // Agora o TypeScript aceita '.style'
            progressBar.style.width = width;
        });
    }
});
// Filtros de Projetos e Certificações
// CORREÇÃO: Usamos <HTMLElement> na obtenção para garantir as propriedades .style e .classList
var filterButtons = document.querySelectorAll('.filter-btn');
var projectItems = document.querySelectorAll('.project-item');
var certificationItems = document.querySelectorAll('.certification-item');
// Filtros de projetos
filterButtons.forEach(function (button) {
    // O TypeScript infere 'button' como HTMLElement, então .getAttribute funciona
    button.addEventListener('click', function () {
        var filter = button.getAttribute('data-filter');
        var tech = button.getAttribute('data-tech');
        var certFilter = button.getAttribute('data-cert-filter');
        // --- CORREÇÃO DE NULIDADE: Verifica se o pai existe ---
        var parent = button.parentElement;
        if (parent) {
            // CORREÇÃO: Tipamos o querySelectorAll do pai como <HTMLElement>
            var buttonGroup = parent.querySelectorAll('.filter-btn');
            // Remover classe active de todos os botões do mesmo grupo
            // 'btn' é HTMLElement, então .classList funciona
            buttonGroup.forEach(function (btn) { return btn.classList.remove('active'); });
            // Adicionar classe active ao botão clicado
            button.classList.add('active');
        }
        // --- Fim da Correção de Nulidade ---
        // Filtro de projetos por categoria
        if (filter) {
            // 'item' é HTMLElement, então .style funciona
            projectItems.forEach(function (item) {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                }
                else {
                    item.style.display = 'none';
                }
            });
        }
        // Filtro de projetos por tecnologia
        if (tech) {
            projectItems.forEach(function (item) {
                if (tech === 'all' || item.getAttribute('data-tech') === tech) {
                    item.style.display = 'block';
                }
                else {
                    item.style.display = 'none';
                }
            });
        }
        // Filtro de certificações
        if (certFilter) {
            certificationItems.forEach(function (item) {
                if (certFilter === 'all' || item.getAttribute('data-cert-type') === certFilter) {
                    item.style.display = 'block';
                }
                else {
                    item.style.display = 'none';
                }
            });
        }
    });
});
// Inicializar animação das barras de progresso
function animateProgressBars() {
    // 💡 CORREÇÃO 1: Tipagem explícita para HTMLElement na obtenção da lista
    var progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function (bar) {
        // Obter o valor (será string | null)
        var valueNow = bar.getAttribute('aria-valuenow');
        // CORREÇÃO 2: Verificar se o valor existe (null check)
        if (valueNow) {
            var width = valueNow + '%';
            // 'bar' é HTMLElement, então .style funciona
            bar.style.width = width;
        }
    });
}
// Executar quando a seção de habilidades estiver visível
var skillsSection = document.getElementById('skills');
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            animateProgressBars();
        }
    });
}, { threshold: 0.5 });
observer.observe(skillsSection);
var JSON_PROJECTS_FILE = '../assets/data/projects.json'; // Ajuste o caminho conforme necessário
var JSON_SKILLS_FILE = '../assets/data/skills.json';
var JSON_COURSES_FILE = '../assets/data/courses.json';
var containerProjects = document.getElementById('container-projects');
var containerSkills = document.getElementById('container-skills');
var containerCourses = document.getElementById('container-cursos');
// const params = new URLSearchParams(window.location.search);
// const projectId = params.get('id'); // Pega o valor do parâmetro 'id'
fetch(JSON_PROJECTS_FILE)
    .then(function (response) {
    // Verifica se a resposta HTTP está OK
    if (!response.ok) {
        throw new Error("HTTP error! status: ".concat(response.status));
    }
    return response.json();
})
    .then(function (data) {
    data.forEach(function (p) {
        var cardString = "\n        <div class=\"col-lg-4 col-md-6 project-item\" data-category=\"frontend\" data-tech=\"react\">\n            <div class=\"project-card\">\n                <div class=\"project-img\">\n                    <img src=".concat(p.img[0], " alt=\"Sistema de Gest\u00E3o Inteligente\">\n                    <div class=\"project-overlay\">\n                        <a href=\"/pages/project.html?id=").concat(p.id, "\" class=\"hero-btn\">Ver Detalhes</a>\n                    </div>\n                </div>\n                <div class=\"project-content\">\n                    <h4 class=\"project-title\">").concat(p.title, "</h4>\n                    <p>").concat(p.short_description, "</p>\n                    <div class=\"project-tech\">\n\n                        ").concat(renderTec(p.technologies_used), "\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
        // Inserts the HTML string directly inside the container, at the end
        containerProjects.insertAdjacentHTML('beforeend', cardString);
    });
})
    .catch(function (error) {
    console.error('Erro ao carregar o JSON:', error);
    // Mostrar mensagem de erro para o usuário
});
fetch(JSON_SKILLS_FILE)
    .then(function (response) {
    // Verifica se a resposta HTTP está OK
    if (!response.ok) {
        throw new Error("HTTP error! status: ".concat(response.status));
    }
    return response.json();
})
    .then(function (data) {
    data.forEach(function (skill) {
        var cardString = "\n            <div class=\"col-md-4 col-sm-6\" >\n                    <div class=\"skill-item\">\n                        <i class=\"bi bi-code-square skill-icon\"></i>\n                        <h4>".concat(skill.category, "</h4>\n                        <p>").concat(skill.description, "</p>\n                        <div class=\"progress\">\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=").concat(skill.level, "\n                                aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </div>\n                    </div>\n    ");
        // Inserts the HTML string directly inside the container, at the end
        containerSkills.insertAdjacentHTML('beforeend', cardString);
    });
})
    .catch(function (error) {
    console.error('Erro ao carregar o JSON:', error);
    // Mostrar mensagem de erro para o usuário
});
fetch(JSON_COURSES_FILE)
    .then(function (response) {
    // Verifica se a resposta HTTP está OK
    if (!response.ok) {
        throw new Error("HTTP error! status: ".concat(response.status));
    }
    return response.json();
})
    .then(function (data) {
    data.forEach(function (course) {
        var cardString = "\n                <div class=\"col-md-6 col-lg-4 certification-item\" data-cert-type=\"frontend\">\n                    <div class=\"certification-card\">\n                        <div class=\"cert-badge\">".concat(course.category, "</div>\n                        <div class=\"certification-img\">\n                            <img src=").concat(course.imagem, "\n                                alt=\"Certifica\u00E7\u00E3o React Avan\u00E7ado\">\n                        </div>\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">").concat(course.title, "</h5>\n                            <p class=\"card-text\">").concat(course.description, "</p>\n                            <p class=\"text-muted\"><small>Emitido em: ").concat(course.conclusion_date, "</small></p>\n                        </div>\n                    </div>\n                </div> \n    ");
        // Inserts the HTML string directly inside the container, at the end
        containerCourses.insertAdjacentHTML('beforeend', cardString);
    });
})
    .catch(function (error) {
    console.error('Erro ao carregar o JSON:', error);
    // Mostrar mensagem de erro para o usuário
});
function renderTec(tecnologias) {
    // Usa .map() para criar um array de strings para cada tecnologia
    var techSpans = tecnologias.map(function (tec) {
        // Retorna a string HTML para cada <span>. Adicionei uma classe de exemplo para estilização.
        return "<span class=\"tech-tag\">".concat(tec, "</span>");
    });
    return techSpans.join('');
}
