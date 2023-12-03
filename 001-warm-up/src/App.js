import { useState } from "react";
import { Lecture } from "./pages/000_Lecture/Lecture";
import { Counter } from "./pages/001_Counter/Counter";
import { Calculator } from "./pages/002_Calculator/Calculator";
import { Todolist } from "./pages/003_Todolist/Todolist";

export const App = () => {
  // const tablicaZeStanem = useState();
  const [stan, funckjaAktualizującaStan] = useState(
    1500100900 /* WARTOŚĆ POCZĄTKOWA STANU */
  );

  // stan = 123  // zła aktualizacja
  // funckjaAktualizującaStan(123) // dobra aktualizacja

  return (
    <main className="container">
      <h1>{stan}</h1>
      <article>
        <h2>Lecture 1</h2>
        <Lecture
          name={"to jest string"}
          test123={[1, 2, 3, 4]}
          onFirstInputClick={() => {
            funckjaAktualizującaStan("cześć");
            alert("Hello");
          }}
        />
      </article>

      <article>
        <h2>Lecture 2</h2>
        <Lecture
          onFirstInputClick={() => console.log("jestem tylko console logiem")}
        />
      </article>

      <article>
        <h2>Counter</h2>
        <Counter />
      </article>
      <article>
        <h2>Calculator</h2>
        <Calculator />
      </article>
      <article>
        <h2>Todolist</h2>
        <Todolist />
      </article>
    </main>
  );
};
