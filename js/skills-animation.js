/**
 * Gère les animations de la section skills au scroll
 */
document.addEventListener('DOMContentLoaded', () => {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    // Options pour l'Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Callback pour l'Intersection Observer
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // On arrête d'observer une fois que l'animation est déclenchée
                observer.unobserve(entry.target);
            }
        });
    };

    // Création de l'Intersection Observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Observation de chaque catégorie de skills
    skillCategories.forEach(category => {
        observer.observe(category);
    });
}); 