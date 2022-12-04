import { combineReducers } from "redux";

import TodoSlice from "./TodoSlice";

const reducers = combineReducers({
  todo: TodoSlice,
});

export default reducers;
