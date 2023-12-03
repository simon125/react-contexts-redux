import React, { useState } from "react";

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
