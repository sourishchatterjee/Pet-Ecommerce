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
                 alt="Product-Image" />
                 
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
                draggable={false} 
                pauseOnHover={false} 
                pauseOnFocusLoss={false} 
            />
        </div>
    );
}

export default NewProducts;
