import { createSlice } from "@reduxjs/toolkit";
// Filters reducer for managing the state of filters in the application
const initialState = {
  status: "all",
};

const slice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    selectFilterStatus: (state, action) => {
      console.log("Redux Toolkit - Handling SELECT_FILTER_STATUS");
      state.status = action.payload;
    },
  },
});

export const { selectFilterStatus } = slice.actions;
export default slice.reducer;
