import React from "react";
import { ParentA } from "./ParentA";

export const GrandParentA = (props) => {
  // <GrandParentA counter={counter} setCounter={setCounter}/>
  return (
    <article style={{ background: "#451234" }}>
      GrandParentA
      <ParentA counter={props.counter} setCounter={props.setCounter} />
    </article>
  );
};
