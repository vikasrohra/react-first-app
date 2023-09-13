import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCartClick = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <div>
        <button className="p-2 bg-green-400" onClick={handleClearCartClick}>Clear Cart</button>
      </div>
      <ul>
        {cartItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Cart;
