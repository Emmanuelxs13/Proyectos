import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./Greeting";
import { Button } from "./Button";

// Elemento raiz
const root = ReactDOM.createRoot(document.getElementById("root"));

/* `raíz.render(<h1> Hola Mundo</h1> )` está representando un elemento React `<h1> Hola Mundo</h1> ` al elemento raíz de la aplicación.
 El método `createRoot` crea un elemento raíz que se puede usar para representar la aplicación React.
El método `render` se utiliza para representar el elemento React en el elemento raíz. 
En este caso, está representando un elemento de encabezado simple con el texto Hello World. */

// Es un componente, porcion de codigo que se puede reutilizar las veces que se desee

root.render(
  <>
    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[93, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
    /> */}

    <Button text="Click me" />
    <Button text="Pay" />
    <Button text="Hello Maquina" />
  </>
);
