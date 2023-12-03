import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

import "@picocss/pico";
import { LectureContextProvider } from "./contexts/LectureContext";
import { TodosContextProvider } from "./contexts/TodosContext";
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LectureContextProvider>
        <TodosContextProvider>
          <ShoppingCartContextProvider>
            <App />
          </ShoppingCartContextProvider>
        </TodosContextProvider>
      </LectureContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
