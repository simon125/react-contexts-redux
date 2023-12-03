import React, { useContext } from "react";
import { LectureContext } from "../../../contexts/LectureContext";

export const GrandChildA = (props) => {
  const ctx = useContext(LectureContext);

  console.log(ctx);

  return (
    <article style={{ background: "#212343" }}>
      GrandChildA
      <button
        style={{ width: "fit-content" }}
        onClick={() =>
          props.setCounter((poprzedniStanCoutnera) => poprzedniStanCoutnera + 1)
        }
      >
        Click me
      </button>
    </article>
  );
};
