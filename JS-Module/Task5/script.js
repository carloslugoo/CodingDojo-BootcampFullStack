const temperatureSelector = document.getElementById('temperature-selector');
const maxTemps = document.querySelectorAll('.max');
const minTemps = document.querySelectorAll('.min');


function convertirTemperatura(maxTemperatura, minTemperatura, unidad) {
    if (unidad === 'f') {
        // Convertir a Fahrenheit
        maxTemperatura.textContent = Math.round((parseInt(maxTemperatura.textContent) * 9/5) + 32);
        minTemperatura.textContent = Math.round((parseInt(minTemperatura.textContent) * 9/5) + 32);
    } else {
        // Dejar en Celsius (por defecto)
        maxTemperatura.textContent = Math.round((parseInt(maxTemperatura.textContent) - 32) * 5/9);
        minTemperatura.textContent = Math.round((parseInt(minTemperatura.textContent) - 32) * 5/9);
    }
}


temperatureSelector.addEventListener('change', function() {
    const unidadSeleccionada = temperatureSelector.value;
    
    maxTemps.forEach((maxTemp, index) => {
        const minTemp = minTemps[index];
        convertirTemperatura(maxTemp, minTemp, unidadSeleccionada);
    });
});

function buttonAccept(element){
    var cookies = document.getElementById("cookiesDiv");
    cookies.style.display = "none";
}