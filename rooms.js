// =====================
// ✅ NAVBAR TOGGLE
// =====================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // Animate icon
  navLinks.classList.toggle("active");   // Toggle mobile menu
});


// ===============
// ✅ Tabs Control
// ===============
const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.block-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // deactivate all
    tabButtons.forEach(b => b.classList.remove('active'));
    panels.forEach(p => {
      p.classList.remove('active');
      p.hidden = true;
    });

    // activate clicked tab
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.target);
    target.classList.add('active');
    target.hidden = false;
  });
});

// ===============
// ✅ Book Now Buttons
// ===============
document.querySelectorAll('.book-btn').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const bookingUrl = button.dataset.booking;
    if (bookingUrl) {
      window.open(bookingUrl, '_blank');
    } else {
      alert('Booking platform not yet available.');
    }
  });
});

// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Lightbox functionality for images
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            // Create lightbox overlay
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${this.src}" alt="${this.alt}">
                    <span class="lightbox-caption">${this.alt}</span>
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            // Close lightbox
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    document.body.removeChild(lightbox);
                }
            });
            
            // Close with Escape key
            document.addEventListener('keydown', function closeLightbox(e) {
                if (e.key === 'Escape') {
                    document.body.removeChild(lightbox);
                    document.removeEventListener('keydown', closeLightbox);
                }
            });
        });
    });
    
    // Video play functionality
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    
    videoWrappers.forEach(wrapper => {
        const video = wrapper.querySelector('video');
        const overlay = wrapper.querySelector('.video-play-overlay');
        
        // Click overlay to play video
        overlay.addEventListener('click', function() {
            video.play();
            wrapper.classList.add('playing');
        });
        
        // Show overlay when video is paused
        video.addEventListener('pause', function() {
            wrapper.classList.remove('playing');
        });
        
        // Show overlay when video ends
        video.addEventListener('ended', function() {
            wrapper.classList.remove('playing');
        });
        
        // Click video to toggle play/pause
        video.addEventListener('click', function(e) {
            e.stopPropagation();
            if (video.paused) {
                video.play();
                wrapper.classList.add('playing');
            } else {
                video.pause();
                wrapper.classList.remove('playing');
            }
        });
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
