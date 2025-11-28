// =====================
// ✅ NAVBAR TOGGLE
// =====================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // Animate icon
  navLinks.classList.toggle("active");   // Toggle mobile menu
});

// =====================
// ✅ ROOMS SLIDER (AUTO + MANUAL)
// =====================
const slider = document.querySelector(".rooms-slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let index = 0;

function slideRooms() {
  const cards = document.querySelectorAll(".room-card").length;
  const visible = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : window.innerWidth <= 1024 ? 3 : 4;
  const maxIndex = cards - visible;
  index = (index + 1) % (maxIndex + 1);
  slider.style.transform = `translateX(-${index * (100 / visible)}%)`;
}

let autoSlide = setInterval(slideRooms, 4000);

nextBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  slideRooms();
  autoSlide = setInterval(slideRooms, 4000);
});

prevBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  index = index === 0 ? 0 : index - 1;
  const visible = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : window.innerWidth <= 1024 ? 3 : 4;
  slider.style.transform = `translateX(-${index * (100 / visible)}%)`;
  autoSlide = setInterval(slideRooms, 4000);
});

// =====================
// ✅ AOS ANIMATIONS INIT
// =====================
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false,
});

// =====================
// ✅ HERO IMAGE SLIDER (AUTO + DOTS)
// =====================
// HERO SLIDER (Auto + Dots)
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
let current = 0;
let interval;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots button");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function startAuto() {
  interval = setInterval(nextSlide, 7000);
}

function resetAuto() {
  clearInterval(interval);
  startAuto();
}

// Manual navigation via dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    resetAuto();
  });
});

// Start autoplay
startAuto();
