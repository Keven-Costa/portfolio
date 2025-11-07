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

// Dados do projeto
const projectData = {
    "title": "Sistema de Gestão Inteligente",
    "short_description": "Plataforma web completa para gestão empresarial com painéis interativos e relatórios em tempo real.",
    "description": "Este projeto é um sistema de gestão empresarial completo desenvolvido com as mais recentes tecnologias web. A plataforma oferece dashboards interativos, relatórios em tempo real, gestão de usuários e integração com diversos serviços externos. O sistema foi projetado para ser intuitivo, responsivo e altamente personalizável, atendendo às necessidades específicas de cada empresa.",
    "features": [
        "Dashboard interativo com gráficos e métricas em tempo real",
        "Gestão de usuários com diferentes níveis de permissão",
        "Relatórios personalizáveis e exportáveis em múltiplos formatos",
        "Integração com APIs de terceiros para automação de processos",
        "Sistema de notificações em tempo real",
        "Interface responsiva que funciona em desktop e mobile"
    ],
    "status": "Concluído",
    "release_date": "15/03/2023",
    "version": "2.1",
    "type": "Full-Stack",
    "technologies_used": ["React", "Node.js", "MongoDB", "Express", "Chart.js", "JWT"],
    "repository_link": "https://github.com/seuusuario/sistema-gestao",
    "project_link": "https://sistema-gestao-exemplo.vercel.app",
    "challenges_and_solutions": "O maior desafio foi garantir a performance do dashboard com atualizações em tempo real. Implementamos WebSockets para atualizações eficientes e otimizamos as consultas ao banco de dados usando agregações do MongoDB. Para a renderização dos gráficos, utilizamos virtualização para lidar com grandes volumes de dados sem comprometer a performance.",
    "img": [{
        "src": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "caption": "Dashboard principal do sistema"
    }, {
        "src": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "caption": "Relatórios personalizáveis"
    }, {
        "src": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "caption": "Gestão de usuários"
    }]
};

function populateProjectDetails(data) {
    document.getElementById('projeto-titulo-pagina').textContent = `${data.title} — PORTFÓLIO`;
    document.getElementById('project-title').textContent = data.title;
    document.getElementById('projeto-short-descricao').textContent = data.short_description;
    let textoFormatado = data.challenges_and_solutions.replace(/^-+\s*/, '').replace(/\n/g, '<br>');

    textoFormatado = data.challenges_and_solutions.replace(/^-+\s*/, '').replace(/\n/g, '<br>');
    document.getElementById('projeto-desafios').innerHTML = textoFormatado

    textoFormatado = data.description.replace(/^-+\s*/, '').replace(/\n/g, '<br>');
    document.getElementById('projeto-descricao').innerHTML = textoFormatado

    document.getElementById('breadcrumb-project-name').textContent = data.title;

    document.getElementById('projeto-status').textContent = data.status;
    document.getElementById('projeto-release-date').textContent = data.release_date;
    document.getElementById('projeto-version').textContent = data.version;
    document.getElementById('projeto-type').textContent = data.type;

    // Popular funcionalidades
    const featuresList = document.getElementById('projeto-features');
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Popular tecnologias
    const techContainer = document.getElementById('projeto-tecnologias');
    data.technologies_used.forEach(tech => {
        const span = document.createElement('span');
        span.className = "tech-tag";
        span.textContent = tech;
        techContainer.appendChild(span);
    });

    // Configurar links
    document.getElementById('projeto-repo').href = data.repository_link;
    document.getElementById('projeto-link').href = data.project_link;

    // Configurar carousel de imagens
    const carouselInner = document.getElementById('carousel-items');
    // console.log(data)
    data.img.forEach((image, index) => {
        console.log(image)
        const div = document.createElement('div');
        div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `<img src="${image}" class="d-block w-100" >`;
        carouselInner.appendChild(div);
    });
}

const JSON_PROJECTS_FILE = '../assets/data/projects.json';
let project;
// Carregar dados do projeto
function loadProjectData() {
    // const pathname = window.location.pathname;
    // const partes = pathname.split('/');
    // const projetoId = partes[partes.length - 1];

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id'); // Pega o valor do parâmetro 'id'

    if (!projectId) {
        showError('ID do projeto não especificado na URL.');
        return;
    }

    fetch(JSON_PROJECTS_FILE)
        .then(response => {
            if (!response.ok) {
                throw new Error('Projeto não encontrado');
            }
            
            return response.json();
        })
        .then(projetos => {
            let projeto = projetos.find(p => p.id === projectId);
            currentProject = projeto;
            document.title = `Editar ${currentProject.title} — PORTFÓLIO`;
            document.getElementById('breadcrumb-project-name').textContent = currentProject.title;
            
            
            populateProjectDetails(projeto)
        })
        .catch(error => {
            console.error('Erro ao carregar os detalhes do projeto:', error);
            showError('Não foi possível carregar os detalhes deste projeto.');
        });
}

// Inicializar Particles.js
document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00f7ff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
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
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Popular os dados do projeto
    loadProjectData();
    //  populateProjectDetails(projectData);
});
