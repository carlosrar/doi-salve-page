// Main JavaScript file
document.addEventListener('DOMContentLoaded', function () {
    // Elementos
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');

        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });
});


