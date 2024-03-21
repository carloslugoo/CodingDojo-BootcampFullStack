class Ninja {
    constructor(nombre, salud = 100, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName() {
        console.log(`Soy el ninja ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fuerza: ${this.fuerza}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`¡Salud incrementada en 10! Salud actual: ${this.salud}`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200, 10, 10);
        this.sabiduria = 10;
    }
    speakWisdom() {
        super.drinkSake(); // Llama al método drinkSake() de la clase Ninja
        console.log(`"${this.generateWisdom()}"`);
    }
    generateWisdom() {
      // Método auxiliar para generar mensajes de sabiduría
        return "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.";
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();