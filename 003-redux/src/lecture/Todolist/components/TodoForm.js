import React, { useState } from "react";
import { Link } from "react-router-dom";

export const TodoForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.random(),
      title,
    };

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
