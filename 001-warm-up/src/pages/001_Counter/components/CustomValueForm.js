import React, { useState } from "react";

export const CustomValueForm = (props) => {
  const [customValue, setCustomValue] = useState(0);

  // <CustomValueForm wartoscCountera={counter} setCounter={setCounter} />
  // props.wartoscCountera
  // props.setCounter(/* NOWA WARTOŚC */)

  return (
    <div>
      <input
        value={customValue}
        onChange={(event) => setCustomValue(event.target.value)}
        type="text"
        placeholder="Custom value"
      />
      <button
        onClick={() =>
          props.setCounter(customValue * 1 + props.wartoscCountera)
        }
      >
        Submit
      </button>
    </div>
  );
};
