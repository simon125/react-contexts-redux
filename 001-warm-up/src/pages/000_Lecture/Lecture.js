import React, { useState } from "react";

export const Lecture = (props) => {
  const [state, setState] = useState("wartosc poczatkowa");

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(event) => {
          // event.target.value = (state) wartosc poczatkowa + wcisnięta literka na klawiaturze

          setState(event.target.value);
        }}
      />
      {/* <input type="text" value={state} readOnly={true}/> */}
      <input type="text" value={state} readOnly />
    </div>
  );
};
