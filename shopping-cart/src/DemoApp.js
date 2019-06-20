import { DisplayCart } from "./DisplayCart";

import React from "react";
import "./App.css";
import Home from "./App";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DemoApp extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/DisplayCart">DisplayCart</Link>
            </nav>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/DisplayCart" component={DisplayCart} />
        </Router>
      </div>
    );
  }
}

export default DemoApp;
