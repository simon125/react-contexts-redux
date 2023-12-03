import React from "react";

export const MathOperation = (props) => {
  //   <MathOperation operator={mathOperation} setOperator={setMathOperation} />;

  const { operator, setOperator } = props;

  return (
    <select
      value={operator}
      onChange={(event) => setOperator(event.target.value)}
    >
      <option value="" hidden>
        Wybierz znak
      </option>
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
  );
};
