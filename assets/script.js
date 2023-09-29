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
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
];

const bannerImg = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
// Initialisation de l'indice de la diapositive actuelle
let currentIndex = 0;
// Fonction pour mettre à jour le carrousel avec une la bonne img/text

function updateCarousel(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }
  // Récupère la diapositive actuelle en fonction de l'indice
  const slide = slides[currentIndex];
  bannerImg.src = `assets/images/slideshow/${slide.image}`;
  bannerImg.alt = `Slide ${currentIndex + 1}`;
  document.querySelector("p").innerHTML = slide.tagLine;

  // Supprime la classe "dot_selected" de tous les points
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });

  // Ajoute la classe "dot_selected" au point correspondant à la nouvelle diapositive
  allDots[currentIndex].classList.add("dot_selected");
}

function generateDots() {
  const dotsContainer = document.querySelector(".dots");
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    // Ajoute la classe "dot_selected" au premier point
    if (i === 0) {
      dot.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dot);
  }
}

// Déclancheur gauche
arrowLeft.addEventListener("click", () => {
  currentIndex--;
  updateCarousel(currentIndex);
  console.log("updateGauche");
});
// Déclancheur droite
arrowRight.addEventListener("click", () => {
  currentIndex++;
  updateCarousel(currentIndex);

  console.log("updateDroite");
});

generateDots();

updateCarousel(currentIndex);
