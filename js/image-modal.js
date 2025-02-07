/**
 * Gère l'affichage des images en mode modal avec navigation
 * pour les projets du portfolio.
 */
class ImageModal {
  constructor() {
    this.modal = document.querySelector('.image-modal');
    this.modalImage = document.querySelector('.modal-image');
    this.closeButton = document.querySelector('.modal-close');
    this.prevButton = document.querySelector('.modal-prev');
    this.nextButton = document.querySelector('.modal-next');
    this.overlay = document.querySelector('.modal-overlay');
    
    this.currentImages = [];
    this.currentIndex = 0;
    
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    // Gestionnaire pour les images de projet
    document.querySelectorAll('.project-image img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => this.openModal(img));
    });

    // Fermeture du modal
    this.closeButton.addEventListener('click', () => this.closeModal());
    this.overlay.addEventListener('click', () => this.closeModal());

    // Navigation
    this.prevButton.addEventListener('click', () => this.showPrevImage());
    this.nextButton.addEventListener('click', () => this.showNextImage());

    // Gestion des touches du clavier
    document.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('active')) return;
      
      switch(e.key) {
        case 'Escape':
          this.closeModal();
          break;
        case 'ArrowLeft':
          this.showPrevImage();
          break;
        case 'ArrowRight':
          this.showNextImage();
          break;
      }
    });
  }

  openModal(clickedImage) {
    const projectCard = clickedImage.closest('.project-card');
    
    // Récupérer toutes les images du projet
    if (projectCard.querySelector('.slider-images')) {
      this.currentImages = Array.from(projectCard.querySelectorAll('.slider-images img'));
    } else {
      this.currentImages = [clickedImage];
    }
    
    this.currentIndex = this.currentImages.indexOf(clickedImage);
    this.updateModalImage();
    this.updateNavigationButtons();
    
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  showPrevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateModalImage();
      this.updateNavigationButtons();
    }
  }

  showNextImage() {
    if (this.currentIndex < this.currentImages.length - 1) {
      this.currentIndex++;
      this.updateModalImage();
      this.updateNavigationButtons();
    }
  }

  updateModalImage() {
    const currentImage = this.currentImages[this.currentIndex];
    this.modalImage.src = currentImage.src;
    this.modalImage.alt = currentImage.alt;
  }

  updateNavigationButtons() {
    this.prevButton.style.display = this.currentIndex > 0 ? '' : 'none';
    this.nextButton.style.display = this.currentIndex < this.currentImages.length - 1 ? '' : 'none';
  }
}

// Initialisation du modal
document.addEventListener('DOMContentLoaded', () => {
  new ImageModal();
}); 