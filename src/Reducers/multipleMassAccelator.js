import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  force: 0,
  mass: 0,
  accelator: 0,
};

const multipleMassAccelatorSlice = createSlice({
  name: "mulipleMassAccelator",
  initialState: initialState,
  reducers: {
    setMassValue: (state, action) => {
      state.mass = action.payload;
      state.force = state.mass * state.accelator;
    },
    setAccelatorValue: (state, action) => {
      state.accelator = action.payload;
      state.force = state.mass * state.accelator;
    },
  },
});

export const {
  setMassValue,
  setAccelatorValue,
} = multipleMassAccelatorSlice.actions;
export default multipleMassAccelatorSlice.reducer;
