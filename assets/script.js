const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>Soutenance</span>",
  },
];

// Sélection des éléments
const bannerImg = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

// Initialisation de l'indice
let currentIndex = 0;

// Fonction pour mettre à jour le carrousel avec la bonne image/texte
function updateCarousel(index) {
  // Vérifie si l'index est inférieur à zéro, s'il l'est, va à la dernière diapositive
  if (index < 0) {
    currentIndex = slides.length - 1;
  }
  // Vérifie si l'index est supérieur ou égal au nombre de diapositives, s'il l'est, retourne à la première diapositive
  else if (index >= slides.length) {
    currentIndex = 0;
  }

  // Récupère la diapositive actuelle en fonction de l'indice
  const slide = slides[currentIndex];
  bannerImg.src = `assets/images/slideshow/${slide.image}`;
  document.querySelector("p").innerHTML = slide.tagLine;

  // Supprime la classe "dot_selected" de tous les points
  // Sinon bug
  const allDots = dotsContainer.querySelectorAll(".dot");
  allDots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });

  // Ajoute la classe "dot_selected" au point correspondant à la nouvelle diapositive
  allDots[currentIndex].classList.add("dot_selected");
}

// Fonction pour générer les points du carrousel
function generateDots() {
  for (let index = 0; index < slides.length; index++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    // Ajoute la classe "dot_selected" au premier point
    if (index === 0) {
      dot.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dot);
  }
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener("click", () => {
  currentIndex--;
  updateCarousel(currentIndex);
  console.log("updateGauche");
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener("click", () => {
  currentIndex++;
  updateCarousel(currentIndex);
  console.log("updateDroite");
});

// Génère les points du carrousel et initialise le carrousel avec l'indice actuel
generateDots();
updateCarousel(currentIndex);
