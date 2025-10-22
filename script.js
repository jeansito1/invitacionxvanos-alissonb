const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
const contenido = document.getElementById("contenido");

let isPlaying = false;

// Botón flotante play/pause, solo activa cuando #contenido está visible
musicBtn.addEventListener("click", () => {
  if (contenido.style.display === "block") {
    if (!isPlaying) {
      music.play().catch(e => console.log(e));
      isPlaying = true;
      musicBtn.textContent = "⏸️";
    } else {
      music.pause();
      isPlaying = false;
      musicBtn.textContent = "🔊";
    }
  }
});


const insigniaBtn = document.getElementById("insignia-btn");

insigniaBtn.addEventListener("click", () => {
  document.body.classList.add("fade-out"); // si tienes efecto fade-out
  setTimeout(() => {
    window.location.href = "invitacion.html"; // redirige
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const diasSpan = document.getElementById("dias");
  const horasSpan = document.getElementById("horas");
  const minutosSpan = document.getElementById("minutos");
  const segundosSpan = document.getElementById("segundos");

  const fechaObjetivo = new Date("November 21, 2025 00:00:00").getTime();

  function actualizarContador() {
    const ahora = new Date().getTime();
    const distancia = fechaObjetivo - ahora;

    if(distancia < 0){
      diasSpan.innerText = horasSpan.innerText = minutosSpan.innerText = segundosSpan.innerText = 0;
      return;
    }

    const dias = Math.floor(distancia / (1000*60*60*24));
    const horas = Math.floor((distancia % (1000*60*60*24)) / (1000*60*60));
    const minutos = Math.floor((distancia % (1000*60*60)) / (1000*60));
    const segundos = Math.floor((distancia % (1000*60)) / 1000);

    diasSpan.innerText = dias;
    horasSpan.innerText = horas;
    minutosSpan.innerText = minutos;
    segundosSpan.innerText = segundos;
  }

  actualizarContador();
  setInterval(actualizarContador, 1000);
});
const contadorSeccion = document.querySelector('.contador-seccion');

window.addEventListener('scroll', () => {
  const rect = contadorSeccion.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    contadorSeccion.classList.add('visible');
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-scroll");
  const frases = document.querySelectorAll(".frase, .frase2");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
  frases.forEach(el => observer.observe(el)); // frases se animan aparte
});
