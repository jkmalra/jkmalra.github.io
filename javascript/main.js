// main.js - Production version with live backend integration
document.addEventListener('DOMContentLoaded', function () {
    // Header scroll effect
    const header = document.querySelector('header');
    const scrollThreshold = 50;

    function checkScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();

    // ---------Contact form submission handling-----------
    const contactForm = document.getElementById('hire-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData.entries());

            console.log("Sending form data to backend:", formObject);

            //  ------API request-------
            fetch('https://portfolio-api-edp8.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            })
            .then(response => {
                if (response.ok) {
                    showSuccessMessage();
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send form. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showErrorMessage();
            });
        });
    }

    function showSuccessMessage() {
        const successMessage = document.getElementById('form-success');
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }

    function showErrorMessage() {
        alert("Oops! Something went wrong. Please try again later.");
    }
});
