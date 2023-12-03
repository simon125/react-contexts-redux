import React from "react";
import { Statistics } from "./Statistics";

import { useSelector, useDispatch } from "react-redux";
import { editStatus, removeTodo } from "../../../store/todosSlice";

export const TodoTable = () => {
  const todos = useSelector((state) => state.todosState.tablicaTodosow);

  const dispatch = useDispatch();

  return (
    <>
      <article>
        <table>
          <thead>
            <tr>
              <th>Idx</th>
              <th>Title</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <input
                    onChange={() => {
                      dispatch(editStatus(todo.id));
                    }}
                    type="checkbox"
                    checked={todo.status}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(removeTodo(todo.id));
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
