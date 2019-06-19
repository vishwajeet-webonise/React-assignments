import React from "react";
import "./App.css";
import "./mycss.css";

class ProductsComponent extends React.Component {
  render() {
    let petArray = this.props.petsArray.map(pet => {
      return (
        <div>
          <span>{pet.petName}</span>
          <br />
          <img src={pet.img} /> <br />
          <span>{pet.description}</span> <br />
          <span>{pet.price}</span>
          <br />
          <button onClick={() => this.props.IncrementItem(pet.petName)}>
            + 1
          </button>
          <button onClick={() => this.props.DecreaseItem(pet.petName)}>
            - 1
          </button>
          {this.props.AddToCart}
          <hr />
        </div>
      );
    });

    return (
      <div className="mycss">
        <span>{petArray}</span>
      </div>
    );
  }
}
export default ProductsComponent;
