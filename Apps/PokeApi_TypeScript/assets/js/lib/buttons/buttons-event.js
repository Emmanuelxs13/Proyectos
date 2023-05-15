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
    nextButtonEvent() {
        var _a;
        (_a = this.$nextButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
            var _a;
            e.preventDefault();
            let urlEndPoint = (_a = this.$nextButton) === null || _a === void 0 ? void 0 : _a.getAttribute("data-href");
            const allPokemon = new AllPokemon(urlEndPoint);
        });
    }
    previousButtonEvent() {
        var _a;
        (_a = this.$previousButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
            var _a;
            e.preventDefault();
            let urlEndPoint = (_a = this.$previousButton) === null || _a === void 0 ? void 0 : _a.getAttribute("data-href");
            const allPokemon = new AllPokemon(urlEndPoint);
        });
    }
    filterSelect() {
        this.$selectFilter.addEventListener("change", () => {
            let urlEndPoint = this.$selectFilter.value;
            if (urlEndPoint) {
                const typePokemon = new TypePokemon(urlEndPoint);
            }
        });
    }
    serchBar() {
        var _a;
        (_a = this.$searchButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
            e.preventDefault();
            const pokemonName = this.$searchBar.value;
            if (pokemonName) {
                printLoader();
                const singlePokemon = new SinglePokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
            }
        });
    }
}
