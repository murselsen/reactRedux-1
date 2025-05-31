const initialState = {
  items: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
};

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      console.log("Redux Toolkit - Handling ADD_TASK");

      const item = {
        id: state.items.length,
        ...action.payload,
      };
      console.log("New task item:", item);
      state.items.push(item);
    },
    deleteTask: (state, action) => {
      console.log
    }
  },
});

console.log("Tasks Slice Actions:", slice.actions);
export const { addTask } = slice.actions;
export default slice.reducer;
