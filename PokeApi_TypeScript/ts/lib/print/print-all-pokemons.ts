import Print from "./print.js";
import GetImgPokemon from "../pokemons/get-img-pokemon.js";
import {
  dataInterface,
  typePokemon,
  pokemonInterface,
  singlePokemonInterface,
} from "../interfaces.js";

export default class PrintAllPokemons extends Print {
  constructor() {
    super();
  }

  public printPokemons(data: dataInterface): void {
    const dataPokemon = data,
      $boxPokemons: HTMLElement = document.createElement("div");

    let $fragment: Node = document.createDocumentFragment();

    $boxPokemons.setAttribute("id", "pokemon-box");
    $boxPokemons.classList.add("row");
    $boxPokemons.classList.add("row-cols-1");
    $boxPokemons.classList.add("row-cols-sm-2");
    $boxPokemons.classList.add("row-cols-lg-3");
    $boxPokemons.classList.add("row-cols-xl-4");

    dataPokemon.results.forEach((element: pokemonInterface) => {
      const $articlePokemon: HTMLElement = document.createElement("article"),
        $figurePokemon: HTMLElement = document.createElement("figure"),
        $imgPokemon: HTMLElement = document.createElement("img"),
        $boxButtonPokemon: HTMLElement = document.createElement("div"),
        $buttonPokemon: HTMLElement = document.createElement("input");

      $articlePokemon.classList.add("col");
      $articlePokemon.classList.add("p-sm-5");
      $articlePokemon.classList.add("p-3");
      $figurePokemon.classList.add("Pokemon-figure");
      $imgPokemon.classList.add("img-fluid");
      $imgPokemon.classList.add("rounded");
      $imgPokemon.classList.add("mx-auto");
      $imgPokemon.classList.add("d-block");
      $boxButtonPokemon.classList.add("Button-boxButtonPokemon");
      $buttonPokemon.classList.add("Button-pokemon");
      $buttonPokemon.classList.add("btn");
      $buttonPokemon.classList.add("btn-danger");

      $imgPokemon.setAttribute("src", "./assets/img/login.svg");
      $imgPokemon.setAttribute("alt", element.name);
      $imgPokemon.setAttribute("title", element.name);
      $buttonPokemon.setAttribute("type", "button");
      $buttonPokemon.setAttribute("value", element.name);
      $buttonPokemon.setAttribute("data-bs-toggle", "modal");
      $buttonPokemon.setAttribute("data-bs-target", "#exampleModal");

      const getImpPokemon: GetImgPokemon = new GetImgPokemon(
        element.url,
        $imgPokemon
      );

      $figurePokemon.appendChild($imgPokemon);
      $boxButtonPokemon.appendChild($buttonPokemon);
      $figurePokemon.appendChild($boxButtonPokemon);
      $articlePokemon.appendChild($figurePokemon);

      $fragment.appendChild($articlePokemon);
    });

    $boxPokemons.appendChild($fragment);
    this.htmlElements.$pokemon?.appendChild($boxPokemons);
  }

  public printTypePokemons(data: typePokemon): void {
    const dataPokemon = data,
      $boxPokemons: HTMLElement = document.createElement("div");

    let $fragment: Node = document.createDocumentFragment();

    $boxPokemons.setAttribute("id", "pokemon-box");
    $boxPokemons.classList.add("row");
    $boxPokemons.classList.add("row-cols-1");
    $boxPokemons.classList.add("row-cols-sm-2");
    $boxPokemons.classList.add("row-cols-lg-3");
    $boxPokemons.classList.add("row-cols-xl-4");

    dataPokemon.pokemon.forEach((element: any) => {
      const $articlePokemon: HTMLElement = document.createElement("article"),
        $figurePokemon: HTMLElement = document.createElement("figure"),
        $imgPokemon: HTMLElement = document.createElement("img"),
        $boxButtonPokemon: HTMLElement = document.createElement("div"),
        $buttonPokemon: HTMLElement = document.createElement("input");

      $articlePokemon.classList.add("col");
      $articlePokemon.classList.add("p-sm-5");
      $articlePokemon.classList.add("p-3");
      $figurePokemon.classList.add("Pokemon-figure");
      $imgPokemon.classList.add("img-fluid");
      $imgPokemon.classList.add("rounded");
      $imgPokemon.classList.add("mx-auto");
      $imgPokemon.classList.add("d-block");
      $boxButtonPokemon.classList.add("Button-boxButtonPokemon");
      $buttonPokemon.classList.add("Button-pokemon");
      $buttonPokemon.classList.add("btn");
      $buttonPokemon.classList.add("btn-danger");
      $buttonPokemon.setAttribute("data-bs-toggle", "modal");
      $buttonPokemon.setAttribute("data-bs-target", "#exampleModal");

      $imgPokemon.setAttribute("src", "./assets/img/login.svg");
      $imgPokemon.setAttribute("alt", element.pokemon.name);
      $imgPokemon.setAttribute("title", element.pokemon.name);
      $buttonPokemon.setAttribute("type", "button");
      $buttonPokemon.setAttribute("value", element.pokemon.name);

      const getImpPokemon: GetImgPokemon = new GetImgPokemon(
        element.pokemon.url,
        $imgPokemon
      );

      $figurePokemon.appendChild($imgPokemon);
      $boxButtonPokemon.appendChild($buttonPokemon);
      $figurePokemon.appendChild($boxButtonPokemon);
      $articlePokemon.appendChild($figurePokemon);

      $fragment.appendChild($articlePokemon);
    });

    $boxPokemons.appendChild($fragment);
    this.htmlElements.$pokemon?.appendChild($boxPokemons);
  }

  public printSinglePokemon(data: singlePokemonInterface): void {
    const dataPokemon = data,
      $boxPokemons: HTMLElement = document.createElement("div");

    $boxPokemons.setAttribute("id", "pokemon-box");

    const $articlePokemon: HTMLElement = document.createElement("article"),
      $figurePokemon: HTMLElement = document.createElement("figure"),
      $imgPokemon: HTMLElement = document.createElement("img"),
      $boxButtonPokemon: HTMLElement = document.createElement("div"),
      $buttonPokemon: HTMLElement = document.createElement("input");

    $boxPokemons.classList.add("row");
    $boxPokemons.classList.add("justify-content-center");
    $articlePokemon.classList.add("col-xl-3");
    $articlePokemon.classList.add("col-lg-4");
    $articlePokemon.classList.add("col-md-5");
    $articlePokemon.classList.add("col-sm-6");
    $articlePokemon.classList.add("p-5");
    $figurePokemon.classList.add("Pokemon-figure");
    $imgPokemon.classList.add("img-fluid");
    $imgPokemon.classList.add("rounded");
    $imgPokemon.classList.add("mx-auto");
    $imgPokemon.classList.add("d-block");
    $boxButtonPokemon.classList.add("Button-boxButtonPokemon");
    $buttonPokemon.classList.add("Button-pokemon");
    $buttonPokemon.classList.add("btn");
    $buttonPokemon.classList.add("btn-danger");
    $buttonPokemon.setAttribute("data-bs-toggle", "modal");
    $buttonPokemon.setAttribute("data-bs-target", "#exampleModal");

    $imgPokemon.setAttribute("src", dataPokemon.sprites.front_default);
    $imgPokemon.setAttribute("alt", dataPokemon.name);
    $imgPokemon.setAttribute("title", dataPokemon.name);
    $buttonPokemon.setAttribute("type", "button");
    $buttonPokemon.setAttribute("value", dataPokemon.name);

      $figurePokemon.appendChild($imgPokemon);
      $boxButtonPokemon.appendChild($buttonPokemon);
      $figurePokemon.appendChild($boxButtonPokemon);
      $articlePokemon.appendChild($figurePokemon);


    $boxPokemons.appendChild($articlePokemon);
    this.htmlElements.$pokemon?.appendChild($boxPokemons);
  }
}
