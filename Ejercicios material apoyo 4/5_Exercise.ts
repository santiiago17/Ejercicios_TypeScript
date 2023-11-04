class Electrodomestico {
    constructor(public precio: number, public color: string) {}
}

class Televisor extends Electrodomestico {
    constructor(precio: number, color: string, public tamaño: number) {
        super(precio, color);
    }
}

class Nevera extends Electrodomestico {
    constructor(precio: number, color: string, public capacidad: number) {
        super(precio, color);
    }
}

class Lavadora extends Electrodomestico {
    constructor(precio: number, color: string, public carga: number) {
        super(precio, color);
    }
}


const miTelevisor = new Televisor(1000, 'negro', 55);
const miNevera = new Nevera(800, 'blanco', 500);
const miLavadora = new Lavadora(600, 'gris', 8);


console.log(`Televisor - Precio: $${miTelevisor.precio}, Color: ${miTelevisor.color}, Tamaño: ${miTelevisor.tamaño} pulgadas`);
console.log(`Nevera - Precio: $${miNevera.precio}, Color: ${miNevera.color}, Capacidad: ${miNevera.capacidad} litros`);
console.log(`Lavadora - Precio: $${miLavadora.precio}, Color: ${miLavadora.color}, Carga máxima: ${miLavadora.carga} kg`);
