    const logo = document.querySelector('.html-logo');
    const toggleButton = document.getElementById('toggleAnimation');

    let isAnimating = true;

    toggleButton.addEventListener('click', () => {
        if (isAnimating) {
            logo.style.animationPlayState = 'paused'; // Pause the animation
            toggleButton.textContent = 'Resume Animation'; // Change button text
        } else {
            logo.style.animationPlayState = 'running'; // Resume the animation
            toggleButton.textContent = 'Pause Animation'; // Change button text
        }
        isAnimating = !isAnimating; // Toggle the state
    });

    const speedControl = document.getElementById('speedControl');

    speedControl.addEventListener('input', () => {
        const speed = speedControl.value;
        logo.style.animationDuration = speed + 's'; // Change animation duration
    });

    const speedControl = document.getElementById('speedControl');

    speedControl.addEventListener('input', () => {
        const speed = speedControl.value;
        logo.style.animationDuration = speed + 's'; // Change animation duration
    });
    document.addEventListener('DOMContentLoaded', () => {
        const contactForm = document.querySelector('form');

        // Validate form on submit
        contactForm.addEventListener('submit', (e) => {
            const firstName = document.getElementById('firstName');
            const lastName = document.getElementById('lastName');
            const password = document.getElementById('password');
            const phone = document.getElementById('phone');

            // Check if required fields are filled
            if (firstName.value.trim() === '' || lastName.value.trim() === '' || password.value.trim() === '' || phone.value.trim() === '') {
                e.preventDefault(); // Prevent form submission
                alert('Please fill in all required fields.');
            }
        });

        // Autofocus on first input when the page loads
        document.getElementById('firstName').focus();

        // Add input event listeners for real-time validation
        const inputs = [firstName, lastName, password, phone];

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.value.trim() === '') {
                    input.style.borderColor = 'red'; // Highlight empty fields
                } else {
                    input.style.borderColor = ''; // Reset border color
                }
            });
        });
    });