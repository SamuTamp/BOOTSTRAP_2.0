document.addEventListener("DOMContentLoaded", function() {
    // Seleziona l'elemento della navbar dal documento HTML usando la sua classe CSS
    const navbar = document.querySelector('.navbar');
    // Aggiunge un "ascoltatore" (listener) all'evento di scorrimento (scroll) della finestra.
    // Questa funzione viene eseguita ogni volta che l'utente muove la pagina.
    window.addEventListener('scroll', function() {
        // Controlla la posizione verticale dello scroll (window.scrollY).
        // Se l'utente è sceso di più di 50 pixel dall'alto:
        if (window.scrollY > 50) {
            // 1. Aggiunge lo sfondo scuro (bg-dark) e l'ombra (shadow) per renderla leggibile
            navbar.classList.add('bg-dark', 'shadow');
            // 2. Rimuove lo sfondo trasparente e il padding grande originale (p-3)
            navbar.classList.remove('bg-transparent', 'p-3');
            // 3. Aggiunge un padding più piccolo (p-2) per rendere la barra più sottile/compatta
            navbar.classList.add('p-2');
        } else {
            // ALTRIMENTI (se l'utente è tornato in cima alla pagina, meno di 50px):
            // 1. Rimuove lo sfondo scuro, l'ombra e il padding piccolo
            navbar.classList.remove('bg-dark', 'shadow', 'p-2');
            // 2. Ripristina lo sfondo trasparente e il padding grande originale
            navbar.classList.add('bg-transparent', 'p-3');
        }
    });
});