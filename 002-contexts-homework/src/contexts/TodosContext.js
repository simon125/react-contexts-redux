import { createContext, useState } from "react";

export const TodosContext = createContext();

export const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addNewTodo, removeTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
};
