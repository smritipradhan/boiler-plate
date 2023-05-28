//Change according to your requirements

import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament(state) {
      state.counter += 1;
    },
    decreament(state) {
      state.counter -= 1;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
