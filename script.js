// Real-time clock functionality for hero watch
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate angles (360 degrees = 12 hours for hour hand, 60 minutes for minute hand, 60 seconds for second hand)
    const hourAngle = (hours * 30) + (minutes * 0.5); // 30 degrees per hour + minute adjustment
    const minuteAngle = minutes * 6; // 6 degrees per minute
    const secondAngle = seconds * 6; // 6 degrees per second

    // Update watch hands
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');

    if (hourHand) hourHand.setAttribute('transform', `rotate(${hourAngle} 200 200)`);
    if (minuteHand) minuteHand.setAttribute('transform', `rotate(${minuteAngle} 200 200)`);
    if (secondHand) secondHand.setAttribute('transform', `rotate(${secondAngle} 200 200)`);
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Add smooth transition for watch hands
document.addEventListener('DOMContentLoaded', () => {
    const hands = ['hourHand', 'minuteHand', 'secondHand'];
    hands.forEach(handId => {
        const hand = document.getElementById(handId);
        if (hand) {
            hand.style.transition = 'transform 0.5s ease-in-out';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('.newsletter-input').value;
    alert('Thank you for subscribing! We\'ll keep you updated with our latest collections.');
    document.querySelector('.newsletter-input').value = '';
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Cart functionality (basic)
document.querySelector('.cart-icon').addEventListener('click', () => {
    alert('Cart functionality coming soon! Thank you for your interest.');
});

// Additional Interactive Features

// Watch hover effect - pause animation
document.querySelector('.hero-watch').addEventListener('mouseenter', () => {
    document.querySelector('.hero-watch').style.animationPlayState = 'paused';
});

document.querySelector('.hero-watch').addEventListener('mouseleave', () => {
    document.querySelector('.hero-watch').style.animationPlayState = 'running';
});

// Navbar mobile toggle (basic)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(0, 0, 0, 0.95)';
        navLinks.style.padding = '1rem';
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Fade in animation on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.product-card, .feature, .footer-section');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize fade in elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.product-card, .feature, .footer-section');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});   // Update clock every second
        setInterval(updateClock, 1000);
        updateClock(); // Initial call

        // Add smooth transition for watch hands
        document.addEventListener('DOMContentLoaded', () => {
            const hands = ['hourHand', 'minuteHand', 'secondHand'];
            hands.forEach(handId => {
                const hand = document.getElementById(handId);
                if (hand) {
                    hand.style.transition = 'transform 0.5s ease-in-out';
                }
            });
        });