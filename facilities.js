// Facility gallery images
const facilityImages = {
  gym: ["images/gym4.jpg", "images/gym2.jpg", "images/gym3.jpg"],
  plants: ["images/gen2.jpg", "images/gen2.jpg", "images/gen1.jpg"],
  kitchen: ["images/kitch.jpg", "images/kitch.jpg"],
  parking: ["images/par1.jpg", "images/par2.jpg"],
  cafeteria: ["images/cafeteria1.jpg", "images/cafeteria2.jpg"],
  police: ["images/police1.jpg", "images/police2.jpg"],
  sitting: ["images/sitting1.jpg", "images/sitting2.jpg", "images/sitting3.jpg"],
  tennis: ["images/tennis1.jpg", "images/tennis2.jpg","images/tennis3.jpg"]
};

const cards = document.querySelectorAll(".facility-card");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentGallery = [];
let currentIndex = 0;

cards.forEach(card => {
  card.addEventListener("click", () => {
    const galleryName = card.getAttribute("data-gallery");
    currentGallery = facilityImages[galleryName];
    currentIndex = 0;
    showImage(currentGallery[currentIndex]);
    lightbox.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  showImage(currentGallery[currentIndex]);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  showImage(currentGallery[currentIndex]);
});

function showImage(src) {
  lightboxImg.style.opacity = 0;
  setTimeout(() => {
    lightboxImg.src = src;
    lightboxImg.style.opacity = 1;
  }, 200);
}

// Close when clicking outside image
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // <-- This line animates the icon
  navLinks.classList.toggle("active");
});


  AOS.init({
    duration: 1000, // Animation duration in ms
    easing: 'ease-in-out', // Animation easing
    once: false, // Whether animation should happen only once
  });