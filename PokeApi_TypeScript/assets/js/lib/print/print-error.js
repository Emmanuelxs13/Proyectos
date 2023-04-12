import Print from "./print.js";
export default class PrintError extends Print {
    constructor(error) {
        super();
        this.error = error;
    }
    printPokemons(responseData) {
        this.printError();
    }
    printError() {
        var _a;
        const $boxPokemons = document.createElement("div"), $articlePokemon = document.createElement("article"), $titleError = document.createElement("h2"), $textError = document.createTextNode(this.error.message);
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
        (_a = this.htmlElements.$pokemon) === null || _a === void 0 ? void 0 : _a.appendChild($boxPokemons);
    }
}
