import React, { useState } from "react";
import { GrandParentA } from "./components/GrandParentA";

/**
 * Przygotuj strukture komponentową zgodną z designem (folder designs)
 * dodatkowo stwórz kolejną "rodzinę" komponentów składającą się z 3 stopni zagnieżdzenia
 * - możesz uzyć tych samych nazw z innym suffixem zamiast litery A użyj litery B
 */

export const Lecture = () => {
  const [counter, setCounter] = useState(10);

  return (
    <article>
      Lecture: <b>{counter}</b>
      <GrandParentA counter={counter} setCounter={setCounter} />
    </article>
  );
};
