// (I) Events and State examples
export function PizzaCounter(props) {

  const numPizzas = 3;

    function handleAddPizza() {
    console.log("Adding a slice!");
  }

  function handleRemovePizza() {
    console.log("Removing slice!");
  }

  const pizzaArray = [];

  for(let i = 0; i < numPizzas; i++) {
    pizzaArray.push(
      <span>🍕</span>
    );
  }

  return (
    <div>
      <h2 className="text-light bg-primary px-1">Pizza Count: {numPizzas}</h2>
      
      <button type="button" className="btn btn-outline-primary" onClick={handleAddPizza}>
        Add a Slice
      </button>
      
      <button type="button" className="btn btn-outline-success" onClick={handleRemovePizza}>
        Remove a Slice
      </button>      
      
      <div>
        {pizzaArray}
      </div>
    </div>
  );
}

// //- point 1
// React requires a 'key' prop for each element when rendering an array of JSX elements.


// //- point 2
// Just incrementing/decrementing numPizzas doesn't work.

// numPizzas++;
// console.log(numPizzas);

// numPizzas--;
// console.log(numPizzas);

// //- point 3 - we have to use the useState hook.

// import { useState } from "react";

// useState() returns an array.

// const pizzaStateArray = useState(3);

// const numPizzas = pizzaStateArray[0];
// const setNumPizzas = pizzaStateArray[1];

// // Use array destructuring
// const [numPizzas, setNumPizzas] = useState(3);

// //- point 4

// function handleAddPizza() {
//   setNumPizzas(numPizzas + 1);
// }

// function handleRemovePizza() {
//   setNumPizzas(numPizzas - 1);
// }


// // (II) Arrays and Objects as State example

import { useState } from "react";

export function PizzaList() {

  const [pizzaArray, setPizzaArray] = useState([
    "Cheese",
    "Pepperoni",
    "Hawaiian"
  ]);

  function handleAddPizza() {

    pizzaArray.push("Veggie");
    setPizzaArray(pizzaArray);
    // const pizzaArrayCopy = [...pizzaArray];
    // pizzaArrayCopy.push("Veggie");
    // setPizzaArray(pizzaArrayCopy);
    console.log("Adding a pizza!");

  }


  function handleRemovePizza() {

    if(pizzaArray.length > 0) {
        pizzaArray.pop();
        setPizzaArray(pizzaArray);
        // const pizzaArrayCopy = [...pizzaArray];
        // pizzaArrayCopy.pop();
        // setPizzaArray(pizzaArrayCopy);
        console.log("Removing a pizza!");
    }
  }

  const pizzaListItems = [];

  for(let i = 0; i < pizzaArray.length; i++) {

    pizzaListItems.push(
      <li key={i}>
        {pizzaArray[i]}
      </li>
    );
  }

  return (
    <div>

      <h2 className="text-light bg-success px-1">
        Pizza Type Count: {pizzaArray.length}
      </h2>

      <button
        type="button"
        className="btn btn-outline-primary me-2"
        onClick={handleAddPizza}
      >
        Add Pizza
      </button>

      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={handleRemovePizza}
      >
        Remove Pizza
      </button>

      <ul className="mt-3">
        {pizzaListItems}
      </ul>

    </div>
  );
}