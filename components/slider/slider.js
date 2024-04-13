  const slider = document.querySelector(".slider");
    const slides = document.querySelector(".slides");
    const slideWidth = slides.querySelector(".slide").offsetWidth;
  
    let currentIndex = 0;
  
    function goToSlide(index) {
      currentIndex = index;
      slides.style.transform = `translateX(-${slideWidth * index}px)`;
    }
  
    document.querySelector(".next").addEventListener("click", function() {
      if (currentIndex < slides.children.length - 1) {
        goToSlide(currentIndex + 1);
      }
    });
  
    document.querySelector(".prev").addEventListener("click", function() {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    });