import React from "react";
import "./App.css";
class CheckoutButtonComponent extends React.Component {
  render() {
    return (
      <div>
        <label>{<h2>{this.props.clicks}</h2>}</label>
        <button onClick={this.props.handleCheckOutButton}>Checkout</button>
      </div>
    );
  }
}
export default CheckoutButtonComponent;
