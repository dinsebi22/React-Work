import React, { useContext } from "react";
import "./Meal.css";
import AddToCart from "../addToCard/AddToCart";
import CartContext from "../../context/cart-context";

const Meal = (props) => {
  const context = useContext(CartContext);

  const addMealToContextCart = (item) => {
    let combo = { type: props.item, count: item };
    context.addMeal(combo);
  };

  return (
    <div>
      <div className="meal-info">
        <h5>{props.item.mealName}</h5>
        <p>{props.item.description}</p>
        <h5>${props.item.price}</h5>
      </div>
      <div className="add-to-cart">
        <AddToCart addMeal={addMealToContextCart}></AddToCart>
      </div>
      <hr />
    </div>
  );
};

export default Meal;
