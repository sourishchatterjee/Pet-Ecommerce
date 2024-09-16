


// /////

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { showAllProducts, DeleteProduct } from "../../Redux/crudSlice";
// import { Link } from "react-router-dom";
// import "./AllProducts.css";
// import SweetAlertComponent from "../SweetAlert/SweetAlertComponent";


// function AllProducts() {
//   const [currentPage, setCurrentPage] = useState(1); // State for the current page
//   const [isDelete, setIsDelete] = useState(false);

//   const dispatch = useDispatch();
//   const { Allproducts, totalPages } = useSelector((state) => state.crudKey);

//   const delete_func = (_id) => {
//     if (_id) {
//       dispatch(DeleteProduct(_id)).then(() => {
//         dispatch(showAllProducts({ page: currentPage, perPage: 10 }));
//       });
//     }
//   };

//   useEffect(() => {
//     dispatch(showAllProducts({ page: currentPage, perPage: 10 }));
//   }, [dispatch, currentPage]);

//   const handleChange = (event, pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       <div className="product-list">
//         {Allproducts?.map((item) => (
//           <div key={item._id} className="card-body">
//             <img
//               src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${item?.image}`} 
//               alt={item.title}
//               className="card-img-top"
//             />
//             <h6 className="card-subtitle">{item.title}</h6>
//             <p className="card-description">{item.description}</p>
//             <button className="btn btn-delete" onClick={() => delete_func(item._id)}>
//               Delete
//             </button>
//             <Link to={`/Edit/${item._id}`} className="btn btn-edit">
//               Edit
//             </Link>
//           </div>
//         ))}
//         {isDelete && (
//           <SweetAlertComponent
//             confirm={delete_func}
//             cancel={() => setIsDelete(false)}
//             title={"Are you sure?"}
//             subtitle={"You will not be able to recover"}
//           />
//         )}
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'brown', padding: '10px' }}>
//         <div className="pagination-container">
//           <button
//             onClick={() => handleChange(null, Math.max(1, currentPage - 1))}
//             style={{ padding: '8px 16px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '0 10px' }}
//           >
//             Previous
//           </button>
//           <span style={{ color: 'white', fontSize: '16px' }}>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => handleChange(null, Math.min(totalPages, currentPage + 1))}
//             style={{ padding: '8px 16px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '0 10px' }}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AllProducts;



// ////




// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { showAllProducts, DeleteProduct } from "../../Redux/crudSlice";
// import { Link } from "react-router-dom";
// import SweetAlertComponent from "../SweetAlert/SweetAlertComponent";
// import "./AllProducts.css";

// function AllProducts() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteProductId, setDeleteProductId] = useState(null);

//   const dispatch = useDispatch();
//   const { Allproducts, totalPages } = useSelector((state) => state.crudKey);

//   const deleteProduct = (id) => {
//     if (id) {
//       dispatch(DeleteProduct(id))
//         .then(() => {
//           dispatch(showAllProducts({ page: currentPage, perPage: 10 }));
//           setDeleteProductId(null); // Close the alert after deletion
//         })
//         .catch(() => alert('Failed to delete the product.'));
//     }
//   };

//   useEffect(() => {
//     dispatch(showAllProducts({ page: currentPage, perPage: 10 }));
//   }, [dispatch, currentPage]);

//   const handlePageChange = (event, pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const fullText =   'All Products';
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % (fullText.length + 1));
//     }, 450); // Adjust speed as needed

//     return () => clearInterval(timer);
//   }, [fullText]);


//   return (
//     <>
//     <div className="heading text-center">
//       <h1 className="animation">
//         {fullText.slice(0, index)}
//         <span className="cursor">|</span>
//       </h1>
//     </div>
//       <div className="product-list">
//         {Allproducts?.map((item) => (
//           <div key={item._id} className="card-body">
//             <img
//               src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${item?.image}`} 
//               alt={item.title}
//               className="card-img-top"
//             />
//             <h6 className="card-subtitle">{item.title}</h6>
//             <p className="card-description">{item.description}</p>
//             <button
//               className="btn btn-delete"
//               onClick={() => setDeleteProductId(item._id)}
//             >
//               Delete
//             </button>
//             <Link to={`/Edit/${item._id}`} className="btn btn-edit">
//               Edit
//             </Link>
//           </div>
//         ))}
//         {deleteProductId && (
//           <SweetAlertComponent
//             confirm={() => deleteProduct(deleteProductId)}
//             cancel={() => setDeleteProductId(null)}
//             title="Are you sure?"
//             subtitle="You will not be able to recover this product."
//           />
//         )}
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'pink', padding: '10px' }}>
//         <div className="pagination-container">
//           <button
//             onClick={() => handlePageChange(null, Math.max(1, currentPage - 1))}
//             style={{ padding: '8px 16px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '0 10px' }}
//           >
//             Previous
//           </button>
//           <span style={{ color: 'white', fontSize: '16px' }}>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange(null, Math.min(totalPages, currentPage + 1))}
//             style={{ padding: '8px 16px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '0 10px' }}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AllProducts;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAllProducts, DeleteProduct } from "../../Redux/crudSlice";
import { Link } from "react-router-dom";
import SweetAlertComponent from "../SweetAlert/SweetAlertComponent";
import "./AllProducts.css";

function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteProductId, setDeleteProductId] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState(""); 

  const dispatch = useDispatch();
  const { Allproducts, totalPages } = useSelector((state) => state.crudKey);

  const deleteProduct = (id) => {
    if (id) {
      dispatch(DeleteProduct(id))
        .then(() => {
          dispatch(showAllProducts({ page: currentPage, perPage: 10 }));
          setDeleteProductId(null); // Close the alert after deletion
        })
        .catch(() => alert('Failed to delete the product.'));
    }
  };

  useEffect(() => {
    dispatch(showAllProducts({ page: currentPage, perPage: 10 }));
  }, [dispatch, currentPage]);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fullText = 'All Products';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (fullText.length + 1));
    }, 450); 

    return () => clearInterval(timer);
  }, [fullText]);



  const filteredProducts = Allproducts?.filter((item) =>
    item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="heading text-center">
        <h1 className="animation">
          {fullText.slice(0, index)}
          <span className="cursor">|</span>
        </h1>
      </div>

      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>

      <div className="product-list">
        {filteredProducts?.map((item) => (
          <div key={item._id} className="card-body">
            <img
              src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${item?.image}`}
              alt={item.title}
              className="card-img-top"
            />
            <h6 className="card-subtitle">{item.title}</h6>
            <p className="card-description">{item.description}</p>
            <button
              className="btn btn-delete"
              onClick={() => setDeleteProductId(item._id)}
            >
              Delete
            </button>
            <Link to={`/Edit/${item._id}`} className="btn btn-edit">
              Edit
            </Link>
          </div>
        ))}
        {deleteProductId && (
          <SweetAlertComponent
            confirm={() => deleteProduct(deleteProductId)}
            cancel={() => setDeleteProductId(null)}
            title="Are you sure?"
            subtitle="You will not be able to recover this product."
          />
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'pink', padding: '10px' }}>
        <div className="pagination-container">
          <button
            onClick={() => handlePageChange(null, Math.max(1, currentPage - 1))}
            style={{ padding: '8px 16px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '0 10px' }}
          >
            Previous
          </button>
          <span style={{ color: 'white', fontSize: '16px' }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(null, Math.min(totalPages, currentPage + 1))}
            style={{ padding: '8px 16px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '0 10px' }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
