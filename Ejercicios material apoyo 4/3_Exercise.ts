class Vehiculo {
    tipo: string;

    constructor(tipo: string) {
      this.tipo = tipo;
    }
  
    desplazarse() {
      console.log(`El ${this.tipo} se está desplazando.`);
    }
  }
  
  class Coche extends Vehiculo {
    constructor() {
      super('coche');
    }
  
    desplazarse() {
      console.log('El coche está conduciendo por la carretera.');
    }
  }
  
  class Barco extends Vehiculo {
    constructor() {
      super('barco');
    }
  
    desplazarse() {
      console.log('El barco está navegando por el agua.');
    }
  }
  
  class Avion extends Vehiculo {
    constructor() {
      super('avión');
    }
  
    desplazarse() {
      console.log('El avión está volando por el aire.');
    }
  }
  
  
  let coche = new Coche();
  let barco = new Barco();
  let avion = new Avion();
  
  
  coche.desplazarse();
  barco.desplazarse();
  avion.desplazarse();
  