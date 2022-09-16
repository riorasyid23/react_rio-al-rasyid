import ToDoListPage from "./pages/ToDoListPage";
import { todoData } from "./todoData";

function App() {
  return <ToDoListPage datalist={todoData} />;
}

export default App;
