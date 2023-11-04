class CuentaBancaria { 
  numeroCuenta: string;
  titular: string;
  saldo:number;
  
  constructor(numeroCuenta: string,  titular: string,  saldo: number) {
    this.numeroCuenta = numeroCuenta;
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(monto: number) {
      this.saldo += monto;
      return this.saldo;
  }

  retirar(monto: number) {
      if (monto <= this.saldo) {
          this.saldo -= monto;
          return this.saldo;
      } else {
          return "Fondos insuficientes";
      }
  }

  consultarSaldo() {
      return this.saldo;
  }
}

// Crear cuentas
const cuenta1 = new CuentaBancaria('12345', 'Juan Perez', 1000);
const cuenta2 = new CuentaBancaria('67890', 'Maria Lopez', 500);

// Probar métodos
console.log(`Saldo de la cuenta 1: $${cuenta1.consultarSaldo()}`);
console.log(`Saldo de la cuenta 2: $${cuenta2.consultarSaldo()}`);

cuenta1.depositar(500);
console.log(`Nuevo saldo de la cuenta 1 después de depositar: $${cuenta1.consultarSaldo()}`);

cuenta2.retirar(200);
console.log(`Nuevo saldo de la cuenta 2 después de retirar: $${cuenta2.consultarSaldo()}`);

cuenta2.retirar(400);
console.log(`Intento de retirar $400 de la cuenta 2: ${cuenta2.retirar(400)}`);
