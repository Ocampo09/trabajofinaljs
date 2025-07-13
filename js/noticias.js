document.addEventListener("DOMContentLoaded", function () {
    fetch("https:./data/noticias.json")
      .then((response) => response.json())
      .then((data) => {
        const contenedor = document.getElementById("contenedor-noticias");
        data.forEach((noticia) => {
          const noticiaDiv = document.createElement("div");
          noticiaDiv.className = "noticia";
  
          const titulo = document.createElement("h3");
          titulo.textContent = noticia.titulo;
  
          const contenido = document.createElement("p");
          contenido.textContent = noticia.contenido;
  
          noticiaDiv.appendChild(titulo);
          noticiaDiv.appendChild(contenido);
          contenedor.appendChild(noticiaDiv);
        });
      })
      .catch((error) => {
        console.error("Error cargando las noticias:", error);
      });
  });
// 1. Animación fade-in al hacer scroll
const elementosFade = document.querySelectorAll('.servicio');
const observerFade = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('show');
    }
  });
});
elementosFade.forEach((el) => {
  el.classList.add('fade-in');
  observerFade.observe(el);
});

// 2. Slider de testimonios
const testimonios = [
  "“Un trabajo impecable y a tiempo.” – Laura G.",
  "“La casa de madera superó nuestras expectativas.” – Pedro M.",
  "“Muy profesional y detallista.” – Ana C."
];
let iTestimonio = 0;
const mensajeElemento = document.getElementById("mensaje-testimonio");
if (mensajeElemento) {
  mensajeElemento.textContent = testimonios[0];
  setInterval(() => {
    iTestimonio = (iTestimonio + 1) % testimonios.length;
    mensajeElemento.textContent = testimonios[iTestimonio];
  }, 5000);
}
