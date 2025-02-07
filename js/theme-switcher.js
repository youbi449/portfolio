// Gestion du thème
const themeToggle = document.querySelector("#checkbox");
const body = document.querySelector("body");

/**
 * Initialise et gère le thème de l'application
 * Le thème par défaut est 'light-theme'
 */
function initializeTheme() {
  // Récupère le thème sauvegardé ou utilise light-theme par défaut
  const savedTheme = localStorage.getItem("theme") || "light-theme";

  // Supprime les deux classes possibles pour éviter les conflits
  body.classList.remove("light-theme", "dark-theme");

  // Applique le thème sauvegardé
  body.classList.add(savedTheme);

  // Synchronise l'état du checkbox
  themeToggle.checked = savedTheme === "dark-theme";
}

/**
 * Gère le changement de thème
 * @param {Event} event - L'événement de changement
 */
function handleThemeChange(event) {
  const newTheme = event.target.checked ? "dark-theme" : "light-theme";
  const oldTheme = newTheme === "light-theme" ? "dark-theme" : "light-theme";

  body.classList.remove(oldTheme);
  body.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", initializeTheme);

// Gestion du changement de thème
themeToggle.addEventListener("change", handleThemeChange);

// Animation de texte
const texts = ["Typescript", "React", "Node.js", "Python", "SQL", "Php", "LUA"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".dynamic-text").textContent = letter;
  if (letter.length === currentText.length) {
    index = 0;
    count++;
    setTimeout(type, 2000); // Pause avant le prochain mot
  } else {
    setTimeout(type, 100); // Vitesse de frappe
  }
})();

// Animation au scroll avec Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  // Animation des barres de compétences
  const skillBars = document.querySelectorAll(".progress-line span");
  const animateSkills = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "scaleX(1)";
        observer.unobserve(entry.target);
      }
    });
  };

  const skillsObserver = new IntersectionObserver(animateSkills, {
    threshold: 0.5,
  });

  skillBars.forEach((bar) => {
    bar.style.transform = "scaleX(0)";
    skillsObserver.observe(bar);
  });

  // Animation des cartes de projet
  const projectCards = document.querySelectorAll(".project-card");
  const animateProjects = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  };

  const projectsObserver = new IntersectionObserver(animateProjects, {
    threshold: 0.1,
  });

  projectCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    projectsObserver.observe(card);
  });
});

// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Typing Animation
const typingText = document.querySelector(".dynamic-text");
const technologies = [
  "JavaScript",
  "Python",
  "Java",
  "PHP",
  "React",
  "Node.js",
];
let techIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;

function type() {
  const currentTech = technologies[techIndex];

  if (isDeleting) {
    typingText.textContent = currentTech.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 100;
  } else {
    typingText.textContent = currentTech.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 200;
  }

  if (!isDeleting && charIndex === currentTech.length) {
    isDeleting = true;
    typingDelay = 1000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    techIndex = (techIndex + 1) % technologies.length;
    typingDelay = 500; // Pause before starting new word
  }

  setTimeout(type, typingDelay);
}

// Start the typing animation when the page loads
window.addEventListener("load", () => {
  type();
});
