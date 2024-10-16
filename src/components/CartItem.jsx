import React from "react";

const CartItem = ({ item, onRemove }) => (
  <div className="flex justify-between items-center border p-2">
    <h3>{item.title}</h3>
    <p>Quantity: {item.quantity}</p>
    <button onClick={onRemove} className="bg-red-500 text-white p-2">
      Remove
    </button>
  </div>
);

export default CartItem;
