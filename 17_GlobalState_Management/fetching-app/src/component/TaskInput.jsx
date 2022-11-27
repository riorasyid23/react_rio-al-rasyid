import { useState } from "react";
import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/TodoSlice";

// const inputValue = {
//   title: "",
//   completed: false,
// };
const TaskInput = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const newTodolist = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo({ data }));
    setData("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputwrapper}>
      <input
        className={styles.inputfield}
        onChange={newTodolist}
        type="text"
        name="title"
        value={data}
        placeholder="Add To Do..."
      />
      <button className={styles.inputbtn} type="submit">
        Submit
      </button>
    </form>
  );
};
export default TaskInput;
