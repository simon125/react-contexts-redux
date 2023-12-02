import React, { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoTable } from "./components/TodoTable";

export const Todolist = () => {
  return (
    <div>
      <TodoForm />
      <TodoTable />
    </div>
  );
};
