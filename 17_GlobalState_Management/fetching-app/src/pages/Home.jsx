import Header from "../component/Header";
import TaskList from "../component/TaskList";
import TaskInput from "../component/TaskInput";

const Home = () => {
  return (
    <>
      <div>
        <Header text="Todos" />
        <TaskInput />
        <TaskList />
      </div>
    </>
  );
};

export default Home;
