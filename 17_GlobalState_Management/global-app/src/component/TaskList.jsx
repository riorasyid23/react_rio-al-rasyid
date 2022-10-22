import styles from "./style.module.css";

const TaskList = (props) => {
  const { deleteToDoList, handleCheck } = props;
  const data = props.listitem;
  return (
    <div className={styles.container}>
      <div key={data.id} className={styles.textlist}>
        <input
          checked={data.completed}
          onChange={() => {
            handleCheck(data.id);
          }}
          type="checkbox"
        />
        <span className={data.completed ? styles.checked : styles.notchecked}>{data.title}</span>
        <button
          onClick={() => {
            deleteToDoList(data.id);
          }}
          className={styles.delbtn}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskList;
