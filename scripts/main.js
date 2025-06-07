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

// Improved Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

hamburger?.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('nav-open');
    
    // Toggle between bars and times icons
    const icon = hamburger.querySelector('i');
    if (icon) {
        icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
    }
});

// Close menu when clicking outside or on a nav link
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && e.target !== hamburger) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('nav-open');
        
        // Ensure icon reverts to bars
        const icon = hamburger?.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});

// Smooth scrolling - Modified to work with new nav
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
            body.classList.remove('nav-open');
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
// Welcome Popup - Fixed Version
document.addEventListener('DOMContentLoaded', () => {
    const welcomePopup = document.getElementById('welcomePopup');
    const closePopupBtn = document.getElementById('closePopup');
    
    if (!welcomePopup) return; // Exit if no popup exists
    
    // Always show the popup (removed the lastVisit check)
    setTimeout(() => {
        welcomePopup.classList.add('active');
    }, 1000);
    
    // Close popup
    closePopupBtn?.addEventListener('click', () => {
        welcomePopup.classList.remove('active');
    });
    
    // Also close when clicking outside content
    welcomePopup.addEventListener('click', (e) => {
        if (e.target === welcomePopup) {
            welcomePopup.classList.remove('active');
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
  let currentIndex = 0;
  
  // Initial setup
  titles.forEach((title, index) => {
    title.style.display = index === 0 ? 'inline-block' : 'none';
    title.style.opacity = index === 0 ? '1' : '0';
  });
  
  function rotateText() {
    // Hide current title
    titles[currentIndex].style.display = 'none';
    titles[currentIndex].style.opacity = '0';
    
    // Move to next title
    currentIndex = (currentIndex + 1) % titles.length;
    
    // Show new title
    titles[currentIndex].style.display = 'inline-block';
    setTimeout(() => {
      titles[currentIndex].style.opacity = '1';
    }, 10);
  }
  
  // Start rotation
  setInterval(rotateText, 2000);
});