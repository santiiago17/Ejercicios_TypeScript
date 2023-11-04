class FiguraGeometrica {
    constructor() {
      if (new.target === FiguraGeometrica) {
        throw new Error("No puedes instanciar un objeto de la clase abstracta FiguraGeometrica.");
      }
    }
  
    area() {
      throw new Error("El método area() debe ser implementado en las subclases.");
    }
  }
  
  class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;
    constructor(base:number, altura:number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    area() {
      return (this.base * this.altura) / 2;
    }
  }
  
  class Circulo extends FiguraGeometrica {
    radio: number;
    constructor(radio:number) {
      super();
      this.radio = radio;
    }
  
    area() {
      return Math.PI * Math.pow(this.radio, 2);
    }
  }
  
  class Cuadrado extends FiguraGeometrica {
    lado: number;
    constructor(lado:number) {
      super();
      this.lado = lado;
    }
  
    area() {
      return Math.pow(this.lado, 2);
    }
  }
  
  
  let triangulo = new Triangulo(5, 3);
  let circulo = new Circulo(7);
  let cuadrado = new Cuadrado(4);
  
  console.log(`El área del triángulo es: ${triangulo.area()}`);
  console.log(`El área del círculo es: ${circulo.area()}`);
  console.log(`El área del cuadrado es: ${cuadrado.area()}`);
  