import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 && <div className="cart-empty">Your cart is empty</div>}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <p>{item.name}</p>
              <p>{item.quantity} x ₹{item.price.toFixed(2)}</p>
              <div className="cart-item-controls">
                <button onClick={() => handleRemoveProduct(item)}>-</button>
                <button onClick={() => handleAddProduct(item)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total Price: ₹{totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
