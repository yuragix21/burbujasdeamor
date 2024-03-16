const container = document.getElementById('container');
const numCircles = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio de círculos entre 1 y 10

for (let i = 0; i < numCircles; i++) {
  if (Math.random() < 0.5) {
    createCircle('circle'); // Llama a createCircle para el círculo 'circle'
  } else {
    createCircle('circle2'); // Llama a createCircle para el círculo 'circle2'
  }
}

function createCircle(className) {
  const circle = document.createElement('div');
  circle.classList.add(className); // Agrega la clase recibida como argumento
  container.appendChild(circle);

  const maxX = window.innerWidth - circle.offsetWidth;
  const maxY = window.innerHeight - circle.offsetHeight;

  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  moveCircle(circle, maxX, maxY);
}

function moveCircle(circle, maxX, maxY) {
  let speedX = (Math.random() - 0.5) * 5; // Velocidad horizontal aleatoria
  let speedY = (Math.random() - 0.5) * 5; // Velocidad vertical aleatoria

  setInterval(() => {
    let x = circle.offsetLeft + speedX;
    let y = circle.offsetTop + speedY;

    if (x < 0) {
      x = 0;
      speedX *= -1;
    } else if (x > maxX) {
      x = maxX;
      speedX *= -1;
    }

    if (y < 0) {
      y = 0;
      speedY *= -1;
    } else if (y > maxY) {
      y = maxY;
      speedY *= -1;
    }

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  }, 30); // Intervalo de actualización de movimiento (en milisegundos)
}
