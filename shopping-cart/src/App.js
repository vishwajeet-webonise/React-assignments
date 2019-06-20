import React from "react";
import { connect } from "react-redux";
import { addToCart } from "./store/actions/shoppingCartActions";

/*import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import CheckoutButtonComponent from "./CheckoutButtonComponent.js";
import ProductsComponent from "./ProductsComponent.js";
import parrot1 from "./parrot1.jpg";
import dog1 from "./dog1.jpg";
import { DisplayCart } from "./DisplayCart";*/

class App extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      key: "pets",
      petsArray: [
        {
          petName: "DOG",
          description: "This is a pug puppy",
          price: "2000",
          img: dog1
        },
        {
          petName: "PARROT",
          description: "This is a green parrot",
          price: "5000",
          img: parrot1
        }
      ],
      CartArray: [],
      show: true
    };
  }

  render() {
    var displayComponent = this.state.show ? (
      <ProductsComponent
        IncrementItem={this.IncrementItem}
        DecreaseItem={this.DecreaseItem}
        petsArray={this.state.petsArray}
      />
    ) : (
      <DisplayCart CartDisplayArray={this.state.CartArray} />
    );

    return (
      <div>
        <div>
          <CheckoutButtonComponent
            clicks={this.state.clicks}
            AddToCart={this.AddToCart}
            displayCartArray={this.state.CartArray}
            handleCheckOutButton={this.handleCheckOutButton}
          />
        </div>
        <hr />
        <div>{displayComponent}</div>
      </div>
    );
  }

  IncrementItem = petName => {
    var NewArray = this.state.CartArray;
    NewArray.push(petName);
    this.setState({ clicks: this.state.clicks + 1, CartArray: NewArray });
  };
  DecreaseItem = petName => {
    var deleteCartArray = this.state.CartArray;
    for (let i = deleteCartArray.length - 1; i >= 0; i--) {
      if (deleteCartArray[i] === petName) {
        deleteCartArray.splice(i, 1);
        break;
      }
    }
    this.setState({
      clicks: this.state.clicks - 1,
      CartArray: deleteCartArray
    });
  };

  AddToCart = () => {
    localStorage.setItem(this.state.key, JSON.stringify(this.state.petsArray));
  };

  handleCheckOutButton = () => {
    var status = this.state.show;
    this.setState({ show: !status });
  };
}

export default App;*/
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div key={item.id}>
          <div>
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i>add</i>
            </span>
          </div>

          <div>
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    id: state.petName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
