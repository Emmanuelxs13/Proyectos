// POKEAPI
// Invocamos una interfaz
import {listPokemon} from "./interface/interface"

export default function fetchPokemon(): void {
    // URL API
    const urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/",
    // $ Para referirnos al dump --- utilizamos <> para forzar un tipoi
    $pokeBox: HTMLElement = <HTMLElement> document.getElementById('poke-box'),
    fragment: Node = document.createDocumentFragment();

    fetch(urlPokemon)
        .then(res => res.json())
        .then((res: listPokemon) => {
            res.results.forEach((pokemon) => {
                const $figure: HTMLElement = document.createElement("figure"),
                $img: HTMLElement = document.createElement("img"),
                $figCaption: HTMLElement = document.createElement("figCaption"),
                $namePokemon: Node = document.createTextNode(pokemon.name)

                $img.setAttribute("alt", pokemon.url)
                $img.setAttribute("title", pokemon.url)

                $figCaption.appendChild($namePokemon)
                $figure.appendChild($img)
                $figure.appendChild($figCaption)
                fragment.appendChild($figure)

            });
        });
}