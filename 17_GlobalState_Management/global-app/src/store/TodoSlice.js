import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: "Mengerjakan Exercise",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Mengerjakan Assignment",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    deleteToDoList: (state, action) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== action.payload;
      });
    },
    addToDoList: (state, action) => {
      const newListItem = { id: uuidv4(), ...action.payload };
      state.todos = [...state.todos, newListItem];
    },
    handleCheck: (state, action) => {
      console.log({ state, action });
      state.todos.forEach((todo) => {
        const id = action.payload;
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
      return state;
    },
  },
});

export const selectTodo = (state) => state.todo.todos;

export const { addToDoList, deleteToDoList, handleCheck } = todoSlice.actions;
export default todoSlice.reducer;
