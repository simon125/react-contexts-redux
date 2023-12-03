import React, { useState } from "react";
import { Input } from "./components/Input";
import { MathOperation } from "./components/MathOperation";
import { CalculateButton } from "./components/CalculateButton";
import { Result } from "./components/Result";

/**
 * Stwórz apkę typu kalkulator na podstawie designu dostępnego w folderze designs
 *
 * działanie kalkulatora:
 * - user ma mieć możliwość wpisania wartości liczbowych do inputów
 * - user ma mieć możliwość wybrania z selecta operacji matematycznej którą chce wykonać
 * (+, -, *, /)
 * - use ma mieć możliwość uruchomienia operacji kalkulacji za pomocą przycisku calculate
 * po czym wynik ma się wyświetlić w inpucie z placeholderem Wynik (patrz design)
 *
 * nice to have:
 * spróbuj wykonać to zadanie tworząc więcej niż jeden komponent
 *
 */

/**
 *
 * Input
 * MathOperations
 * Calculate
 * Result
 *
 *
 */

export const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [mathOperation, setMathOperation] = useState("");
  const [result, setResult] = useState(0);

  const handleCalculateClick = () => {
    /**
     * cond1: Warunek na sprawedzenie czy mathOperator jest poprawnie wybrany
     *
     *
     * cond2: jeżeli jest dzielenie przez 0 to wyświetl komunikat
     *
     * cond3: czy number1 i number2 są na pewno liczbami
     *
     */
    /**
     * OBLICZNIE number1 i number2
     * NA PODSTAWIE mathOperation
     * USTAWIENIE resultu
     */

    if (number1 === "" || number2 === "" || isNaN(number1) || isNaN(number2)) {
      alert("Wpisz poprawne liczby");
      return;
    }

    if (mathOperation === "") {
      alert("Wybierz poprawny znak matemtyczny");
      return;
    }

    if (number2 * 1 === 0 && mathOperation === "/") {
      alert("Nie dzielimy przez 0");
      return;
    }

    let newResult = 0;

    if (mathOperation === "+") {
      newResult = number1 * 1 + number2 * 1;
    } else if (mathOperation === "-") {
      newResult = number1 - number2;
    } else if (mathOperation === "*") {
      newResult = number1 * number2;
    } else if (mathOperation === "/") {
      newResult = number1 / number2;
    }

    setResult(newResult);
  };

  return (
    <div>
      <Input value={number1} setNumber={setNumber1} />
      <MathOperation operator={mathOperation} setOperator={setMathOperation} />
      <Input value={number2} setNumber={setNumber2} />
      {/* <CalculateButton num1={} num2={} operator={} setResult={} /> */}
      <CalculateButton onCalulateClick={handleCalculateClick} />

      <Result result={result} />
    </div>
  );
};
