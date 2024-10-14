document.getElementById('revealButton').addEventListener('click', function() {
    const extraMessage = document.getElementById('extraMessage');

    // Cambia el estilo para que se muestre con una animación de desvanecimiento
    extraMessage.style.display = 'block';
    extraMessage.style.opacity = '0';
    extraMessage.style.transition = 'opacity 1s ease-in-out';

    // Activar la transición de opacidad
    setTimeout(() => {
        extraMessage.style.opacity = '1';
    }, 10); // Un pequeño retraso para activar la transición

    // Animación de rebote para el botón
    const button = this; // Referencia al botón
    button.style.transition = 'transform 0.2s ease';
    button.style.transform = 'scale(1.1)';

    // Regresa al tamaño original con un pequeño retraso
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200); // Regresa al tamaño original

    // Evitar que el botón afecte a los emojis
    const emojis = document.querySelectorAll('.decorative-emoji');
    emojis.forEach(emoji => {
        emoji.style.pointerEvents = 'none'; // No permitir interacciones
    });

    // Mostrar el mensaje extra con un pequeño retraso
    setTimeout(() => {
        extraMessage.classList.add('fadeIn'); // Clase para la animación de desvanecimiento
    }, 10);
});

// Manejo de eventos táctiles para dispositivos móviles
document.getElementById('revealButton').addEventListener('touchstart', function() {
    // Para una mejor respuesta táctil, se puede agregar un efecto visual
    this.style.transform = 'scale(1.1)';
});

document.getElementById('revealButton').addEventListener('touchend', function() {
    // Regresar al tamaño original al soltar
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});
