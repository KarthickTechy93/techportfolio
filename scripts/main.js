// Theme Toggle - Fixed Version
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Set dark mode as default
html.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');

// Update icon to sun (since dark is default)
const themeIcon = themeToggle?.querySelector('i');
if (themeIcon) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle?.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    }
});

// Mobile Navigation - No changes needed
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scrolling - No changes needed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks?.classList.remove('active');
            hamburger?.classList.remove('active');
        }
    });
});

// Form submission - No changes needed
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Welcome Popup - Fixed Version
document.addEventListener('DOMContentLoaded', () => {
    const welcomePopup = document.getElementById('welcomePopup');
    const closePopupBtn = document.getElementById('closePopup');
    
    if (!welcomePopup) return; // Exit if no popup exists
    
    // Only show popup if it's the first visit or after a certain period
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().getTime();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    
    if (!lastVisit || (now - lastVisit) > oneWeek) {
        setTimeout(() => {
            welcomePopup.classList.add('active');
        }, 1000);
    }
    
    // Close popup and record visit
    closePopupBtn?.addEventListener('click', () => {
        welcomePopup.classList.remove('active');
        localStorage.setItem('lastVisit', now.toString());
    });
    
    // Also close when clicking outside content
    welcomePopup.addEventListener('click', (e) => {
        if (e.target === welcomePopup) {
            welcomePopup.classList.remove('active');
            localStorage.setItem('lastVisit', now.toString());
        }
    });
});

// Animation on scroll - No changes needed
document.addEventListener('DOMContentLoaded', () => {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section, .project-card, .skill-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const totalImages = images.length;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    // Optional: Auto-rotate every 5 seconds
    setInterval(showNextImage, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
  const rotatingTitle = document.querySelector('.rotating-title');
  const titles = Array.from(rotatingTitle.querySelectorAll('.title'));
  const baseText = "";
  let currentIndex = 0;
  
  // Initial setup
  rotatingTitle.textContent = baseText + titles[0].textContent;
  titles[0].classList.add('active');
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % titles.length;
    rotatingTitle.textContent = baseText + titles[currentIndex].textContent;
  }, 2000);
});