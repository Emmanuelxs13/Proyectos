export default class Print {
    constructor() {
        this.htmlElements = {
            $pokemon: document.getElementById("pokemon"),
        };
    }
    erasePokemons() {
        var _a, _b;
        let $pokemonBox = (_a = this.htmlElements.$pokemon) === null || _a === void 0 ? void 0 : _a.querySelector("#pokemon-box");
        if ($pokemonBox !== null) {
            (_b = this.htmlElements.$pokemon) === null || _b === void 0 ? void 0 : _b.removeChild($pokemonBox);
        }
    }
}
