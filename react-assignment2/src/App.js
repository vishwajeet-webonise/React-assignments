import React from "react";
import "./App.css";
import ListToDoComponent from "./ListToDoComponent";
import AddToDoComponent from "./AddToDoComponent";

class App extends React.Component {
  id = 1;
  constructor(props) {
    super(props);
    this.state = {
      todoArray: [],
      description: "",
      updateItem: {},
      updateTodoState: false
    };
  }

  render() {
    return (
      <div className="App">
        <AddToDoComponent
          getDescription={this.getDescription}
          addDescription={this.addDescription}
          description={this.state.description}
          updatingTodoArray={this.updatingTodoArray}
          updateTodoState={this.state.updateTodoState}
        />
        <ListToDoComponent
          todoList={this.state.todoArray}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
        />
      </div>
    );
  }
  /* to get data from text box*/
  getDescription = event => {
    this.setState({ description: event.target.value });
  };

  /* to put data into array*/
  addDescription = () => {
    var tempDescriptionObject = {
      id: this.id++,
      description: this.state.description
    };
    var tempTodoArray = [...this.state.todoArray, tempDescriptionObject];
    this.setState({ todoArray: tempTodoArray, description: "" });
  };

  /*To remove item from array*/
  removeTodo = todo => {
    var tempRemoveArray = this.state.todoArray.filter(
      removeTodoItem => removeTodoItem.id !== todo.id
    );
    this.setState({ todoArray: tempRemoveArray });
  };

  /**To update the value from array */
  updateTodo = todo => {
    this.setState({
      description: todo.description,
      updateItem: todo,
      updateTodoState: true
    });
  };

  updatingTodoArray = () => {
    var updateDescription = this.state
      .description; /**New textbox value is stored here */

    var indexOfTodoArray = this.state.todoArray.findIndex(
      todo => todo.id === this.state.updateItem.id
    );
    /** Finding the array object to be updated
     */
    this.setState(prevstate => {
      prevstate.todoArray[indexOfTodoArray].description = updateDescription;
    });
    this.setState({ updateTodoState: false, description: "" });
  };
}

export default App;
