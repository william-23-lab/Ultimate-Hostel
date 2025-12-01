// =====================
// ✅ NAVBAR TOGGLE
// =====================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // Animate icon
  navLinks.classList.toggle("active");   // Toggle mobile menu
});

// Add this to your existing JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.rooms-slider-modern');
    const prevBtn = document.querySelector('.room-btn-modern.prev');
    const nextBtn = document.querySelector('.room-btn-modern.next');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const cardWidth = document.querySelector('.room-card-modern').offsetWidth + 30; // width + gap
    
    function updateSlider() {
        slider.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = Math.floor(slider.scrollWidth / cardWidth) - 1;
        }
        updateSlider();
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        const maxIndex = Math.floor(slider.scrollWidth / cardWidth) - 1;
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });
    
    // Indicator clicks
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateSlider();
        });
    });
    
    // Auto slide (optional)
    let autoSlide = setInterval(() => {
        const maxIndex = Math.floor(slider.scrollWidth / cardWidth) - 1;
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 5000);
    
    // Pause auto slide on hover
    slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            const maxIndex = Math.floor(slider.scrollWidth / cardWidth) - 1;
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }, 5000);
    });
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
