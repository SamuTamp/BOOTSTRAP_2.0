document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark', 'shadow');
            navbar.classList.remove('bg-transparent', 'p-3');
            navbar.classList.add('p-2');
        } else {
            navbar.classList.remove('bg-dark', 'shadow', 'p-2');
            navbar.classList.add('bg-transparent', 'p-3');
        }
    });
}); 