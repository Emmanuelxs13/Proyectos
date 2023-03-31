export interface listPokemon {
    // Definimos la estructura interna de lo que nos devuelve como respuesta
    count: number,
    next: string | null,
    previous: string | null,
    results: {
        name: string,
        url: string,
    }[]
}