const car = document.getElementById('car');
let positionX = 375; // Posición inicial en el eje X (centrado)
let positionY = 20;  // Posición inicial en el eje Y
let speed = 10; // Velocidad de movimiento del coche

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        positionX += speed;  // Mover a la derecha
        if (positionX > 750) positionX = 750; // Limitar el movimiento al borde derecho
        car.style.left = `${positionX}px`;
        car.classList.add('drifting');  // Activar el efecto de drift
    } else if (event.key === 'ArrowLeft') {
        positionX -= speed;  // Mover a la izquierda
        if (positionX < 0) positionX = 0; // Limitar el movimiento al borde izquierdo
        car.style.left = `${positionX}px`;
        car.classList.add('drifting');  // Activar el efecto de drift
    } else if (event.key === 'ArrowDown') {
        positionY -= speed;  // Mover hacia arriba (reduce `bottom`)
        if (positionY < 20) positionY = 20; // Limitar el movimiento hacia arriba
        car.style.bottom = `${positionY}px`;
    } else if (event.key === 'ArrowUp') {
        positionY += speed;  // Mover hacia abajo (aumenta `bottom`)
        if (positionY > 300) positionY = 300; // Limitar el movimiento hacia abajo
        car.style.bottom = `${positionY}px`;
    }

    // Desactivar el drift cuando se suelta una tecla
    setTimeout(() => {
        car.classList.remove('drifting');
    }, 100);  // Desactiva el drift 100ms después de que se suelta la tecla
});
