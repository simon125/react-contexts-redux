import React from "react";

export const CalculateButton = (props) => {
  // <CalculateButton onCalulateClick={handleCalculateClick} />

  return <button onClick={props.onCalulateClick}>Calclulate</button>;
};
