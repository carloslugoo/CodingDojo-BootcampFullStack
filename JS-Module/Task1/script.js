function removerBoton(element){
    element.remove();
}
function cerrarSesion(element) {
    console.log(element)
    if (element.innerText === "Iniciar sesion") {
        element.innerText = "Cerrar Sesion";
    } else {
        element.innerText = "Iniciar sesion";
    }
}
