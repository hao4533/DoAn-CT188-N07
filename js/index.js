setInterval(() => {
  changeSlide(1);
}, 4000);

let currentSlideIndex = 0;
showSlide(currentSlideIndex);

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");

  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlideIndex].classList.add("active");
}

function changeSlide(n) {
  showSlide(currentSlideIndex + n);
}
