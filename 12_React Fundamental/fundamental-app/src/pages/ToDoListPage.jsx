import Header from "./component/Header";
import ToDoList from "./component/ToDoList";

export default function ToDoListPage({ datalist }) {
  return (
    <div>
      <Header text="To Do App" />
      {datalist.map((data) => (
        <ToDoList data={data} />
      ))}
    </div>
  );
}
