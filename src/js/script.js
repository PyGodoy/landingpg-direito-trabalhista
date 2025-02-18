// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.service-card');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// Função para carregar animações de forma segura
function loadLottieAnimation(elementId, path) {
const container = document.getElementById(elementId);
if (!container) {
console.warn(`Container ${elementId} não encontrado`);
return;
}

try {
return lottie.loadAnimation({
    container: container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: path,
    rendererSettings: {
        progressiveLoad: true,
        preserveAspectRatio: "xMidYMid slice"
    }
});
} catch (error) {
console.error(`Erro ao carregar animação para ${elementId}:`, error);
}
}

// Esperar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
// Array de configurações das animações
const animations = [
{
    id: "bpc-animation",
    path: "https://assets9.lottiefiles.com/packages/lf20_3Qm5Pb.json"
},
{
    id: "auxilio-doenca-animation",
    path: "https://assets9.lottiefiles.com/packages/lf20_x62chJ.json"
},
{
    id: "auxilio-reclusao-animation",
    path: "https://assets2.lottiefiles.com/packages/lf20_yr6zz3.json"
},
{
    id: "salario-maternidade-animation",
    path: "https://assets3.lottiefiles.com/packages/lf20_dz0sijz5.json"
},
{
    id: "aposentadoria-rural-animation",
    path: "https://assets7.lottiefiles.com/packages/lf20_olbiqpxm.json"
},
{
    id: "aposentadoria-invalidez-animation",
    path: "https://assets10.lottiefiles.com/packages/lf20_g0zb1lzr.json"
}
];

// Carregar cada animação
animations.forEach(animation => {
loadLottieAnimation(animation.id, animation.path);
});
});

// Adicionar estilos necessários
const style = document.createElement('style');
style.textContent = `
.service-card div[id$="-animation"] {
width: 64px;
height: 64px;
margin: 0 auto 1rem auto;
}
`;
document.head.appendChild(style);