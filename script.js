document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Toggle the navigation menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close the navigation when clicked outside
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});
