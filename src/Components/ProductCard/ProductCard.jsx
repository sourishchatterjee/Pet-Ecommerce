
// // neww

// import React, { useContext } from 'react';
// import { CartContext } from '../Features/ContextProvider';
// import CartProduct from '../CartProductFile/CartProduct';

// function ProductCard() {
//   const { cart } = useContext(CartContext);

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-8'>
//           {cart.map(p => (
//             <CartProduct key={p.id} product={p} />
//           ))}
//         </div>
//         <div className='col-4'>
//           <div className="bg-secondary">
//             <h5>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h5>
//             <h5>Total Price: ${cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</h5>
//             <button className='btn btn-warning'>Proceed to pay</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


// import React, { useContext } from 'react';
// import { CartContext } from '../Features/ContextProvider';
// import CartProduct from '../CartProductFile/CartProduct';
// import './ProductCard.css';

// function ProductCard() {
//   const { cart } = useContext(CartContext);

//   return (
//     <div className='cart-container'>
//       <h2 className="cart-title">Shopping Cart</h2>
//       <div className='cart-content'>
//         <div className='cart-items'>
//           {cart.map(p => (
//             <CartProduct key={p.id} product={p} />
//           ))}
//         </div>
//         <div className='cart-summary'>
//           <div className="summary-box bg-secondary">
//             <h5>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h5>
//             <h5>Total Price: ₹{cart.reduce((total, item) => total + item.quantity * (item.price || 0), 0).toFixed(2)}</h5>
//             <button className='btn btn-warning'>Proceed to pay</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;




// import React, { useContext } from 'react';
// import { CartContext } from '../Features/ContextProvider';
// import CartProduct from '../CartProductFile/CartProduct';
// import './ProductCard.css';

// function ProductCard() {
//   const { cart } = useContext(CartContext);

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-12'>
//           {cart.map(p => (
//             <CartProduct key={p.id} product={p} />
//           ))}
//         </div>
//         <div className='col-12 mt-4'>
//           <div className="bg-secondary p-3 rounded">
//             <h5>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h5>
//             <h5>Total Price: ₹{cart.reduce((total, item) => total + item.quantity * (item.price || 0), 0).toFixed(2)}</h5>
//             <button className='btn btn-warning mt-2'>Proceed to pay</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;



import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import CartProduct from '../CartProductFile/CartProduct';
import './ProductCard.css';

function ProductCard() {
  const { cart } = useContext(CartContext);

  return (
    <div className='cart-container'>
      <h2 className="cart-title">Shopping Cart</h2>
      <div className='cart-content'>
        <div className='cart-items'>
          {cart.map(p => (
            <CartProduct key={p.id} product={p} />
          ))}
        </div>
        <div className='cart-summary'>
          <div className="summary-box bg-secondary">
            <h5>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h5>
            <h5>Total Price: ₹{cart.reduce((total, item) => total + item.quantity * (item.price || 0), 0).toFixed(2)}</h5>
            <button className='btn btn-warning'>Proceed to pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
