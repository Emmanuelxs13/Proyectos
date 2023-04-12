import PrintError from "../print/print-error.js";
export default class FetchPokemon {
    constructor(url, htmlElement) {
        fetch(url)
            .then((res) => {
            if (!res.ok) {
                if (res.status !== 404)
                    throw new Error(`Error with fetch petition, status code: ${res.status}`);
                throw new Error("Upppsss, Your Pokemon could not be Found");
            }
            return res.json();
        })
            .then((res) => {
            this.ejecute(res);
        })
            .catch((err) => {
            this.fetchError(err);
        });
    }
    fetchError(err) {
        const printError = new PrintError(err);
        printError.erasePokemons();
        printError.printPokemons({});
        console.error(err);
    }
}
