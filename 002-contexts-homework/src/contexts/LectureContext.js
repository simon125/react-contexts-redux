import { createContext, useState } from "react";

export const LectureContext = createContext();

export const LectureContextProvider = (props) => {
  const [counter, setCounter] = useState(1500100900);

  return (
    <LectureContext.Provider
      value={{
        name: "John",
        sayHello: () => console.log("Hello my name is John"),
        counter,
        setCounter,
      }}
    >
      {props.children}
    </LectureContext.Provider>
  );
};
