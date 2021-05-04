import React, { useState } from "react";

const CartContext = React.createContext({
  shoppingCart: [],
  fullPrice: 0,
  addMeal: () => {},
  removeMeal: () => {},
});

export const CartContextProvider = (props) => {
  const [shoppingCartState, setShoppingCartState] = useState([]);
  const [shoppingCartFullPrice, setShoppingCartFullPrice] = useState(0);

  const addToCartHandler = (meal) => {
    setShoppingCartState([...shoppingCartState, meal]);
    setShoppingCartFullPrice(shoppingCartFullPrice + meal.type.price);
  };

  const clearShoppingCart = () => {
    setShoppingCartState([]);
    setShoppingCartFullPrice(0);
  };

  const removeFromCartHandler = (meal) => {
    let newCartValues = shoppingCartState;
    newCartValues.splice(shoppingCartState.indexOf(meal), 1);
    setShoppingCartFullPrice(shoppingCartFullPrice - meal.type.price);
    setShoppingCartState(newCartValues);
  };

  return (
    <CartContext.Provider
      value={{
        shoppingCart: shoppingCartState,
        fullPrice: shoppingCartFullPrice,
        addMeal: addToCartHandler,
        removeMeal: removeFromCartHandler,
        checkout: clearShoppingCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
