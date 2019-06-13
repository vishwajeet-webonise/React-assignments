import React from "react";
import "./App.css";
import { Clock } from "./Clock";

class ClockApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxState: false
    };
  }

  checkBoxState = event => {
    this.setState({ checkBoxState: event.target.checked });
  };

  changeName = event => {
    this.setState({ minutes: event.target.value });
  };

  render() {
    let watch = this.state.checkBoxState ? (
      <Clock stop={1} key="1" />
    ) : (
      <Clock key="2" />
    );
    return (
      <div className="App">
        <div>
          <p>
            <input
              type="checkbox"
              check={this.state.checkBoxState}
              onChange={this.checkBoxState}
            />
          </p>
          <p>Time : {watch}</p>
        </div>
      </div>
    );
  }
}

export default ClockApp;
