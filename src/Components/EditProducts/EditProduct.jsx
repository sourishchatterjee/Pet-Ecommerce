
/////////////////////

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { edit_product, updateProduct } from "../../Redux/crudSlice";
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

// const EditProduct = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(edit_product(id));
//   }, [dispatch, id]);

//   const { editStudent } = useSelector((state) => state.crudKey);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const [imagePreview, setImagePreview] = useState();

//   useEffect(() => {
//     if (editStudent) {
//       setValue("title", editStudent.title);
//       setValue("description", editStudent.description);
//       if (editStudent.image) {
//         setImagePreview(
//           `https://wtsacademy.dedicateddevelopers.us/uploads/product/${editStudent?.image}`
//         );
//       }
//     }
//   }, [editStudent, setValue]);

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     if (data.image.length > 0) {
//       formData.append("image", data.image[0]);
//     }
//     formData.append("id", id);

//     dispatch(updateProduct(formData)).then(() => {
//       //alert("Edit successful");
//       navigate("/allproducts");
//     });
//   };

//   const handleImageChange = (event) => {
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const notify = () => toast("Edit successful!");

//   return (
//     <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit Product</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div style={{ marginBottom: '16px' }}>
//           <label style={{ display: 'block', marginBottom: '8px' }}>Title</label>
//           <input
//             type="text"
//             {...register("title", { required: "Title is required" })}
//             style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//           {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
//         </div>
//         <div style={{ marginBottom: '16px' }}>
//           <label style={{ display: 'block', marginBottom: '8px' }}>Description</label>
//           <textarea
//             {...register("description", { required: "Description is required" })}
//             style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//           {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
//         </div>
//         <div style={{ marginBottom: '16px' }}>
//           <label style={{ display: 'block', marginBottom: '8px' }}>Upload Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             {...register("image")}
//             onChange={handleImageChange}
//             style={{ display: 'block', marginBottom: '8px' }}
//           />
//           {imagePreview && (
//             <img
//               src={imagePreview}
//               alt="Preview"
//               style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }}
//             />
//           )}
//         </div>
//         <div>
//           <button
//             type="submit"
//             onClick={notify}
//             style={{
//               width: '100%',
//               padding: '12px',
//               backgroundColor: '#007bff',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '4px',
//               fontSize: '1rem',
//               cursor: 'pointer',
//             }}
//           >
//             Submit
//           </button>
//         </div>
//         <ToastContainer />
//       </form>
//     </div>
//   );
// };

// export default EditProduct;


/////////////////////////////
//////this is the main//////


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { edit_product, updateProduct } from "../../Redux/crudSlice";
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./Edit.css"


// const EditProduct = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(edit_product(id));
//   }, [dispatch, id]);

//   const { editStudent } = useSelector((state) => state.crudKey);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const [imagePreview, setImagePreview] = useState();

//   useEffect(() => {
//     if (editStudent) {
//       setValue("title", editStudent.title);
//       setValue("description", editStudent.description);
//       if (editStudent.image) {
//         setImagePreview(
//           `https://wtsacademy.dedicateddevelopers.us/uploads/product/${editStudent?.image}`
//         );
//       }
//     }
//   }, [editStudent, setValue]);

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     if (data.image.length > 0) {
//       formData.append("image", data.image[0]);
//     }
//     formData.append("id", id);

//     dispatch(updateProduct(formData)).then(() => {
//       navigate("/allproducts");
//     });
//   };

//   const handleImageChange = (event) => {
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const notify = () => toast("Edit successful!");

//   return (
//     <div className="edit-product-container">
//       <div className="edit-product-form">
//         <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit Product</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div style={{ marginBottom: '16px' }}>
//             <label style={{ display: 'block', marginBottom: '8px' }}>Title</label>
//             <input
//               type="text"
//               {...register("title", { required: "Title is required" })}
//               style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//             />
//             {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
//           </div>
//           <div style={{ marginBottom: '16px' }}>
//             <label style={{ display: 'block', marginBottom: '8px' }}>Description</label>
//             <textarea
//               {...register("description", { required: "Description is required" })}
//               style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//             />
//             {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
//           </div>
//           <div style={{ marginBottom: '16px' }}>
//             <label style={{ display: 'block', marginBottom: '8px' }}>Upload Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               {...register("image")}
//               onChange={handleImageChange}
//               style={{ display: 'block', marginBottom: '8px' }}
//             />
//             {imagePreview && (
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }}
//               />
//             )}
//           </div>
//           <div>
//             <button
//               type="submit"
//               onClick={notify}
//               style={{
//                 width: '100%',
//                 padding: '12px',
//                 backgroundColor: '#007bff',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '4px',
//                 fontSize: '1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               Submit
//             </button>
//           </div>
//           <ToastContainer 
//           autoClose={800}
//           position="top-right"
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           draggable={false} // Disable draggable
//           pauseOnHover={false} // Disable pause on hover
//           pauseOnFocusLoss={false} 
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProduct;

///this is main///


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { edit_product, updateProduct } from "../../Redux/crudSlice";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Edit.css";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(edit_product(id));
  }, [dispatch, id]);

  const { editStudent } = useSelector((state) => state.crudKey);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [imagePreview, setImagePreview] = useState();
  const notify = () => toast("Product updated successfully!")
      


  useEffect(() => {
    if (editStudent) {
      setValue("title", editStudent.title);
      setValue("description", editStudent.description);
      if (editStudent.image) {
        setImagePreview(
          `https://wtsacademy.dedicateddevelopers.us/uploads/product/${editStudent?.image}`
        );
      }
    }
  }, [editStudent, setValue]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.image.length > 0) {
      formData.append("image", data.image[0]);
    }
    formData.append("id", id);

    dispatch(updateProduct(formData)).then(() => {
      // toast.success("Product updated successfully!", {
      //   position: "top-right",
      //   autoClose: 3000, // Close after 3 seconds
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: false,
      //   draggable: false,
      //   progress: undefined,
      //   theme: "light",
      // });
      //  notify();

      navigate("/allproducts");
    });
  };

  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setImagePreview(URL.createObjectURL(file));
    }
  };
  

  return (
    <div className="edit-product-container">
      <div className="edit-product-form">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              style={{ width: '85%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>Description</label>
            <textarea
              {...register("description", { required: "Description is required" })}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={handleImageChange}
              style={{ display: 'block', marginBottom: '8px' }}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }}
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              style={{
                width: '90%',
                padding: '12px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
           onClick={notify}  >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer
        autoClose={800}
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
    </div>
  );
};

export default EditProduct;
