import { FiltersActions } from "../contants";

const initialState = {
  items: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FiltersActions.ADD_TASK:
      const newTask = {
        id: state.items.length,
        text: action.payload.text, // Use the text from the action payload
        completed: false, // New tasks are not completed by default
      };
      return {
        ...state,
        items: [...state.items, newTask],
      };
    default:
      return state; // Return the current state if no action matches
  }
};

export default tasksReducer;
