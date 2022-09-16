import style from "./ToDoList.module.css";

export default function Header({ text }) {
  return (
    <div className={style.header}>
      <h2>{text}</h2>
    </div>
  );
}
