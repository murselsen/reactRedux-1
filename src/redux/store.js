import { configureStore } from "@reduxjs/toolkit";

// Stores
import filtersReducer from "./stores/filters"; // Filters reducer
import tasksReducer from "./stores/tasks"; // Tasks reducer


export const store = configureStore({
  reducer: {
    filters: filtersReducer, // Filters reducer
    tasks: tasksReducer, // Tasks reducer
  },
  // preloadedState: loadState(), // Uncomment if you want to load state from localStorage
});
