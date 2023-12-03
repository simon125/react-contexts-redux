import React, { useState } from "react";

export const TodoForm = (props) => {
  // <TodoForm setTodos={setTodos} />
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    /**
     * 1. stworzyć obiekt todo na podstawie stanu inputu (title) oraz id wygenerowane randomowo
     * 2. nowostworzony obiekt todo dodać do listy todosów (props.setTodos)
     * 3. wyczyszczenie inputu (title)
     */
    // const newTodo = {
    //     id: Math.random(),
    //     title: title
    // }
    const newTodo = {
      id: Math.random(),
      title,
    };

    props.setTodos((poprzedniStan) => [...poprzedniStan, newTodo]);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="Enter todo title..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};
