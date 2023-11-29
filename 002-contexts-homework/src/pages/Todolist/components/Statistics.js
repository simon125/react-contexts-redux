import React from "react";

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
  return (
    <div>
      {/*
        PRZYKŁAD JAK TAKI KOMPONENT Z POJEDYŃCZYMI STATYSTYKAMI MÓGŁBY WYGLĄDAĆ
        <Statistic label="Ilość zadań" value={20} />
      */}
    </div>
  );
};
