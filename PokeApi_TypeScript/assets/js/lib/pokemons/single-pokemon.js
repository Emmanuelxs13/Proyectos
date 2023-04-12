import FetchPokemon from "./fetch-pokemon.js";
import PrintAllPokemons from "../print/print-all-pokemons.js";
import eventButtonsPokemon from "../../helpers/event-buttons-pokemon.js";
export default class SinglePokemon extends FetchPokemon {
    constructor(data) {
        super(data);
    }
    ejecute(response) {
        const printAllPokemons = new PrintAllPokemons();
        printAllPokemons.erasePokemons();
        printAllPokemons.printSinglePokemon(response);
        eventButtonsPokemon();
    }
}
