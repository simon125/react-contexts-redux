import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
// const [todos, setTodos] = useState([
//   { id: 123, title: "Pouczyć się JSa" },
//   { id: 321, title: "Odpocząć" },
// ])

// setTodos((prevState)=>)

const todosSlice = createSlice({
  initialState: {
    tablicaTodosow: [],
    todosDrafts: [],
    dueDate: "2023-12-32",
  },
  name: "todosCokolwiek",
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      console.log(action.payload);

      const newTodo = {
        title: action.payload,
        id: Math.random(),
        status: false,
      };

      state.tablicaTodosow.push(newTodo);
    },
    editStatus: (state, action) => {
      state.tablicaTodosow.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.status = !todo.status;
        }
      });
    },
    removeTodo: (state, action) => {
      state.tablicaTodosow = state.tablicaTodosow.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export const { addTodo, editStatus, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
