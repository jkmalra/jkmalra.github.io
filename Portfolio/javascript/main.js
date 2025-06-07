// main.js - Enhanced version
document.addEventListener('DOMContentLoaded', function () {
    // Header scroll effect
    const header = document.querySelector('header');
    const scrollThreshold = 50; // Reduced threshold for more noticeable effect

    // Add initial check
    checkScroll();

    // Optimized scroll handler
    function checkScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
            console.log('Navbar scrolled state activated');
        } else {
            header.classList.remove('scrolled');
            console.log('Navbar normal state');
        }
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', checkScroll, { passive: true });

    // Contact form submission handling
    const contactForm = document.getElementById('hire-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData.entries());

            console.log('Form submitted with data:', formObject);

            // Here you would typically send the data to your server
            // For now, we'll simulate a successful submission
            simulateFormSubmission();
        });
    }

    function simulateFormSubmission() {
        const successMessage = document.getElementById('form-success');

        // Show success message
        successMessage.style.display = 'block';

        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
            successMessage.style.display = 'none';
        }, 5000);

        console.log('Form submission simulated successfully');
    }

    // For production, you would replace simulateFormSubmission() with actual AJAX call:
    /*
    function submitFormData(formData) {
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            showSuccessMessage();
        })
        .catch((error) => {
            console.error('Error:', error);
            showErrorMessage();
        });
    }
    */

    /*To implement actual form submission in production, you would:
        Uncomment the submitFormData function
        Replace the endpoint URL with your actual backend endpoint
        Replace simulateFormSubmission() with submitFormData(formObject)
        Add proper error handling and user feedback
     */
});