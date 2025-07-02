document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-presupuesto");
    const producto = document.getElementById("producto");
    const plazo = document.getElementById("plazo");
    const extras = document.querySelectorAll(".extra");
    const resultado = document.getElementById("resultado");
  
    function calcularPresupuesto() {
      let base = parseFloat(producto.value);
      let extraTotal = 0;
  
      extras.forEach(extra => {
        if (extra.checked) {
          extraTotal += parseFloat(extra.value);
        }
      });
  
      let total = base + extraTotal;
  
      const dias = parseInt(plazo.value);
      if (dias < 30) total *= 0.9; // 10% de descuento por entrega rápida
  
      resultado.textContent = total.toFixed(2) + " €";
    }
  
    producto.addEventListener("change", calcularPresupuesto);
    plazo.addEventListener("input", calcularPresupuesto);
    extras.forEach(extra => extra.addEventListener("change", calcularPresupuesto));
  
    form.addEventListener("input", calcularPresupuesto);
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const apellidos = document.getElementById("apellidos").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const email = document.getElementById("email").value.trim();
      const condiciones = document.getElementById("condiciones").checked;
  
      const soloLetras = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/;
      const soloNumeros = /^\d{9}$/;
      const emailValido = /^[\w._-]+@\w+\.[a-z]{2,}$/i;
  
      if (
        !soloLetras.test(nombre) || nombre.length > 15 ||
        !soloLetras.test(apellidos) || apellidos.length > 40 ||
        !soloNumeros.test(telefono) ||
        !emailValido.test(email) ||
        !condiciones
      ) {
        alert("Por favor, rellena todos los campos correctamente.");
        return;
      }
  
      alert("¡Formulario enviado con éxito!");
      form.reset();
      calcularPresupuesto();
    });
  });
  