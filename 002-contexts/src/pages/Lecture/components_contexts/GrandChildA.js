import React, { useContext } from "react";
import { LectureContext } from "../../../contexts/LectureContext";

export const GrandChildA = () => {
  const { setCounter } = useContext(LectureContext);

  return (
    <article style={{ background: "#212343" }}>
      GrandChildA
      <button
        style={{ width: "fit-content" }}
        onClick={() =>
          setCounter((poprzedniStanCoutnera) => poprzedniStanCoutnera + 1)
        }
      >
        Click me
      </button>
      <button
        onClick={() =>
          setCounter((poprzedniStanCoutnera) => poprzedniStanCoutnera - 1)
        }
      >
        -1
      </button>
    </article>
  );
};
