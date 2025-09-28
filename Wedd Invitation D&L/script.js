
    // Show/hide navigation on scroll
    const navbar = document.getElementById('navbar');
    const hero = document.querySelector('#hero');
    
    window.addEventListener('scroll', () => {
        const heroHeight = hero.offsetHeight;
        if (window.scrollY > heroHeight - 100) {
            navbar.classList.add('is-visible');
        } else {
            navbar.classList.remove('is-visible');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const rsvpForm = document.getElementById('rsvpForm');
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your RSVP! We look forward to celebrating with you.';
        successMessage.style.padding = '1rem';
        successMessage.style.marginTop = '1rem';
        successMessage.style.backgroundColor = '#D4AF37';
        successMessage.style.color = 'white';
        successMessage.style.borderRadius = '4px';
        
        rsvpForm.appendChild(successMessage);
        
        // Reset form
        rsvpForm.reset();
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });

     function toggleAccordion(header) {
            const content = header.nextElementSibling;
            const allHeaders = document.querySelectorAll('.accordion-header');
            const allContents = document.querySelectorAll('.accordion-content');
            
            // Close all other accordions
            allHeaders.forEach(h => {
                if (h !== header) {
                    h.classList.remove('active');
                }
            });
            
            allContents.forEach(c => {
                if (c !== content) {
                    c.classList.remove('active');
                }
            });
            
            // Toggle current accordion
            header.classList.toggle('active');
            content.classList.toggle('active');
        }

    // Countdown Timer
    // Set the wedding date
    const weddingDate = new Date('August 31, 2035 16:30:00').getTime();
    
    // Update the countdown every 1 second
    const countdownInterval = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the wedding date
        const distance = weddingDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = '<div class="countdown-item"><span class="countdown-value">The</span><span class="countdown-label">Wedding</span></div><div class="countdown-item"><span class="countdown-value">Day</span><span class="countdown-label">Has</span></div><div class="countdown-item"><span class="countdown-value">Arrived!</span><span class="countdown-label"></span></div>';
        }
    }, 1000);
