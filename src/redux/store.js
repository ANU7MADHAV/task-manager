import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/taskSlice";
import formReducer from "./tasks/formSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    form: formReducer,
  },
});
