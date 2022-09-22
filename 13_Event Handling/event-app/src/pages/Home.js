import Header from "./component/Header";
import { Component } from "react";
import TaskListItem from "./component/TaskListItem";
import TaskInput from "./component/TaskInput";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
    };
  }

  deleteToDoList = (id) => {
    const newToDoList = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newToDoList });
  };

  addToDoList = (title) => {
    const newListItem = {
      id: Math.floor(Math.random() * 100),
      title: title,
      completed: false,
    };

    if (title.length !== 0) {
      this.setState({ data: [...this.state.data, newListItem] });
    }
  };

  handleCheck = (id) => {
    const index = this.state.data.findIndex((val) => val.id === id);
    const newItem = [...this.state.data];

    if (index >= 0) {
      newItem[index].completed = !newItem[index].completed;
    }

    this.setState({ completed: newItem });
  };
  render() {
    return (
      <div>
        <Header text="Todos" />
        <TaskInput addToDo={this.addToDoList} />
        <TaskListItem
          handleCheck={this.handleCheck}
          data={this.state.data}
          delToDo={this.deleteToDoList}
        />
      </div>
    );
  }
}

export default Home;
