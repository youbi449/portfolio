document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const scrollDots = document.querySelectorAll('.scroll-dot');
    
    // Fonction pour mettre à jour l'indicateur actif
    const updateActiveIndicator = () => {
        const scrollPosition = window.scrollY;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop - window.innerHeight / 3 && 
                scrollPosition < sectionTop + sectionHeight - window.innerHeight / 3) {
                scrollDots.forEach(dot => dot.classList.remove('active'));
                scrollDots[index].classList.add('active');
            }
        });
    };
    
    // Écouteur d'événement pour le défilement
    window.addEventListener('scroll', updateActiveIndicator);
    
    // Navigation au clic sur les points
    scrollDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Initialisation de l'indicateur actif
    updateActiveIndicator();
}); 