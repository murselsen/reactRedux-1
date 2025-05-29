import { FiltersActions } from "../contants";

// Filters reducer for managing the state of filters in the application
const initialState = {
  status: "all",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FiltersActions.SELECT_FILTER_STATUS:
      console.log("Action received in filtersReducer:", action);
      return {
        ...state,

        status: action.payload, // Update the status filter with the new value
      };

    default:
      return state; // Return the current state if no relevant action is found
  }
};

export default filtersReducer;
