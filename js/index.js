// // Auto-slide every 1.5 seconds
setInterval(() => {
  changeSlide(1);
}, 4000);

let currentSlideIndex = 0;

// Show the initial slide
showSlide(currentSlideIndex);

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");

  // Wrap around if index goes out of bounds
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  // Hide all slides
  slides.forEach((slide) => slide.classList.remove("active"));

  // Show the selected slide
  slides[currentSlideIndex].classList.add("active");
}

function changeSlide(n) {
  showSlide(currentSlideIndex + n);
}
