import style from "./ToDoList.module.css";
export default function ToDoList({ data }) {
  return (
    <div className={style.listbox}>
      <p className={data.completed ? style.completed : style.uncompleted}>
        {data.title}
      </p>
    </div>
  );
}
