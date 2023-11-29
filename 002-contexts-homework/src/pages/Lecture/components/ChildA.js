import React from "react";
import { GrandChildA } from "./GrandChildA";

export const ChildA = (props) => {
  return (
    <article style={{ background: "#333111" }}>
      ChildA
      <GrandChildA setCounter={props.setCounter} />
    </article>
  );
};
