import AllPokemon from "./lib/pokemons/all-pokemon.js";
import ButtonEvents from "./lib/buttons/buttons-event.js";

const fetchPokemon: AllPokemon = new AllPokemon("https://pokeapi.co/api/v2/pokemon");
const buttonEvents: ButtonEvents = new ButtonEvents();