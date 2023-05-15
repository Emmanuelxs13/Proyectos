import PrintError from "../print/print-error.js";

export default abstract class FetchPokemon {
  constructor(url: string, htmlElement?: HTMLElement) {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          if (res.status !== 404)
            throw new Error(
              `Error with fetch petition, status code: ${res.status}`
            );
          throw new Error("Upppsss, Your Pokemon could not be Found");
        }

        return res.json();
      })
      .then((res) => {
        // Function Ejecution
        this.ejecute(res);
      })
      .catch((err: Error) => {
        // Handle Error
        this.fetchError(err);
      });
  }

  protected abstract ejecute(response: object): void;

  private fetchError(err: Error) {
    const printError: PrintError = new PrintError(err);

    printError.erasePokemons();
    printError.printPokemons({});
    console.error(err);
  }
}
