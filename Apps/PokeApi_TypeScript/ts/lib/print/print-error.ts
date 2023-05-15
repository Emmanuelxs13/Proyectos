import Print from "./print.js";

export default class PrintError extends Print {
  private error: Error;

  constructor(error: Error) {
    super();

    this.error = error;
  }

  public printPokemons(responseData: object): void {
    this.printError();    
  }

  private printError() {
    const $boxPokemons: HTMLElement = document.createElement("div"),
      $articlePokemon: HTMLElement = document.createElement("article"),
      $titleError: HTMLElement = document.createElement("h2"),
      $textError: Node = document.createTextNode(this.error.message);

    $boxPokemons.setAttribute("id", "pokemon-box");

    $boxPokemons.classList.add("row");
    $boxPokemons.classList.add("justify-content-center");
    $articlePokemon.classList.add("p-5");
    $articlePokemon.classList.add("border");
    $articlePokemon.classList.add("border-danger");
    $articlePokemon.classList.add("rounded");

    $titleError.appendChild($textError);
    $articlePokemon.appendChild($titleError);
    $boxPokemons.appendChild($articlePokemon);
    this.htmlElements.$pokemon?.appendChild($boxPokemons);
  }
}
