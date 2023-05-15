import FetchPokemon from "./fetch-pokemon.js";
import PrintImgPokemon from "../print/print-img-pokemon.js";
export default class GetImgPokemon extends FetchPokemon {
    constructor(data, htmlElement) {
        super(data);
        this.imgElementHtml = htmlElement;
    }
    ejecute(response) {
        const printImgPokemon = new PrintImgPokemon(this.imgElementHtml);
        printImgPokemon.printPokemons(response);
    }
}
