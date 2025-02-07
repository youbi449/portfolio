/**
 * Gère le slider automatique pour le projet Diet App
 * Change d'image toutes les 4 secondes
 */
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-images');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideCount = 3;
    const slideInterval = 4000; // 4 secondes

    // Fonction pour passer à la slide suivante
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }

    // Mise à jour de la position du slider et des indicateurs
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
        
        // Mise à jour des indicateurs
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    // Démarrage du slider automatique
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Gestion du hover pour mettre en pause le slider
    const projectCard = document.querySelector('.project-slider');
    projectCard.addEventListener('mouseenter', () => {
        clearInterval(slideTimer);
    });

    projectCard.addEventListener('mouseleave', () => {
        slideTimer = setInterval(nextSlide, slideInterval);
    });

    // Navigation manuelle avec les indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });
}); 