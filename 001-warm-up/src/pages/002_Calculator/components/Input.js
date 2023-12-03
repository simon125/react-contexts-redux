import React from "react";

export const Input = (props) => {
  // <Input value={number1} setNumber={setNumber1} />
  const { value, setNumber } = props;

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => {
        setNumber(event.target.value);
      }}
    />
  );
};
