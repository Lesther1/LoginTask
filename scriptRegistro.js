const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function() {
    
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.toString();
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const confirma = document.getElementById("confirma").value;
    verificarDatos(nombre, usuario, contrasena, confirma);
});

// verificar datos completos
function verificarDatos(nombre, usuario, contrasena, confirma) {
    if (nombre === "") {
        swal("Error al registrar!", "Debe ingresar un nombre!", "error");
    } else if (usuario === "") {
        swal("Error al registrar!", "Debe ingresar un nombre de usuario para iniciar sesión!", "error");
    } else if (contrasena === "" || confirma === "") {
        swal("Error al registrar!", "Debe ingresar una contraseña y confirmarla!", "error");
    } else {
        confirmarContrasena(nombre, usuario, contrasena, confirma);
    }
}

// confirmar contraseña
function confirmarContrasena(nombre, usuario, contrasena, confirma) {
    if (confirma === contrasena) {
        registrarUsuario(nombre, usuario, contrasena);
        
    } else {
        swal("Error al registrar!", "Las contraseñas no coinciden!", "error");
    }
}

// registrar usuario
function registrarUsuario(nombre, usuario, contrasena) {
    const usuariosRegistradosStr = localStorage.getItem('usuarios');
    let usuariosRegistrados = [];

    if (usuariosRegistradosStr) {
        usuariosRegistrados = JSON.parse(usuariosRegistradosStr);
    }

    const usuarioExistente = usuariosRegistrados.find(u => u.usuario === usuario);

    if (usuarioExistente) {
        swal("Error al registrar!", "El usuario ya existe!", "error");
    } else {
        const nuevoUsuario = {
            nombre: nombre,
            usuario: usuario,
            contrasena: contrasena
        };

        usuariosRegistrados.push(nuevoUsuario);

        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

        swal("Éxito!", "Usuario Registrado!", "success").then(() => {
            window.location.href = "InicioSesion.html";
        });
    }
}

