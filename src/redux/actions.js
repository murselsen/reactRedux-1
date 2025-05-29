import { createAction } from "@reduxjs/toolkit";
import { FiltersActions, TaskActions } from "./contants";
export const selectFilterStatus = createAction(
  FiltersActions.SELECT_FILTER_STATUS,
);
export const addTask = createAction(TaskActions.ADD_TASK, (task) => {
  console.log("Redux - Creating ADD_TASK action with payload:", task);
  return {
    payload: task,
  };
});

export const deleteTask = createAction(TaskActions.DELETE_TASK, (id) => {
  console.log("Redux - Creating DELETE_TASK action with payload:", id);
  return {
    payload: {
      id: id,
    },
  };
});
