// Función para obtener la ubicación geográfica
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerHTML = "Geolocalización no es soportada por este navegador.";
    }
}

// Mostrar la ubicación
function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const location = `Latitud: ${lat}° | Longitud: ${lon}°`;
    document.getElementById("location").innerHTML = location;
}

// Manejo de errores si no se puede obtener la ubicación
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML = "Permiso para obtener la ubicación denegado.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML = "Ubicación no disponible.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML = "Tiempo de espera agotado.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location").innerHTML = "Error desconocido.";
            break;
    }
}

// Función para actualizar la hora y la fecha
function updateDateTime() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const date = now.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const time = `${hours}:${minutes}:${seconds}`;

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}

// Llamar a las funciones al cargar la página
window.onload = function() {
    getLocation();
    setInterval(updateDateTime, 1000); // Actualizar la hora cada segundo
};
