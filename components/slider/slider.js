const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const slideWidth = slides.querySelector(".slide").offsetWidth;

let currentIndex = 0;

function goToSlide(index) {
  currentIndex = index;
  if (currentIndex < 0) {
    currentIndex = slides.children.length - 1; // Wrap around to the last slide
  } else if (currentIndex >= slides.children.length) {
    currentIndex = 0; // Wrap around to the first slide
  }
  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

document.querySelector(".next").addEventListener("click", function() {
  goToSlide(currentIndex + 1);
});

document.querySelector(".prev").addEventListener("click", function() {
  goToSlide(currentIndex - 1);
});
