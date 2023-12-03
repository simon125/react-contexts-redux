import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todosSlice";

export const TodoForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTodo(title));

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
