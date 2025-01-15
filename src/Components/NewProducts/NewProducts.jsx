// import React, { useContext } from 'react';
// import "./ProductCurd.css";
// import { CartContext } from '../Features/ContextProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function NewProducts({ product }) {
//     const { dispatch } = useContext(CartContext);

//     const handleAddToCart = () => {
//         dispatch({ type: "Add", product: product });
//         notify(); 
//     };

//     const notify = () => toast("Product added to cart!");

//     return (
//         <div className="mini-card">
//             <img className="mini-card-image" 
//                  src={product.image} 
//                  alt="Product-Image" />
                 
//             <div className="mini-card-content">
//                 <h5 className="mini-card-title">{product.name}</h5>
//                 <h5 className="mini-card-price">₹{product.price}</h5>
        
//                 <button className="mini-card-button" onClick={handleAddToCart}>
//                     Add to Cart
//                 </button>
//             </div>
//             <ToastContainer 
//                 autoClose={600}
//                 position="top-right"
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 draggable={false} 
//                 pauseOnHover={false} 
//                 pauseOnFocusLoss={false} 
//             />
//         </div>
//     );
// }

// export default NewProducts;




/*** */
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
        <>
            {/* ToastContainer is moved outside the card container */}
            <ToastContainer
                autoClose={600}
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable={false}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                style={{ zIndex: 9999 }} // Ensure it stays above other elements
            />

            <div className="mini-card">
                <img className="mini-card-image"
                    src={product.image}
                    alt="Product-Image" />
                 
                <div className="mini-card-content">
                    <h5 className="mini-card-title">{product.name}</h5>
                    <h5 className="mini-card-price">₹{product.price}</h5>
            
                    <button className="mini-card-button" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
}

export default NewProducts;



// import React, { useContext } from 'react';
// import "./ProductCurd.css";
// import { CartContext } from '../Features/ContextProvider'; // Ensure this context is correctly set up
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function NewProducts({ product }) {
//     // Accessing the cart state and dispatch function from CartContext
//     const { state, dispatch } = useContext(CartContext);

//     // Check if the product is already in the cart
//     const isProductInCart = state.cart && state.cart.some((item) => item.id === product.id);

//     const handleAddToCart = () => {
//         if (isProductInCart) {
//             // Show message if the product is already in the cart
//             toast("This product is already in your cart!");
//         } else {
//             dispatch({ type: "ADD", payload: product }); // Dispatch action to add product
//             toast("Product added to cart!");
//         }
//     };

//     return (
//         <>
//             {/* ToastContainer is moved outside the card container */}
//             <ToastContainer
//                 autoClose={600}
//                 position="top-right"
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 draggable={false}
//                 pauseOnHover={false}
//                 pauseOnFocusLoss={false}
//                 style={{ zIndex: 9999 }} // Ensure it stays above other elements
//             />

//             <div className="mini-card">
//                 <img className="mini-card-image"
//                     src={product.image}
//                     alt="Product-Image" />
                 
//                 <div className="mini-card-content">
//                     <h5 className="mini-card-title">{product.name}</h5>
//                     <h5 className="mini-card-price">₹{product.price}</h5>
            
//                     <button className="mini-card-button" onClick={handleAddToCart}>
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default NewProducts;



