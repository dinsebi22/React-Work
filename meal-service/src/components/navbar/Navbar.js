import React, { useState } from "react";
import CartContext from "../../context/cart-context";
import Button from "../../UI/Button/Button";
import CartInfoModal from "../cartInfoModal/CartInfoModal";
import "./Navbar.css";

const Navbar = () => {
  const context = React.useContext(CartContext);
  const [modalOpenState, setModalOpenState] = useState(false);
  const openCartModal = () => {
    setModalOpenState(true);
  };

  const closeCartModal = () => {
    setModalOpenState(false);
  };

  const checkoutModal = () => {
    setModalOpenState(false);
    context.checkout();
    console.log("Checkout ...");
  };

  return (
    <div className="navbar">
      <h2>React Meal Service</h2>
      <Button action={openCartModal}>
        <div className="openCartButton">
          <h4>Your cart </h4>
          <span className="cart-icon"></span>
          <span className="counter">{context.shoppingCart.length}</span>
        </div>
      </Button>
      {modalOpenState && (
        <CartInfoModal
          closeModal={closeCartModal}
          checkout={checkoutModal}
          isOpened={modalOpenState}
        />
      )}
    </div>
  );
};

export default Navbar;
