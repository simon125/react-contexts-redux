import React, { useContext } from "react";
import { TodosContext } from "../../../contexts/TodosContext";

/**
 * Stwórz komponent/y odpowiedzialne za wyświetlanie statystyk zgodnie z designem dostępnym w
 * pliku desktop.png w folderze src/pages/Todolist/designs
 *
 * zadanie polega na wyświetleniu informacji dotyczących dodanych todosów
 * statytyki przedstawiają kolejne rzeczy:
 * - Ilosć zadań w ogóle - długość tablicy todos
 * - Ilość zadań w których ilość użytych słów jest parzysta
 * - Ilość zadań w których ilość użytych słów jest NIE parzysta
 * - Zadania zaczynające się na literę A
 * - Średnia arytmetyczna ilości znaków użytych w tytule
 * - Ilość zadań których ilość znaków jest mniejsza od średniej ilości znaków
 *
 * Zadanie dla chętnych:
 *  wymyśl inne statystyki jakie można by było wyświetlić używając tego/tych komponentu/ów
 *  aplikację można dodatkowo rozszerzeać o nowe pola w formularzu dzięki czemu
 *  wyświetlane statystyki mogą być ciekawsze :)
 *
 *
 * Żeby wyświetlić statystyki dotyczące dodanych todosów będziesz musiał/a
 * wykorzystać istniejący kontext i wyciągnąć z niego listę todosów
 * Nie pamiętasz jak się to robiło? Śmiało możesz zerknać do pliku TodoTable.js
 */

export const Statistics = () => {
  const { todos } = useContext(TodosContext);

  /**
   * SOLUTION JEDNEJ ZE STATYSTYK
   */

  const numberOfTodosStartsWithA = todos.reduce((acc, todo) => {
    if (todo.title.toLowerCase().startsWith("a")) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div
      style={{
        marginBottom: 20,
        display: "grid",
        gap: 20,
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      {/* 
        Przykładowe wyświetlenie wyniku NIE DOCELOWE
      */}
      <article>
        ILOŚĆ TODOSÓW ZACZYNAJĄCA SIĘ NA A: {numberOfTodosStartsWithA}
      </article>
      {/*
        PRZYKŁAD JAK TAKI KOMPONENT Z POJEDYŃCZYMI STATYSTYKAMI MÓGŁBY WYGLĄDAĆ
        <Statistic label="Ilość zadań" value={20} />
      */}
    </div>
  );
};
