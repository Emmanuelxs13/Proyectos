import FetchPokemon from "./fetch-pokemon.js";
import PrintImgPokemon from "../print/print-img-pokemon.js";
import { spritePokemonInterface } from "../interfaces.js";

export default class GetImgPokemon extends FetchPokemon {
  private imgElementHtml: HTMLElement;

  constructor(data: string, htmlElement: HTMLElement) {
    super(data);
    this.imgElementHtml = htmlElement;
  }

  protected ejecute(response: spritePokemonInterface): void {
    const printImgPokemon: PrintImgPokemon = new PrintImgPokemon(this.imgElementHtml);

    printImgPokemon.printPokemons(response);
  }
}