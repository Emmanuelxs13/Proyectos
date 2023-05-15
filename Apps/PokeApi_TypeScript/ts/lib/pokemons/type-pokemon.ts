import FetchPokemon from "./fetch-pokemon.js";
import PrintAllPokemons from "../print/print-all-pokemons.js";
import eventButtonsPokemon from "../../helpers/event-buttons-pokemon.js";
import { typePokemon } from "../interfaces.js"

export default class TypePokemon extends FetchPokemon {
  constructor(data: string) {
    super(data);
  }

  protected ejecute(response: typePokemon): void {
    const printAllPokemons: PrintAllPokemons = new PrintAllPokemons();

    printAllPokemons.erasePokemons();
    printAllPokemons.printTypePokemons(response);
    eventButtonsPokemon();
  }
}