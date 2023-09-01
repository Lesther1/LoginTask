document.addEventListener('DOMContentLoaded', function () {
    const sesionIniciada = localStorage.getItem('sesionIniciada');

    if (!sesionIniciada || sesionIniciada !== 'true') {
        window.location.href = "InicioSesion.html";
    }
    const nombreUsuario = localStorage.getItem('nombreUsuario');

    if (nombreUsuario) {
        document.getElementById('bienvenidoTexto').textContent = `Bienvenido ${nombreUsuario}`;
        document.getElementById('bienvenidoTexto2').textContent = `Hola ${nombreUsuario}`;
    }
});
const cerrar = document.getElementById('cerrarSesion');
cerrar.addEventListener('click', function () {
    localStorage.removeItem('sesionIniciada');
    localStorage.removeItem('nombreUsuario');
    window.location.href = "InicioSesion.html";
});