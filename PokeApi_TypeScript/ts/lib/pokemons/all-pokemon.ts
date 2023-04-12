import FetchPokemon from "./fetch-pokemon.js";
import PrintAllPokemons from "../print/print-all-pokemons.js";
import SettingButtons from "../buttons/setting-buttons.js";
import eventButtonsPokemon from "../../helpers/event-buttons-pokemon.js";
import { dataInterface } from "../interfaces.js";

export default class AllPokemon extends FetchPokemon {
  constructor(url: string) {
    super(url);
  }

  protected ejecute(response: dataInterface): void {
    const printAllPokemons: PrintAllPokemons = new PrintAllPokemons();
    const settingButtons: SettingButtons = new SettingButtons(response);

    printAllPokemons.erasePokemons();
    printAllPokemons.printPokemons(response);
    settingButtons.settingButtons();
    eventButtonsPokemon();
  }
}
