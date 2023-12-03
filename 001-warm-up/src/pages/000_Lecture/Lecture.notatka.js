import React from "react";

export const Lecture = (props) => {
  // TAK TO WYGLĄDA W App.js
  // <Lecture name={"to jest string"} test123={[1,2,3,4]}/>

  // props.name
  // props.test123

  console.log(props);

  const spodziewanyWynikWConsoli = {
    name: "to jest string",
    test123: [1, 2, 3, 4],
    onFirstInputClick: () => {},
  };

  return (
    <div>
      {/* wywołania takie jak ponizej są nie poprawne ponieważ nic nie wnoszą - nie działają zgodnie z załozeniem tzn wywoał funckje w momencie kliknięcia */}
      {/* złe wywoałenie 1 <input type="text" onClick={()=>props.onFirstInputClick} /> */}
      {/* złe wywoałenie 2 <input type="text" onClick={props.onFirstInputClick()} /> */}
      {/* dobre wywołanie 1 <input type="text" onClick={props.onFirstInputClick} /> */}
      {/* dobre wywołanie 2 <input type="text" onClick={() => props.onFirstInputClick()} /> */}
      <input type="text" onClick={props.onFirstInputClick} />
      <input type="text" />
    </div>
  );
};

const addTwoNumbers = (props) => {
  return props.a + props.b;
};

addTwoNumbers({ a: 10, b: 10 });
