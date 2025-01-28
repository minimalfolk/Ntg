// Toggle hamburger menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
}

// Close the menu when the close button or outside of the menu is clicked
function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('open');
}

// Close the menu if the user clicks outside of the navigation
document.addEventListener('click', function (event) {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('open');
    }
});
