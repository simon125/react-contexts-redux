import React from "react";
import { ParentA } from "./ParentA";

export const GrandParentA = () => {
  // <GrandParentA />
  return (
    <article style={{ background: "#451234" }}>
      GrandParentA
      <ParentA />
    </article>
  );
};
