import FetchPokemon from "./fetch-pokemon.js";
import PrintAllPokemons from "../print/print-all-pokemons.js";
import eventButtonsPokemon from "../../helpers/event-buttons-pokemon.js";
import { singlePokemonInterface } from "../interfaces.js";

export default class SinglePokemon extends FetchPokemon {
  constructor(data: string) {
    super(data);
  }

  protected ejecute(response: singlePokemonInterface): void {
    const printAllPokemons: PrintAllPokemons = new PrintAllPokemons();

    printAllPokemons.erasePokemons();
    printAllPokemons.printSinglePokemon(response);
    eventButtonsPokemon();
  }
}