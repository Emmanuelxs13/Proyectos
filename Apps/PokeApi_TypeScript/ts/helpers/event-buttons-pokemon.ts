export default function eventButtonsPokemon(): void {
  const $buttonsPokemon: NodeList =
      document.querySelectorAll(".Button-pokemon"),
    $modalBody: HTMLElement = <HTMLElement>(
      document.querySelector(".modal-body")
    ),
    $modalImg: HTMLElement = <HTMLElement>$modalBody.querySelector("img"),
    $modalTitle: HTMLElement = <HTMLElement>(
      document.getElementById("exampleModalLabel")
    ),
    $liId: HTMLElement = <HTMLElement>document.getElementById("item-id"),
    $liName: HTMLElement = <HTMLElement>document.getElementById("item-name"),
    $liBaseExperience: HTMLElement = <HTMLElement>(
      document.getElementById("item-baseExperience")
    ),
    $liAbilities: HTMLElement = <HTMLElement>(
      document.getElementById("item-abilities")
    ),
    $liType: HTMLElement = <HTMLElement>document.getElementById("item-type"),
    $statHp: HTMLElement = <HTMLElement>document.getElementById("item-hp"),
    $statAttack: HTMLElement = <HTMLElement>(
      document.getElementById("item-attack")
    ),
    $statDefense: HTMLElement = <HTMLElement>(
      document.getElementById("item-defense")
    ),
    $statSpecialAttack: HTMLElement = <HTMLElement>(
      document.getElementById("item-specialAttack")
    ),
    $statSpecialDefense: HTMLElement = <HTMLElement>(
      document.getElementById("item-specialDefense")
    ),
    $statSpeet: HTMLElement = <HTMLElement>(
      document.getElementById("item-speet")
    );

  $buttonsPokemon.forEach((element: Node) => {
    let elementValue: HTMLInputElement = <HTMLInputElement>element,
      value: string = elementValue.value;

    element.addEventListener("click", (e: Event) => {
      $modalImg.setAttribute("src", "./assets/img/login.svg");
      $modalImg.setAttribute("alt", "Loader..");
      $modalImg.setAttribute("title", "Loader");

      $modalTitle.textContent = "Loader...";
      $liId.textContent = "Loader...";
      $liName.textContent = "Loader...";
      $liBaseExperience.textContent = "Loader...";
      $liAbilities.textContent = "Loader...";
      $liType.textContent = "Loader...";
      $statHp.textContent = "Loader...";
      $statAttack.textContent = "Loader...";
      $statDefense.textContent = "Loader...";
      $statSpecialAttack.textContent = "Loader...";
      $statSpecialDefense.textContent = "Loader...";
      $statSpeet.textContent = "Loader...";

      fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`)
        .then((res) => {
          if (!res.ok)
            throw new Error(`Fetch Error: ${res.text}, ${res.status}`);

          return res.json();
        })
        .then((res) => {
          let type: string[] = [],
            ability: string[] = [];

          res.types.forEach((element: any) => {
            type.push(element.type.name);
          });

          res.abilities.forEach((element: any) => {
            ability.push(element.ability.name);
          });

          res.stats.forEach((element: any) => {
            switch (element.stat.name) {
              case "hp":
                $statHp.textContent = `${element.stat.name.toUpperCase()}: ${
                  element.base_stat
                }`;
              case "attack":
                $statAttack.textContent = `${element.stat.name.toUpperCase()}: ${
                  element.base_stat
                }`;
              case "defense":
                $statDefense.textContent = `${element.stat.name.toUpperCase()}: ${
                  element.base_stat
                }`;
              case "special-attack":
                $statSpecialAttack.textContent = `${element.stat.name.toUpperCase()}: ${
                  element.base_stat
                }`;
              case "special-defense":
                $statSpecialDefense.textContent = `${element.stat.name.toUpperCase()}: ${
                  element.base_stat
                }`;
              case "speed":
                $statSpeet.textContent = `${element.stat.name.toUpperCase()}: ${
                  element.base_stat
                }`;
            }
          });

          $modalTitle.textContent = res.name;
          $liType.textContent = `Type(s): ${type.join(", ")}`;
          $liAbilities.textContent = `Abilities: ${ability.join(", ")}`;
          $liId.textContent = `ID: ${res.id}`;
          $liName.textContent = `Name: ${res.name}`;
          $liBaseExperience.textContent = `Base Experience: ${res.base_experience}`;

          if (!res.sprites.front_default) {
            $modalImg.setAttribute("src", "./assets/img/pokemon-not-found.png");
          } else {
            $modalImg.setAttribute("src", res.sprites.front_default);
          }

          $modalImg.setAttribute("alt", res.name);
          $modalImg.setAttribute("title", res.name);
        })
        .catch((err: Error) => {
          console.error(err);

          $modalImg.setAttribute("src", "./assets/img/pokemon-not-found.png");

          $modalTitle.textContent = "Fetch Error :(";
          $liId.textContent = "Fetch Error :(";
          $liName.textContent = "Fetch Error :(";
          $liBaseExperience.textContent = "Fetch Error :(";
          $liAbilities.textContent = "Fetch Error :(";
          $liType.textContent = "Fetch Error :(";
          $statHp.textContent = "Fetch Error :(";
          $statAttack.textContent = "Fetch Error :(";
          $statDefense.textContent = "Fetch Error :(";
          $statSpecialAttack.textContent = "Fetch Error :(";
          $statSpecialDefense.textContent = "Fetch Error :(";
          $statSpeet.textContent = "Fetch Error :(";
        });
    });
  });
}
