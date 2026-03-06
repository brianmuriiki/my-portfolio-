document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.getElementById('mobile-menu');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenu.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Toggle class on navbar to show/hide links
    });

    // Smooth scroll for navigation links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Close mobile menu if open
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                }

                window.scrollTo({
                    top: targetSection.offsetTop - navbar.offsetHeight, // Adjust for fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Form Submission Alert for Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, you'd send this data to a server
            alert('Thank you for reaching out to Agri-Ventures! Your message has been sent, and our team will contact you shortly.');
            this.reset();
        });
    }
});