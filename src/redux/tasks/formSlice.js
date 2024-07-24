import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      task: "Task Description",
      project: "Project 1",
      progress: "Progress",
      status: "Todo",
    },
  ],
};

export const taskSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addState: (state, action) => {
      const maxId = state.value.length
        ? Math.max(...state.value.map((task) => task.id))
        : 0;
      const newTask = { ...action.payload, id: maxId + 1 };
      console.log("new task", newTask);
      state.value.push(newTask);
    },
  },
});

export const { addState } = taskSlice.actions;

export default taskSlice.reducer;
