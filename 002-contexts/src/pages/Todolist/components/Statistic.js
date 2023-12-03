import React from "react";

export const Statistic = (props) => {
  return (
    <article style={{ margin: 0 }}>
      <b>{props.label}</b>
      <p style={{ fontSize: 50, margin: 0, fontWeight: 200 }}>{props.value}</p>
    </article>
  );
};
