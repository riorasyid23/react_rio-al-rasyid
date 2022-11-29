import TaskList from "./TaskList";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDoList, handleCheck } from "../store/TodoSlice";

const TaskListItem = (props) => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const handleChecked = (id) => dispatch(handleCheck(id));
  const deletedToDoList = (id) => dispatch(deleteToDoList(id));

  console.log(todos);
  return (
    <div>
      <div>
        {todos.map((list) => (
          <TaskList
            listitem={list}
            key={list.id}
            deleteToDoList={deletedToDoList}
            handleCheck={handleChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskListItem;
