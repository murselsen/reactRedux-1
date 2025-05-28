import { configureStore } from "@reduxjs/toolkit";

// Stores
import filtersReducer from "./stores/filters"; // Filters reducer
import tasksReducer from "./stores/tasks"; // Tasks reducer

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Could not save state:", error);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined; // Return undefined if no state is found
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load state:", error);
  }
};

// 1. Redux durumunun başlangıç değerini tanımlıyoruz
const initialState = {
  some: "Redux - some value",
};

export const store = configureStore({
  reducer: {
    some: (state = initialState.some) => state, // Initial state for 'some'
    filters: filtersReducer, // Filters reducer
    tasks: tasksReducer, // Tasks reducer"
  },
  preloadedState: loadState(), // Load state from localStorage
});
console.log("Redux store created:", store);
console.log("Initial state:", store.getState());
store.subscribe(() => {
  console.log("State changed:", store.getState());
  const appState = store.getState();
  saveState(appState);
});
