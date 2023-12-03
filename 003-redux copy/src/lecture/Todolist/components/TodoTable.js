import React from "react";
import { Statistics } from "./Statistics";

export const TodoTable = () => {
  const todos = [];

  return (
    <>
      <article>
        <table>
          <thead>
            <tr>
              <th>Idx</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <button style={{ width: "fit-content" }}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
      <Statistics />
    </>
  );
};
