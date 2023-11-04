class Habitacion {
    constructor(public numero: number, public precio: number, public estado: string) {}

    reservar() {
        if (this.estado === 'disponible') {
            this.estado = 'reservada';
            return true;
        } else {
            return false;
        }
    }

    liberar() {
        if (this.estado === 'reservada') {
            this.estado = 'disponible';
            return true;
        } else {
            return false;
        }
    }
}

class Hotel {
    habitaciones: Habitacion[] = [];

    constructor(public nombre: string, public ubicacion: string) {}

    agregarHabitacion(habitacion: Habitacion) {
        this.habitaciones.push(habitacion);
    }
}

// Crear habitaciones
const habitacion1 = new Habitacion(101, 100, 'disponible');
const habitacion2 = new Habitacion(102, 120, 'disponible');
const habitacion3 = new Habitacion(201, 150, 'disponible');

// Crear hotel
const miHotel = new Hotel('Ejemplo Hotel', 'Ciudad Ejemplo');

// Agregar habitaciones al hotel
miHotel.agregarHabitacion(habitacion1);
miHotel.agregarHabitacion(habitacion2);
miHotel.agregarHabitacion(habitacion3);

// Probar interacciones
console.log(`Estado de la habitación 101 antes de reservar: ${habitacion1.estado}`);
const reservaExitosa = habitacion1.reservar();
console.log(`¿Reserva exitosa? ${reservaExitosa}`);
console.log(`Estado de la habitación 101 después de reservar: ${habitacion1.estado}`);

console.log(`Estado de la habitación 101 antes de liberar: ${habitacion1.estado}`);
const liberacionExitosa = habitacion1.liberar();
console.log(`¿Liberación exitosa? ${liberacionExitosa}`);
console.log(`Estado de la habitación 101 después de liberar: ${habitacion1.estado}`);
