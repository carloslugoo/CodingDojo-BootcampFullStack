function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas
    };
    return pizza;
}

// Crear una pizza estilo Chicago
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

// Crear una pizza lanzada a mano
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

// Crear dos pizzas más con ingredientes personalizados
var pizza3 = pizzaOven("delgada", "tomate", ["queso cheddar"], ["pollo", "espinacas"]);
var pizza4 = pizzaOven("integral", "barbacoa", ["mozzarella", "gouda"], ["jamón", "piña"]);

console.log(pizza3);
console.log(pizza4);
