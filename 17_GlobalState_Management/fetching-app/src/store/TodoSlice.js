import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TodolistAPI from "../api/todolist.api";

const initialState = {
  loading: false,
  data: "",
  error: null,
};

export const getTodo = createAsyncThunk("get/todo", async () => {
  try {
    const response = await TodolistAPI.getAllTodos();
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const createTodo = createAsyncThunk("post/todo", async (todo) => {
  try {
    const response = await TodolistAPI.createTodo(todo);
    return response.data.insert_datafetching_todolist_one;
  } catch (error) {
    console.log(error);
  }
});

export const deleteTodo = createAsyncThunk("delete/todo", async (id) => {
  try {
    const response = await TodolistAPI.deleteTodo(id);
    return response.data.delete_datafetching_todolist_by_pk.returning[0];
  } catch (error) {
    console.log(error);
  }
});

export const updateTodo = createAsyncThunk("update/todo", async (id) => {
  try {
    const response = await TodolistAPI.updateTodo(id);
    return response.data.update_datafetching_todolist_by_pk;
  } catch (error) {
    console.log(error);
  }
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getTodo.fulfilled, (state, action) => {
        return (state = {
          ...state,
          data: action.payload,
        });
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.data = state.data.filter((list) => list.id !== action.payload.id);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.data = state.data.forEach((list) => {
          if (list.id === action.payload.id) {
            return { ...list, checked: !list.checked };
          } else {
            return list;
          }
        });
      });
  },
});

export const selectTodo = (state) => state.todo.data;

// export const { addToDoList, deleteToDoList, handleCheck } = todoSlice.actions;
export default todoSlice.reducer;
