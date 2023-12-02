import React, { useContext } from "react";
import { TodosContext } from "../../../contexts/TodosContext";
import { Statistics } from "./Statistics";

export const TodoTable = () => {
  // <TodoTable cokolwiek={todos} setTodos={setTodos} />
  // props.cokolwiek

  const { todos, removeTodo } = useContext(TodosContext);

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
                  <button
                    onClick={() => {
                      removeTodo(todo.id);
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
      </article>
      <Statistics />
    </>
  );
};
