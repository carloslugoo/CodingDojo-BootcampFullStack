function cambiarNombre() {
var nombre = prompt("Tu nuevo nombre:");
document.getElementById('name').textContent = nombre;
}

function removeItem(element) {
    var listItem = element.closest('.card-list-item');
    listItem.remove();
}
function accept(element){
    var listItem = element.closest('.card-list-item');
    listItem.remove();

    var num = document.getElementById('num');
    let numcount = parseInt(num.innerText);
    numcount++;
    num.innerText = numcount
}