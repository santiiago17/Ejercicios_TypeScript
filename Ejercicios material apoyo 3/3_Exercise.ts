interface Product {
    name: string;
    price: number;
    
}

interface Inventory {
    products: Product[];

    agregarProducto(producto: Product): void;

    buscarProducto(nombre: string): Product | undefined;
}

class Inventario implements Inventory {
    products: Product[] = [];

    agregarProducto(producto: Product) {
        this.products.push(producto);
    }

    buscarProducto(nombre: string) {
        return this.products.find(producto => producto.name === nombre);
    }
}


const inventario = new Inventario();

const producto1: Product = { name: 'Producto 1', price: 10 };
const producto2: Product = { name: 'Producto 2', price: 20 };

inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);

const productoEncontrado = inventario.buscarProducto('Producto 1');

if (productoEncontrado) {
    console.log(`Encontrado: ${productoEncontrado.name}, Precio: $${productoEncontrado.price}`);
} else {
    console.log('Producto no encontrado');
}
