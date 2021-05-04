import React from "react";
import "./CartInfoModal.css";
import Card from "../../UI/Card/Card";
import CartContext from "../../context/cart-context";
import ReactDOM from "react-dom";
import Button from "../../UI/Button/Button";
import ItemsInCart from "./ItemsInCart/ItemsInCart";
import NoItemsInCart from "./NoItemsInCart/NoItemsInCart";

const CartInfoModal = (props) => {
  const cartContext = React.useContext(CartContext);
  let hasCartItems = cartContext.shoppingCart.length === 0;

  const CartModal = () => {
    return (
      <div className="modal-container">
        <Card>
          {hasCartItems ? <NoItemsInCart /> : <ItemsInCart />}
          <div className="btn-container">
            {!hasCartItems && (
              <Button action={props.checkout}>
                Checkout - {cartContext.fullPrice}$
              </Button>
            )}
            <Button action={props.closeModal}>Close</Button>
          </div>
        </Card>
      </div>
    );
  };

  return (
    //  cart-modal is in public->index.html
    <React.Fragment>
      {ReactDOM.createPortal(
        <CartModal></CartModal>,
        document.getElementById("cart-modal")
      )}
    </React.Fragment>
  );
};

export default CartInfoModal;
