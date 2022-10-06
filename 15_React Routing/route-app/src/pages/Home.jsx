import Header from "../component/Header";
import { useState } from "react";
import TaskListItem from "../component/TaskListItem";
import TaskInput from "../component/TaskInput";

const initialValue = [
  {
    id: 1,
    title: "Mengerjakan Exercise",
    completed: true,
  },
  {
    id: 2,
    title: "Mengerjakan Assignment",
    completed: false,
  },
];

function Home() {
  const [data, setData] = useState(initialValue);

  const deleteToDoList = (id) => {
    setData((oldData) =>
      oldData.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const addToDoList = (title) => {
    const newListItem = {
      id: Math.floor(Math.random() * 100),
      ...title,
    };

    if (title.length !== 0) {
      setData((oldData) => [...oldData, newListItem]);
    }
  };

  const handleCheck = (id) => {
    const index = data.findIndex((val) => val.id === id);
    const newItem = [...data];

    if (index >= 0) {
      newItem[index].completed = !newItem[index].completed;
    }

    setData((oldData) => [...oldData]);
  };

  return (
    <div>
      <Header text="Todos" />
      <TaskInput addToDo={addToDoList} />
      <TaskListItem
        handleCheck={handleCheck}
        data={data}
        delToDo={deleteToDoList}
      />
    </div>
  );
}

export default Home;
