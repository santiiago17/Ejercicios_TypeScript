class Pelicula {
    constructor(public titulo: string, public duracion: number, public director: string) {}
}

class CatalogoPeliculas {
    peliculas: Pelicula[] = [];

    agregarPelicula(pelicula: Pelicula) {
        this.peliculas.push(pelicula);
    }

    buscarPorTitulo(titulo: string): Pelicula | undefined {
        return this.peliculas.find(pelicula => pelicula.titulo === titulo);
    }

    filtrarPorDirector(director: string): Pelicula[] {
        return this.peliculas.filter(pelicula => pelicula.director === director);
    }
}

// Crear algunas películas
const pelicula1 = new Pelicula('Pelicula 1', 120, 'Director 1');
const pelicula2 = new Pelicula('Pelicula 2', 90, 'Director 2');
const pelicula3 = new Pelicula('Pelicula 3', 150, 'Director 1');

// Crear un catálogo de películas
const catalogo = new CatalogoPeliculas();

// Agregar películas al catálogo
catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);
catalogo.agregarPelicula(pelicula3);

// Buscar una película por título
const peliculaBuscada = catalogo.buscarPorTitulo('Pelicula 2');
console.log('Pelicula buscada:', peliculaBuscada);

// Filtrar películas por director
const peliculasDirector1 = catalogo.filtrarPorDirector('Director 1');
console.log('Peliculas dirigidas por Director 1:', peliculasDirector1);
