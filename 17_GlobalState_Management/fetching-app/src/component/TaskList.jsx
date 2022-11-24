import styles from "./style.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTodo, deleteTodo, updateTodo } from "../store/TodoSlice";

const TaskList = () => {
  const todos = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const delToDo = (id) => {
    dispatch(deleteTodo(id));
  };

  const checkedTodo = (id) => {
    dispatch(updateTodo(id));
  };

  console.log(todos);

  return (
    <>
      {/* {todos.loading && <div>Loading...</div>}
      {!todos.loading && todos.error ? <div>Error: {todos.error}</div> : null} */}
      {/* {!todos.loading && todos.data.length ? ( */}
      <div className={styles.container}>
        {todos?.datafetching_todolist.map((listitem) => (
          <div key={listitem.id} className={styles.textlist}>
            <input
              defaultChecked={listitem.completed}
              onChange={() => {
                checkedTodo(listitem.id);
              }}
              type="checkbox"
            />
            <span
              style={
                listitem.completed
                  ? { textDecoration: "line-through", fontStyle: "italic", color: "#747474" }
                  : { textDecoration: "none", fontStyle: "normal", color: "black" }
              }
            >
              {listitem.title}
            </span>
            <button
              onClick={() => {
                delToDo(listitem.id);
              }}
              className={styles.delbtn}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {/* ) : null} */}
    </>
  );
};

export default TaskList;
