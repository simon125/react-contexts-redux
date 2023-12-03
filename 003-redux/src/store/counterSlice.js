import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: {
    value: 0,
  },
  name: "counter",
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    calculateCustomValue: (state, action) => {
      state.value = state.value + action.payload * 1;
    },
  },
});

export const { decrement, increment, reset, calculateCustomValue } =
  counterSlice.actions;

export default counterSlice.reducer;

export const selectCounterValue = (state) => state.counter.value;
