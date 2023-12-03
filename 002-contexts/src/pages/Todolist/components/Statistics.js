import React from "react";
import { Statistic } from "./Statistic";

export const Statistics = () => {
  return (
    <div
      style={{
        marginBottom: 20,
        display: "grid",
        gap: 20,
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <Statistic label="Ilość zadań" value={20} />
      <Statistic
        label="Ilość zadań w których ilość użytych słów jest parzysta"
        value={20}
      />
      <Statistic
        label="Ilość zadań w których ilość użytych słów jest NIE parzysta"
        value={20}
      />
      <Statistic label="Zadania zaczynające się na literę A" value={20} />
      <Statistic
        label="Średnia arytmetyczna ilości znaków użytych w tytule"
        value={20}
      />
      <Statistic
        label="Ilość zadań których ilość znaków jest mniejsza od średniej ilości znaków"
        value={20}
      />
    </div>
  );
};
