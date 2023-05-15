import Print from "./print.js";
import { spritePokemonInterface } from "../interfaces.js";

export default class PrintImgPokemon extends Print {
  private imgElement: HTMLElement;

  constructor(imgElement: HTMLElement) {
    super();
    this.imgElement = imgElement;
  }

  public printPokemons(spritePokemon: spritePokemonInterface): void {
    if (!spritePokemon.sprites.front_default)
      spritePokemon.sprites.front_default = "./assets/img/pokemon-not-found.png";

    this.imgElement.setAttribute("src", spritePokemon.sprites.front_default);
  }
}
