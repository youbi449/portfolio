// Gestion du thème
const themeToggle = document.querySelector('#checkbox');
const body = document.querySelector('body');

// Vérifie si un thème est sauvegardé dans le localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-theme') {
        themeToggle.checked = true;
    }
}

// Gestion du changement de thème
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
});

// Animation de texte
const texts = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'DevOps'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.dynamic-text').textContent = letter;
    if (letter.length === currentText.length) {
        index = 0;
        count++;
        setTimeout(type, 2000); // Pause avant le prochain mot
    } else {
        setTimeout(type, 100); // Vitesse de frappe
    }
})();

// Animation au scroll avec Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Animation des barres de compétences
    const skillBars = document.querySelectorAll('.progress-line span');
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scaleX(1)';
                observer.unobserve(entry.target);
            }
        });
    };

    const skillsObserver = new IntersectionObserver(animateSkills, {
        threshold: 0.5
    });

    skillBars.forEach(bar => {
        bar.style.transform = 'scaleX(0)';
        skillsObserver.observe(bar);
    });

    // Animation des cartes de projet
    const projectCards = document.querySelectorAll('.project-card');
    const animateProjects = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const projectsObserver = new IntersectionObserver(animateProjects, {
        threshold: 0.1
    });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        projectsObserver.observe(card);
    });
});

// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 