import FetchPokemon from "./fetch-pokemon.js";
import PrintAllPokemons from "../print/print-all-pokemons.js";
import SettingButtons from "../buttons/setting-buttons.js";
import eventButtonsPokemon from "../../helpers/event-buttons-pokemon.js";
export default class AllPokemon extends FetchPokemon {
    constructor(url) {
        super(url);
    }
    ejecute(response) {
        const printAllPokemons = new PrintAllPokemons();
        const settingButtons = new SettingButtons(response);
        printAllPokemons.erasePokemons();
        printAllPokemons.printPokemons(response);
        settingButtons.settingButtons();
        eventButtonsPokemon();
    }
}
