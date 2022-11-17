import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosArray: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodoItem: (state, { payload }) => {
      state.todosArray.push({ title: payload, completed: false });
    },
    deleteTodoItem: (state, { payload }) => {
      state.todosArray.splice(payload, 1);
    },
    toggleCompleted: (state, { payload }) => {
      state.todosArray[payload].completed =
        !state.todosArray[payload].completed;
    },
    clear: (state) => {
      state.todosArray = [];
    },
  },
});

export const { addNewTodoItem, deleteTodoItem, toggleCompleted, clear } =
  todosSlice.actions;

export default todosSlice.reducer;
