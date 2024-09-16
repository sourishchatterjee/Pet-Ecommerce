// import React, { useContext } from 'react';
// import "./ProductCurd.css";
// import { CartContext } from '../Features/ContextProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

// function NewProducts({ product }) {
//     const { dispatch } = useContext(CartContext);

//     const handleAddToCart = () => {
//         dispatch({ type: "Add", product: product });
//         //alert(` your product is added to cart!`); // Add alert for adding to cart
    
//         notifySuccess();
//     };
//     const notifySuccess = () => {
//         toast.success('Operation successful!', {
//           position: toast.POSITION.TOP_RIGHT,
//           autoClose: 3000,
//         });
//       };

//     return (
//         <div className="mini-card">
//             <img className="mini-card-image" 
//                  src={product.image} 
//                  alt="Product image" />
//             <div className="mini-card-content">
//                 <h5 className="mini-card-title">{product.name}</h5>
//                 <h5 className="mini-card-price">${product.price}</h5>
//                 <button className="mini-card-button" onClick={handleAddToCart}>
//                     Add to Cart
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default NewProducts;


//////

// import React, { useContext } from 'react';
// import "./ProductCurd.css";
// import { CartContext } from '../Features/ContextProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function NewProducts({ product }) {
//     const { dispatch } = useContext(CartContext);

//     const handleAddToCart = () => {
//         dispatch({ type: "Add", product: product });
//         notifySuccess(); // Call the success notification
//     };

//     const notifySuccess = () => {
//         toast.success('Product added to cart successfully!', {
//             position: "top-right", // Corrected position string
//             autoClose: 3000,
//         });
//     };

//     return (
//         <div className="mini-card">
//             <img className="mini-card-image" 
//                  src={product.image} 
//                  alt="Product image" />
//             <div className="mini-card-content">
//                 <h5 className="mini-card-title">{product.name}</h5>
//                 <h5 className="mini-card-price">${product.price}</h5>
//                 <button className="mini-card-button" onClick={handleAddToCart}>
//                     Add to Cart
//                 </button>
//             </div>
//             {/* Include ToastContainer to render the toasts */}
//             <ToastContainer />
//         </div>
//     );
// }

// export default NewProducts;

////////////////

// import React, { useContext } from 'react';
// import "./ProductCurd.css";
// import { CartContext } from '../Features/ContextProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function NewProducts({ product }) {
//     const { dispatch } = useContext(CartContext);

//     const handleAddToCart = () => {
//         dispatch({ type: "Add", product: product });
//         notify(); // Call the success notification
//     };

    
//     const notify = () => toast("Product added to cart!");

//     return (
//         <div className="mini-card">
//             <img className="mini-card-image" 
//                  src={product.image} 
//                  alt="Product image" />
//             <div className="mini-card-content">
//                 <h5 className="mini-card-title">{product.name}</h5>
//                 <h5 className="mini-card-price">₹{product.price}</h5>
//                 <button className="mini-card-button" onClick={handleAddToCart}>
//                     Add to Cart
//                 </button>
//             </div>
//             <ToastContainer 
//                 autoClose={3000} // Adjust the duration of the toast notification
//                 position="top-right" // Change the position to top-right
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover // Ensure toast is above other elements
//             />
//         </div>
//     );
// }

// export default NewProducts;


import React, { useContext } from 'react';
import "./ProductCurd.css";
import { CartContext } from '../Features/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewProducts({ product }) {
    const { dispatch } = useContext(CartContext);

    const handleAddToCart = () => {
        dispatch({ type: "Add", product: product });
        notify(); 
    };

    const notify = () => toast("Product added to cart!");

    return (
        <div className="mini-card">
            <img className="mini-card-image" 
                 src={product.image} 
                 alt="Product image" />
                 
            <div className="mini-card-content">
                <h5 className="mini-card-title">{product.name}</h5>
                <h5 className="mini-card-price">₹{product.price}</h5>
        
                <button className="mini-card-button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
            <ToastContainer 
                autoClose={600}
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable={false} // Disable draggable
                pauseOnHover={false} // Disable pause on hover
                pauseOnFocusLoss={false} 
            />
        </div>
    );
}

export default NewProducts;
