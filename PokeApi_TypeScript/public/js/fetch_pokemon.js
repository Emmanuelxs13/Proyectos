// POKEAPI
export default function fetchPokemon() {
    // URL API
    const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
    fetch(urlPokemon)
        .then(res => res.json());
}
