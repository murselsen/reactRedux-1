import { TaskActions } from "../contants";

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
    case TaskActions.ADD_TASK:
      console.log("Redux - Handling ADD_TASK action:", action.payload);
      return {
        ...state,
        items: [...state.items, { id: state.items.length, ...action.payload }],
      };
    
    case TaskActions.DELETE_TASK:
      console.log("Redux - Handling DELETE_TASK action:", action.payload);
      return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state; // Return the current state if no action matches
  }
};

export default tasksReducer;
