import { useState } from "react";
import styles from "./style.module.css";

const inputValue = {
  title: "",
  completed: false,
};
function TaskInput({ addToDoList }) {
  const [data, setData] = useState(inputValue);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = data.title;
    if (isNotEmpty) {
      const newData = {
        title: data.title,
        completed: data.completed,
      };
      addToDoList(newData);
      setData({
        title: "",
        completed: false,
      });
    } else {
      alert("Input tidak boleh kosong");
    }
  };

  return (
    <div className={styles.inputwrapper}>
      <input
        className={styles.inputfield}
        onChange={onChange}
        type="text"
        name="title"
        placeholder="Add To Do..."
      />
      <button className={styles.inputbtn} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
export default TaskInput;
