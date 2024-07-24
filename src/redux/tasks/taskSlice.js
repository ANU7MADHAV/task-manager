import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    changeState: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeState } = taskSlice.actions;

export default taskSlice.reducer;
