// La inmobiliaria “Sucasa” es una empresa dedicada a la compraventa de casas. Hacer un 
//programa en TypeScript que cumpla los siguientes requisitos o características/
//(programa básico-simulación)://
// a. Solicitar al usuario el costo de la casa.
// b. Solicitar al usuario el ingreso del tipo de inmueble (1. Usado 2. Nuevo)
// c. Calcular la comisión de la inmobiliaria en la venta así:
// • Si es usado, tiene el 10% de comisión basado en el costo de la vivienda.
// • Si es nuevo, tiene el 12% de la comisión basado en el costo de la vivienda.
// d. El sistema debe mostrar al usuario cuanto es el valor que recibe el propietario y 
//cuanto es el valor recibido por la inmobiliaria.//

let cost: number = 20000

function inmobiliaria(): void {
  let type: number = 3;

  while (type > 2 || type < 0) {
    type = 1
  }

  switch (type) {
    case 1: {
      let comisionUsado: number = cost * 0.1;
      let comisionInmo: number = cost * 0.9;

      console.log( `La casa ya estuvo en uso, la inmobiliaria tiene el derecho del 10% de la comisión sobre la venta realizada, es de ${comisionUsado} y la comisión que debe recibir el empleado es de ${comisionInmo}`);
    
      break;
    }
    case 2: {
      let comisionNuevo: number = cost * 0.12;
      let comisionInmo: number = cost * 0.9;

      console.log(`La casa esta para estrenar, la inmobiliaria tiene el derecho del 12% de la comisión sobre la venta realizada, es de ${comisionNuevo} y la comisión que debe recibir el empleado es de ${comisionInmo}`);
     

      break;
    }
  }
}

inmobiliaria();

