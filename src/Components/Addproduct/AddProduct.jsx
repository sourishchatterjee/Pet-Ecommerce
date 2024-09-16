import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { createProduct } from "../../Redux/crudSlice";

import "./AddProduct.css";

//product_create

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = React.useState(null);

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", image);

    dispatch(createProduct(formData)).then(() => {
      navigate("/allproducts");
    });
  };

  const notify = () => toast("your Product added successfully!");

  return (
    <Box className="productt">
      <form onSubmit={handleSubmit(onSubmit)} className="formm">
        <Box className="anim">
          <Typography className="h1">
            <h3>Add your product here</h3>
          </Typography>
        </Box>

        <TextField
          margin="normal"
          type="text"
          variant="outlined"
          placeholder="Title"
          fullWidth
          {...register("title", { required: "Title is required" })}
          error={!!errors.title}
        />

        <TextField
          margin="normal"
          type="text"
          variant="outlined"
          placeholder="Description"
          fullWidth
          {...register("description", { required: "Description is required" })}
          error={!!errors.description}
        />

        <input
          type="file"
          id="image-upload"
          accept="image/*"
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

        {/* Added spacing */}
        <Box mt={2} />

        <Button
          fullWidth
          type="submit"
          onClick={notify}
        >
          Submit
        </Button>
        <ToastContainer />
      </form>
    </Box>
  );
};

export default AddProduct;
