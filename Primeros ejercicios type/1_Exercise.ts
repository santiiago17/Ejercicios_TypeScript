// Los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, 
//libretas, cuadernos, pizarras, muebles, etc. Se utilizan para decorar y personalizar los// 
//productos de una manera barata y sencilla. Hacer un programa en JavaScript que cumpla los//
//siguientes requisitos o características (programa básico simulación)://
// a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
// • Costo pequeño es de 4000 y costo del grande 6000
// b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar 
//mínimo 10; Sino debe indicarse al usuario un numero correcto.
// c. El sistema debe arrojar cuanto es el costo total para pagar 



let pequeño: number = 4000;
let grande: number = 6000;
let tamaño: string | null = "2"

function stickers(): void {

  switch (tamaño) {

    case "1": {

      let cantidad: number = 9;

      while (cantidad < 10) {

        let cantidad: number = 32

        if (cantidad >= 10) {
          console.log(`Compraste ${cantidad} stickers`);

          let total: number = cantidad * pequeño;

          console.log(` El valor total es de $${total}`);

          break;
        } else if (cantidad < 10) {

          console.log(" Se vende un mínimo de 10 stickers");

        }
      }
      break;
    }
    case "2": {

      let cantidad: number = 9;

      while (cantidad < 10) {

        let cantidad: number = 25

        if (cantidad >= 10) {
          console.log(`Compraste ${cantidad} stickers`);

          let total: number = cantidad * grande;

          console.log(`El valor total es de $${total}`);

          break;
        } else if (cantidad < 10) {

          console.log("Se vende un mínimo de 10 stickers");

        }
      }
      break;
    }
  }
}

stickers();