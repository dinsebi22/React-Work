import React, { useState } from "react";
import "./AddToCart.css";
import Button from "../../UI/Button/Button";

const AddToCart = (props) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const setInputQuantity = (event) => {
    setItemQuantity(event.target.value);
  };

  const addMealToCart = (event) => {
    event.preventDefault();
    props.addMeal(itemQuantity);
    setItemQuantity(1);
  };

  return (
    <form onSubmit={addMealToCart}>
      <div className="quantity-input">
        <label>Amount </label>
        <input type="number" value={itemQuantity} onChange={setInputQuantity} />
      </div>

      <Button action={undefined}>Add to Cart</Button>
    </form>
  );
};

export default AddToCart;
