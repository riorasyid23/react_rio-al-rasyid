import style from "./style.module.css";

export default function Header({ text }) {
  return (
    <div>
      <h1 className={style.title}>{text}</h1>
    </div>
  );
}
