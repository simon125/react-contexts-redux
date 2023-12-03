import React, { useContext, useState } from "react";
import { TodosContext } from "../../../contexts/TodosContext";
import { Link } from "react-router-dom";

export const TodoForm = () => {
  const [title, setTitle] = useState("");

  // const ctx = useContext(TodosContext);
  const { addNewTodo } = useContext(TodosContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.random(),
      title,
    };

    addNewTodo(newTodo);

    setTitle("");
  };

  return (
    <article>
      <Link to="/todos">Przejdź do listy todos</Link>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Enter todo title..."
        />
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};
