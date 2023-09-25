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
];

const bannerImg = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function updateCarousel(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }

  const slide = slides[currentIndex];
  bannerImg.src = `assets/images/slideshow/${slide.image}`;
  bannerImg.alt = `Slide ${currentIndex + 1}`;
  document.querySelector("p").innerHTML = slide.tagLine;

  dots.forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === currentIndex);
  });
}

arrowLeft.addEventListener("click", () => {
  currentIndex--;
  updateCarousel(currentIndex);
});

arrowRight.addEventListener("click", () => {
  currentIndex++;
  updateCarousel(currentIndex);

  console.log("updateDroite");
});

updateCarousel(currentIndex);
