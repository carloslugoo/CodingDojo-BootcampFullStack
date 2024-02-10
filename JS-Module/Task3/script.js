function sumar(id){
    let contador = document.getElementById(id);
    let likes = parseInt(contador.innerText);
    likes = likes + 1;
    contador.innerText = likes + " likes(s)";
}   