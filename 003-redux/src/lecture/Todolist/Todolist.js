import React, { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoTable } from "./components/TodoTable";
import { Link } from "react-router-dom";
import { Statistics } from "./components/Statistics";

export const Todolist = () => {
  return (
    <div>
      <Link to="/counter">Counter</Link>
      <TodoForm />
      {/* <Statistics /> */}
      <TodoTable />
      <article>
        <button>Usuń zadania skończone</button>
      </article>
    </div>
  );
};
