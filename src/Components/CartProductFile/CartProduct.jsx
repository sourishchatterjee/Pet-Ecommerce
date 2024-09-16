// import React, { useContext } from 'react';
// import './cartProduct.css'; // Import the CSS file
// import { CartContext } from '../Features/ContextProvider'; 
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

// function CartProduct({ product }) {
//   const { dispatch } = useContext(CartContext);

//   const Increase = (id) => {
//     dispatch({ type: "Increase", id });
//     alert("Product quantity increased!");
//     notify()
    
//   };
//   const notify = () => toast("quantity increased!");


//   const Decrease = (id) => {
//     dispatch({ type: "Decrease", id });
//   };

//   return (
//     <div className='cart-product'>
//       <img src={product.image} alt={product.name} className="product-image" />
//       <div className='detail'>
//         <h4 className='product-name'>{product.name}</h4>
//         <h4 className='product-price'>${product.price}</h4>
//         <div className='button-container'>
//           <button className='button' onClick={() => Decrease(product.id)}>-</button>
//           <span className='quantity'>{product.quantity}</span>
//           <button 
//           className='button'
//            onClick={() => Increase(product.id)}
//             >+</button>
//         </div>
//         <button className='remove-button' onClick={() => dispatch({ type: "Remove", id: product.id })}>
//           Remove
//         </button>
//         <ToastContainer
//         autoClose={3000} // Adjust the duration of the toast notification
//          position="top-right" // Change the position to top-right
//          hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//          pauseOnHover
//         />
//       </div>
      
//     </div>
    
//   );
// }

// export default CartProduct;


/**/ 

import React, { useContext } from 'react';
import './cartProduct.css'; // Import the CSS file
import { CartContext } from '../Features/ContextProvider'; 
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartProduct({ product }) {
  const { dispatch } = useContext(CartContext);

  const Increase = (id) => {
    dispatch({ type: "Increase", id });
    alert("Quantity increased!")
    //notify(); // Call notify after dispatch
  };

  //const notify = () => toast("Quantity increased!");

  const Decrease = (id) => {
    dispatch({ type: "Decrease", id });
  };

  return (
    <div className='cart-product'>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '16px' }} 
      />
      <div className='detail'>
        <h4 className='product-name'>{product.name}</h4>
        <h4 className='product-price'>₹{product.price}</h4>
        <div className='button-container'>
          <button className='button' onClick={() => Decrease(product.id)}>-</button>
          <span className='quantity'>{product.quantity}</span>
          <button className='button' onClick={() => Increase(product.id)}>+</button>
        </div>
        <button className='remove-button' onClick={() => dispatch({ type: "Remove", id: product.id })}>
          Remove
        </button>
        <ToastContainer
          // autoClose={3000}
          // position="top-right"
          // hideProgressBar={false}
          // newestOnTop={false}
          // closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
        />
      </div>
    </div>
  );
}

export default CartProduct;
