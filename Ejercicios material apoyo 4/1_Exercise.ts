class Persona {
    nombre: string;
    edad: number;
    documentoIdentidad: string;

  constructor( nombre: string, edad: number, documentoIdentidad: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.documentoIdentidad = documentoIdentidad;
  }

  caminar() {
      console.log(`${this.nombre} está caminando.`);
  }

  hablar() {
      console.log(`${this.nombre} está hablando.`);
  }

  comer() {
      console.log(`${this.nombre} está comiendo.`);
  }
}


const persona1 = new Persona('Juan', 30, '12345678');
const persona2 = new Persona('María', 25, '87654321');
const persona3 = new Persona('carlos', 45 , '1458789');


console.log(`Nombre de persona1: ${persona1.nombre}`);
console.log(`Edad de persona2: ${persona2.edad}`);

persona1.caminar();
persona2.hablar();
persona1.comer();
persona3.comer();


