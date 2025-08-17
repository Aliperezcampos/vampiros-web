// Menú desplegable
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.slide-menu').classList.toggle('active');
});

// Efecto táctil en cards
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('touchstart', function() {
        this.classList.add('touched');
        setTimeout(() => this.classList.remove('touched'), 600);
    });
    
    // Para dispositivos con stylus/mouse
    card.addEventListener('mousedown', function() {
        this.classList.add('touched');
        setTimeout(() => this.classList.remove('touched'), 600);
    });
});

// Cambio de tema
document.querySelector('.theme-switcher').addEventListener('click', () => {
    document.documentElement.toggleAttribute('data-theme');
});

// Efecto de partículas sangrientas (solo en hero)
const hero = document.querySelector('.blood-hero');
for (let i = 0; i < 8; i++) {
    const drop = document.createElement('div');
    drop.className = 'blood-drop';
    drop.style.cssText = `
        position: absolute;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 20 + 10}px;
        background: rgba(255, 0, 51, ${Math.random() * 0.4 + 0.2});
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: fall ${Math.random() * 6 + 3}s linear infinite;
        filter: blur(1px);
        border-radius: 50% 50% 0 0;
        transform: rotate(${Math.random() * 30 - 15}deg);
    `;
    hero.appendChild(drop);
}

// Añadir keyframes dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to { transform: translateY(100vh) rotate(360deg); }
    }
`;
document.head.appendChild(style);