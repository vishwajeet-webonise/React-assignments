import parrot1 from "./parrot1.jpg";
import dog1 from "./dog1.jpg";
import { ADD_TO_CART, REMOVE_ITEM } from "../actions/action-types/cart-actions";

const initState = {
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
  CartArray: []
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    var NewArray = this.state.CartArray;
    NewArray.push(state.petName);
    this.setState({ clicks: this.state.clicks + 1, CartArray: NewArray });
  }

  if (action.type === REMOVE_ITEM) {
    var deleteCartArray = this.state.CartArray;
    for (let i = deleteCartArray.length - 1; i >= 0; i--) {
      if (deleteCartArray[i] === state.petName) {
        deleteCartArray.splice(i, 1);
        break;
      }
    }
    return state;
  }
};

export default cartReducer;
