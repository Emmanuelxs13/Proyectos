export default function printLoader() {
    const $pokemon = document.getElementById("pokemon"), $boxPokemon = document.getElementById("pokemon-box"), $newBoxPokemon = document.createElement("div"), $imgLoader = document.createElement("img");
    $newBoxPokemon.setAttribute("id", "pokemon-box");
    $imgLoader.setAttribute("src", "./assets/img/login.svg");
    $imgLoader.setAttribute("alt", "Loader...");
    $newBoxPokemon.classList.add("row");
    $newBoxPokemon.classList.add("justyfi-content-center");
    $imgLoader.classList.add("w-25");
    $imgLoader.classList.add("p-5");
    $imgLoader.classList.add("rounded");
    $imgLoader.classList.add("mx-auto");
    $imgLoader.classList.add("d-block");
    $pokemon.removeChild($boxPokemon);
    $newBoxPokemon.appendChild($imgLoader);
    $pokemon.appendChild($newBoxPokemon);
    console.log("I am Ejecuting");
}
