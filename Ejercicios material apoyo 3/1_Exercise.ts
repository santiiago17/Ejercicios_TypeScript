interface Vehicle {
    model: string;
    year: number;
    color: string;
    // Puedes añadir más propiedades comunes aquí
}

interface Car extends Vehicle {
    doors: number;
}

interface Motorcycle extends Vehicle {
    engineDisplacement: number;
}

class VehicleInfo implements Car, Motorcycle {
    model: string;
    year: number;
    color: string;
    doors: number;
    engineDisplacement: number;

    constructor(model: string, year: number, color: string, doors: number, engineDisplacement: number) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.doors = doors;
        this.engineDisplacement = engineDisplacement;
    }
}

// Ejemplo de uso
const myCar = new VehicleInfo('Toyota', 2022, 'Rojo', 4, 2000);
console.log(myCar);
