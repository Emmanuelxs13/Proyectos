import Buttons from "./buttons.js";
import AllPokemon from "../pokemons/all-pokemon.js";
import SinglePokemon from "../pokemons/single-pokemon.js";
import TypePokemon from "../pokemons/type-pokemon.js";
import printLoader from "../../helpers/print-loader.js";

export default class ButtonEvents extends Buttons {
  constructor() {
    super();

    this.nextButtonEvent();
    this.previousButtonEvent();
    this.filterSelect();
    this.serchBar();
  }

  private nextButtonEvent(): void {
    this.$nextButton?.addEventListener("click", (e: Event) => {
      e.preventDefault();

      let urlEndPoint: string = this.$nextButton?.getAttribute(
        "data-href"
      ) as string;

      const allPokemon: AllPokemon = new AllPokemon(urlEndPoint);
    });
  }

  private previousButtonEvent(): void {
    this.$previousButton?.addEventListener("click", (e: Event) => {
      e.preventDefault();

      let urlEndPoint: string = this.$previousButton?.getAttribute(
        "data-href"
      ) as string;

      const allPokemon: AllPokemon = new AllPokemon(urlEndPoint);
    });
  }

  private filterSelect(): void {
    this.$selectFilter.addEventListener("change", () => {
      let urlEndPoint: string = this.$selectFilter.value;

      if(urlEndPoint) {
        const typePokemon: TypePokemon = new TypePokemon(urlEndPoint);
      }
    });
  }

  private serchBar(): void {
    this.$searchButton?.addEventListener("click", (e: Event) => {
      e.preventDefault();

      const pokemonName: string = this.$searchBar.value;

      if (pokemonName) {
        printLoader();

        const singlePokemon: SinglePokemon = new SinglePokemon(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
        );
      }
    });
  }
}
