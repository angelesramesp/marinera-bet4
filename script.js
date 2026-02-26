document.addEventListener("DOMContentLoaded", function() {

    let nombreGuardado = localStorage.getItem("nombreUsuario");

    if (!nombreGuardado) {
        nombreGuardado = prompt("Ingresa tu nombre:");
        localStorage.setItem("nombreUsuario", nombreGuardado);
    }

    document.getElementById("usuario").textContent = 
        "Bienvenida, " + nombreGuardado;

});

function cerrarSesion() {
    localStorage.removeItem("nombreUsuario");
    location.reload();
}