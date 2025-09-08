// Carga el archivo SVG externo
fetch('filters.svg')
  .then(response => response.text())
  .then(data => {
    // Inyecta el contenido SVG en la página
    document.body.insertAdjacentHTML('afterbegin', data);
  });

// Botón de regresar
function goBack() {
  document.body.classList.add("fade-out"); // activa desvanecimiento
  setTimeout(() => {
    window.history.back(); // vuelve a la página anterior
  }, 1000);
}

// Modal
function openModal(img) {
  const modal = document.getElementById("vampireModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("vampireModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("vampireModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

const iconoMusica = document.getElementById('activar-musica');
const audio = document.getElementById('bg-music');

// Rutas de las imágenes
const imgActiva = "images/altavoz_gotico.png";     // imagen normal
const imgMute = "images/altavoz_gotico_off.png";     // imagen con X o apagado

iconoMusica.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    iconoMusica.src = imgMute; // vuelve al altavoz normal
  } else {
    audio.pause();
    iconoMusica.src = imgActiva;   // cambia al altavoz con X
  }
});

// Función para la lectura de texto en voz
function leerTexto(elementId) {
  // Detener cualquier lectura anterior antes de iniciar una nueva
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  const texto = document.getElementById(elementId).innerText;
  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "es-ES";
  window.speechSynthesis.speak(voz);
}

// Nueva función para detener la lectura de voz
function detenerLectura() {
  window.speechSynthesis.cancel();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto-play cada 5 segundos
setInterval(() => { plusSlides(1); }, 5000);
