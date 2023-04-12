import Print from "./print.js";
export default class PrintImgPokemon extends Print {
    constructor(imgElement) {
        super();
        this.imgElement = imgElement;
    }
    printPokemons(spritePokemon) {
        if (!spritePokemon.sprites.front_default)
            spritePokemon.sprites.front_default = "./assets/img/pokemon-not-found.png";
        this.imgElement.setAttribute("src", spritePokemon.sprites.front_default);
    }
}
