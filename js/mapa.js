document.addEventListener("DOMContentLoaded", () => {
    const mapa = L.map("mapa").setView([40.4168, -3.7038], 13); // Madrid
  
    // Capa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(mapa);
  
    // Marcador en el taller
    const taller = [40.4168, -3.7038]; // Madrid centro
    L.marker(taller).addTo(mapa)
      .bindPopup("Juan David | Taller de Carpintería")
      .openPopup();
  
    // Mostrar ruta si el cliente comparte ubicación
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const userCoords = [pos.coords.latitude, pos.coords.longitude];
  
        L.marker(userCoords).addTo(mapa).bindPopup("Tu ubicación").openPopup();
  
        const ruta = L.polyline([userCoords, taller], {
          color: "blue",
          weight: 3,
          opacity: 0.7,
          dashArray: "5, 10"
        }).addTo(mapa);
  
        mapa.fitBounds(ruta.getBounds());
      });
    }
  });
  