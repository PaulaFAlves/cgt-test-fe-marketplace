import Router from "./router";
import Context from "./Context";
import { useReducer } from "react";
import { productsList } from "./components/products.data";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.quantity + 1;
        }
        return product;
      });
    case "DECREMENT":
      return state.map((product) => {
        if (product.id === action.payload.id && action.payload.quantity > 0) {
          product.quantity = action.payload.quantity - 1;
        }
        return product;
      });
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, productsList);

  return (
    <Context.Provider value={{ count, dispatch }}>
      <Router />
    </Context.Provider>
  );
}

export default App;
