import React from "react";
import "./ItemsInCart.css";
import CartContext from "../../../context/cart-context";
import Button from "../../../UI/Button/Button";

const ItemsInCart = () => {
  const cartContext = React.useContext(CartContext);

  return (
    <div className="modal-info">
      {cartContext.shoppingCart.map((meal) => (
        <div key={Math.random()} className="meal-item-data">
          <h5>
            {meal.type.mealName} - Portions {meal.count}{" "}
          </h5>
          <p> {meal.type.price}$</p>
          <Button
            action={() => {
              cartContext.removeMeal(meal);
            }}
          >
            X
          </Button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ItemsInCart;
