import React from "react";

export const Result = (props) => {
  const { result } = props;
  return <input type="text" value={result} readOnly />;
};
