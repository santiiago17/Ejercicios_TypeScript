// “Lavan Ya” es un servicio de limpieza en el que los clientes envían sus prendas para que se 
//laven y se planchen en un lugar determinado. Hacer un programa en TypeScript que cumpla//
//los siguientes requisitos o características (programa básico-simulación)://
// a. El cliente escoge entre dos servicios: lavado o planchado.
// b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
// c. Se solicita la cantidad de prendas.
// d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
// • Lavado en seco: 2000 por prenda
// • Lavado normal: 1500 por prenda
// • Planchado: 1800 por prenda
// e. Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es 
//gratis.//

let counterPrendas: number = 0;
let seco: number = 2000;
let normal: number = 1500;
let planchado: number = 1800;
let domicilio: number = 3000;
let servicio: string | null = "Lavado"

function lavanya(): void {
  switch (servicio) {
    case "Lavado": {
      let lavado: string | null = "1"

      switch (lavado) {
        case "1": {
          let cantidadPrendas: number = 3

          cantidadPrendas *= seco;

          let domiciliogratis: string | null = "1"

          switch (domiciliogratis) {
            case "1": {
              console.log (`El costo de el servicio elegido es de ${cantidadPrendas} y el domicilio no tiene ningun cosoto,es totalmente gratis`);
              break;
            }
            case "2": {
              console.log (`El costo de el servicio elegido es de ${cantidadPrendas}, no se hace uso del servicio del domicilio`);
              break;
            }
          }
          break;
        }
        case "2": {
          let cantidadPrendas: number = 4

          cantidadPrendas *= normal;

          let domiciliogratis: string | null = "1"

          switch (domiciliogratis) {
            case "1": {
              console.log (`El costo de el servicio elegido es de ${cantidadPrendas} y el domicilio no tiene ningun costo,es totalmente gratis`);
              break;
            }
            case "2": {
              console.log (`El costo de el servicio elegido es de ${cantidadPrendas}, no se hace el uso del servicio del domicilio`);
              break;
            }
          }
          break;
        }
      }
      break;
    }
    case "Planchado": {
      let cantidadPrendas: number = 5

      cantidadPrendas *= planchado;

      console.log (`El costo de el servicio elegido es de ${cantidadPrendas}`);

      let domicilio: string | null = "2"

      switch (domicilio) {
        case "1": {
          console.log (`El costo total sería de ${cantidadPrendas + domicilio} con domicilio incluido :)`);
          break;
        }
        case "2": {
          console.log (`Es un gusto servirle, l@ esperamos nuevamente :)`);
          break;
        }
      }
      break;
    }
  }
}

lavanya();