import styles from "./style.module.css";

const TaskList = (props) => {
  const { listitem, delToDo, check } = props;
  return (
    <div className={styles.container}>
      <div key={listitem.id} className={styles.textlist}>
        <input
          checked={listitem.completed}
          onChange={() => {
            check(listitem.id);
          }}
          type="checkbox"
        />
        <span
          className={listitem.completed ? styles.checked : styles.notchecked}
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
    </div>
  );
};

export default TaskList;
