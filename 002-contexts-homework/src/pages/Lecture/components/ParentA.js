import React from "react";
import { ChildA } from "./ChildA";

export const ParentA = (props) => {
  return (
    <article style={{ background: "#221221" }}>
      ParentA: {props.counter}
      <ChildA setCounter={props.setCounter} />
    </article>
  );
};
