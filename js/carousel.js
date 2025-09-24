let slideIndex = 0;
let slides, dotsContainer, autoPlayInterval;

function initCarousel() {
  slides = document.querySelectorAll(".slide");
  dotsContainer = document.querySelector(".dots");
  dotsContainer.innerHTML = "";

  slides.forEach((_, i) => {
    let dot = document.createElement("span");
    dot.addEventListener("click", () => {
      showSlide(i);
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    changeSlide(-1);
  });
  document.querySelector(".next").addEventListener("click", () => {
    changeSlide(1);
  });

  showSlide(slideIndex);
  startAutoplay();
}

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dotsContainer.querySelectorAll("span").forEach(dot => dot.classList.remove("active"));

  slideIndex = (index + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");
  dotsContainer.children[slideIndex].classList.add("active");
}

function changeSlide(n) {
  showSlide(slideIndex + n);
  resetAutoplay();
}

function startAutoplay() {
  autoPlayInterval = setInterval(() => {
    showSlide(slideIndex + 1);
  }, 5000);
}

function resetAutoplay() {
  clearInterval(autoPlayInterval);
  startAutoplay();
}

document.addEventListener("DOMContentLoaded", initCarousel);
