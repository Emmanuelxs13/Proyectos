import { htmlElementInterface } from "../interfaces";

export default abstract class Print {
  protected htmlElements: htmlElementInterface = {
    $pokemon: document.getElementById("pokemon"),
  };

  public abstract printPokemons(responseData: object): void;

  erasePokemons(): void {
    let $pokemonBox: any =
      this.htmlElements.$pokemon?.querySelector("#pokemon-box");

    if ($pokemonBox !== null) {
      this.htmlElements.$pokemon?.removeChild($pokemonBox);
    }
  }
}
