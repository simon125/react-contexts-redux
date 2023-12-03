/**
 * MIESJCE NA STORE REDUXOWY
 */
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import todosReducer from "./todosSlice";
import counterReducer from "./counterSlice";
import shoppingCartReducer from "./shoppingCartSlice";

export const store = configureStore({
  reducer: combineReducers({
    todosState: todosReducer,
    products: todosReducer,
    counter: counterReducer,
    shoppingCart: shoppingCartReducer,
  }),
});
