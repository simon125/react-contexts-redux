import React, { useContext } from "react";
import { GrandParentA } from "./components_contexts/GrandParentA";
import { LectureContext } from "../../contexts/LectureContext";

/**
 * Przygotuj strukture komponentową zgodną z designem (folder designs)
 * dodatkowo stwórz kolejną "rodzinę" komponentów składającą się z 3 stopni zagnieżdzenia
 * - możesz uzyć tych samych nazw z innym suffixem zamiast litery A użyj litery B
 */

export const Lecture = () => {
  const ctx = useContext(LectureContext);

  return (
    <article>
      Lecture Contexts: <b>{ctx.counter}</b>
      <GrandParentA />
    </article>
  );
};
