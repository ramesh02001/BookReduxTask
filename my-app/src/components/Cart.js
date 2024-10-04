import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from './cartSlice';
import './Cart.css'; // Import CSS file

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <strong className="cart-item-title">{item.title}</strong>
              <p className="cart-item-description">{item.description}</p>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
              <div className="cart-item-quantity">
                <button className="cart-btn" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button className="cart-btn" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
            </div>
            <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Total Items: {totalQuantity}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
