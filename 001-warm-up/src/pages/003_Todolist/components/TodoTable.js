import React from "react";
import { removeById } from "../utils/removeById";

export const TodoTable = (props) => {
  // <TodoTable cokolwiek={todos} setTodos={setTodos} />
  // props.cokolwiek

  return (
    <table>
      <thead>
        <tr>
          <th>Idx</th>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.cokolwiek.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>
              <button
                onClick={() => {
                  /**
                   * usuwanie klikniętego elementu z listy todos
                   */
                  console.log(todo);

                  props.setTodos((prevState) => removeById(prevState, todo.id));
                }}
                style={{ width: "fit-content" }}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
