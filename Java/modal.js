// Obtén el modal y el botón de cierre
var modal = document.getElementById("miModal");
var span = document.getElementsByClassName("close")[0];

// Abre el modal cuando la página se cargue
window.onload = function() {
    modal.style.display = "block";
};

// Cierra el modal cuando se hace clic en el botón de cierre
span.onclick = function() {
    modal.style.display = "none";
};

// Cierra el modal cuando se hace clic en cualquier lugar fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
