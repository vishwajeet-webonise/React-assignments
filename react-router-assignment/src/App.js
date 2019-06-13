import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import TodoListApp from "./TodoListApp.js";
import ClockApp from "./ClockApp.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Link to="/">ListTodoApp</Link>
            <Link to="/ClockApp">ClockApp</Link>
          </nav>
          <hr />
          <Route excat path="/" component={TodoListApp} />
          <hr />
          <Route path="/ClockApp" component={ClockApp} />
        </Router>
      </div>
    );
  }
}

export default App;
