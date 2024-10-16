import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, selectCartItems } from "../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div>
      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => dispatch(removeFromCart(item))}
          />
        ))
      )}
    </div>
  );
};

export default Cart;
