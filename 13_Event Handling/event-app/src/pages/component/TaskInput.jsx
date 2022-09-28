import { Component } from "react";
import styles from "./style.module.css";

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  render() {
    return (
      <div className={styles.inputwrapper}>
        <input
          className={styles.inputfield}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          type="text"
          placeholder="Add To Do..."
        />
        <button
          className={styles.inputbtn}
          onClick={() => this.props.addToDo(this.state.inputValue)}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default TaskInput;
