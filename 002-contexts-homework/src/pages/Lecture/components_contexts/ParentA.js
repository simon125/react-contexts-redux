import React, { useContext, useState } from "react";
import { ChildA } from "./ChildA";
import { LectureContext } from "../../../contexts/LectureContext";

export const ParentA = () => {
  const [customValue, setCustomValue] = useState(0);
  const ctx = useContext(LectureContext);

  return (
    <article style={{ background: "#221221" }}>
      ParentA: {ctx.counter}
      <ChildA />
      <input
        type="text"
        value={customValue}
        onChange={(event) => setCustomValue(event.target.value)}
      />
      <button
        onClick={() =>
          ctx.setCounter((prevCounter) => prevCounter + customValue * 1)
        }
      >
        Submit
      </button>
    </article>
  );
};
