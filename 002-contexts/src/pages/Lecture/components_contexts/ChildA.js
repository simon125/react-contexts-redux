import React from "react";
import { GrandChildA } from "./GrandChildA";

export const ChildA = () => {
  return (
    <article style={{ background: "#333111" }}>
      ChildA
      <GrandChildA />
    </article>
  );
};
