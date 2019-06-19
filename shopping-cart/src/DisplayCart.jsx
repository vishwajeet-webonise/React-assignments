import React from "react";
import "./App.css";
import "./mycss.css";

export class DisplayCart extends React.Component {
  render() {
    return (
      <div>
        Cart contenet:
        {this.props.CartDisplayArray}
        <br />
      </div>
    );
  }
}
