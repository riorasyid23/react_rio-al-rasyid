import Header from "./Header";
import TaskListItem from "./TaskListItem";
import TaskInput from "./TaskInput";
import { useDispatch } from "react-redux";
import { addToDoList } from "../store/TodoSlice";

function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <Header text="Todos" />
      <TaskInput addToDoList={(todo) => dispatch(addToDoList(todo))} />
      <TaskListItem />
    </div>
  );
}

export default Home;
