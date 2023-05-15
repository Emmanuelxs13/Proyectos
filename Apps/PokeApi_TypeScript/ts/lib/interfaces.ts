export interface htmlElementInterface {
  $pokemon: HTMLElement | null;
}

export interface dataInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface pokemonInterface {
  name: string;
  url: string;
}

export interface singlePokemonInterface {
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface typePokemon {
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}

export interface spritePokemonInterface {
  sprites: {
    front_default: string | null;
  };
}