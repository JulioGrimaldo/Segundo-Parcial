function comprobarCredenciales() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Verificar que los campos no estén vacíos
    if (usuario === "" || contrasena === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Verificar las credenciales. Por ejemplo, comparar con credenciales predefinidas.
    if (usuario === "Julio" && contrasena === "1234") {
        // Credenciales válidas, redirige al usuario a la siguiente pantalla.
        window.location.href = "/index.html";
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
}