const boton = document.getElementById("iniciar");

boton.addEventListener("click", function(e) {
    e.preventDefault();
    const usuario = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    const usuariosRegistradosStr = localStorage.getItem('usuarios');
    let usuariosRegistrados = [];

    if (usuariosRegistradosStr) {
        usuariosRegistrados = JSON.parse(usuariosRegistradosStr);
    }

    const usuarioExistente = usuariosRegistrados.find(u => u.usuario === usuario);

    if (usuarioExistente) {
        if (usuarioExistente.contrasena === pass) {
            localStorage.setItem('sesionIniciada', 'true');
            localStorage.setItem('nombreUsuario', usuarioExistente.nombre);
            window.location.href = "index.html";
        } else {
            swal("Error al iniciar!", "Contrasena incorrecta!", "error");
        }
    } else {
        swal("Error al iniciar!", "El usuario no existe!", "error");
        document.getElementById("user").value = "";
        document.getElementById("pass").value = "";
    }
});
