import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

/**
 * Provider komponent pozwalający na połaczenie apki reactowej z reduxem
 * dzieki niemu store jest rozpropagowany po całej aplikacji tzn że jest dostępny w kazdym komponencie
 */
import { Provider } from "react-redux";
/**
 * skonfigurowany przez nas store
 */
import { store } from "./store";

/**
 *
 * https://redux-toolkit.js.org/api/configureStore#parameters
 * ZADANIE DODAJ REDUXOWY PROVIDER I PRZEKARZ W PROPSACH REFERENCJE DO STORA
 *
 *
 */

import "@picocss/pico";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
