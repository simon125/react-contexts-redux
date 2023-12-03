import React from "react";
import { useSelector } from "react-redux";

const selectStatistics = (state) => {
  const todos = state.todosState.tablicaTodosow;
  const amountOfFinishedTodos = todos.filter((todo) => todo.status).length;
  const amountOfUnfinishedTodos = todos.length - amountOfFinishedTodos;

  return {
    amountOfFinishedTodos,
    amountOfUnfinishedTodos,
    total: todos.length,
  };
};

export const Statistics = () => {
  const { total, amountOfFinishedTodos, amountOfUnfinishedTodos } =
    useSelector(selectStatistics);

  return (
    <article>
      <p>
        Total: <b>{total}</b>
      </p>
      <p>
        Done: <b>{amountOfFinishedTodos}</b>
      </p>
      <p>
        Todo: <b>{amountOfUnfinishedTodos}</b>
      </p>
    </article>
  );
};
