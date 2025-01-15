// //import React, { useEffect, useRef } from "react";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
// } from "@mui/material";
// import { createProduct } from "../../Redux/crudSlice";

// import "./AddProduct.css";

// //product_create

// const AddProduct = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [image, setImage] = React.useState(null);

//   const handleUpload = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("image", image);

//     dispatch(createProduct(formData)).then(() => {
//       navigate("/allproducts");
//     });
//   };

//   const notify = () => toast("your Product added successfully!");

//   return (
//     <Box className="productt">
//       <form onSubmit={handleSubmit(onSubmit)} className="formm">
//         <Box className="anim">
//           <Typography className="h1">
//             <h3>Add your product here</h3>
//           </Typography>
//         </Box>

//         <TextField
//           margin="normal"
//           type="text"
//           variant="outlined"
//           placeholder="Title"
//           fullWidth
//           {...register("title", { required: "Title is required" })}
//           error={!!errors.title}
//         />

//         <TextField
//           margin="normal"
//           type="text"
//           variant="outlined"
//           placeholder="Description"
//           fullWidth
//           {...register("description", { required: "Description is required" })}
//           error={!!errors.description}
//         />

//         <input
//           type="file"
//           id="image-upload"
//           accept="image/*"
//           onChange={handleUpload}
//           style={{ display: "none" }}
//         />
//         <label htmlFor="image-upload">
//           <Button
//             component="span"
//             variant="outlined"
//             fullWidth
//           >
//             {image ? image.name : "Choose Image"}
//           </Button>
//         </label>

//         {/* Added spacing */}
//         <Box mt={2} />

//         <Button
//           fullWidth
//           type="submit"
//           onClick={notify}
//         >
//           Submit
//         </Button>
//         <ToastContainer />
//       </form>
//     </Box>
//   );
// };

// export default AddProduct;



import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { createProduct } from "../../Redux/crudSlice";

import "./AddProduct.css";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [image, setImage] = React.useState(null);

  // File upload handler with validation
  const handleUpload = (e) => {
    const file = e.target.files[0];
    const validImageTypes = ["image/jpeg", "image/png"];

    if (file && validImageTypes.includes(file.type)) {
      setImage(file);
    } else {
      toast.error("Invalid file type. Please upload an image file (jpg or png).");
      e.target.value = ""; // Reset the input field
    }
  };

  // Submit handler
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", image);

    dispatch(createProduct(formData)).then(() => {
      toast.success("Your product was added successfully!");
      navigate("/allproducts");
    });
  };

  return (
    <Box className="productt">
      <form onSubmit={handleSubmit(onSubmit)} className="formm">
        <Box className="anim">
          <Typography className="h1">
            <h3>Add your product here</h3>
          </Typography>
        </Box>

        {/* Title input */}
        <TextField
          margin="normal"
          type="text"
          variant="outlined"
          placeholder="Title"
          fullWidth
          {...register("title", { required: "Title is required" })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        {/* Description input */}
        <TextField
          margin="normal"
          type="text"
          variant="outlined"
          placeholder="Description"
          fullWidth
          {...register("description", { required: "Description is required" })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />

        {/* File input */}
        <input
          type="file"
          id="image-upload"
          accept="image/jpeg,image/png" // Restrict file selection
          onChange={handleUpload}
          style={{ display: "none" }}
        />
        <label htmlFor="image-upload">
          <Button
            component="span"
            variant="outlined"
            fullWidth
          >
            {image ? image.name : "Choose Image"}
          </Button>
        </label>

        <Box mt={2} />

        {/* Submit button */}
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>

        <ToastContainer />
      </form>
    </Box>
  );
};

export default AddProduct;
