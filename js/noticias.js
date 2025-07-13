document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ocampo09.github.io/trabajofinaljs/data/noticias.json")
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
  
