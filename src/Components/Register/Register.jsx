
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { register } from '../../Redux/authSlice';
// import "react-toastify/dist/ReactToastify.css";
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Box,
//   InputLabel,
  
// } from '@mui/material';

// function Register() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); 
  
//   const [user, setUser] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState({});
//   const [profile_pic, setProfile_pic] = useState(null);

//   const validation = () => {
//     let errors = {};
//     if (!user.first_name) errors.first_name = "First name is required";
//     if (!user.last_name) errors.last_name = "Last name is required";
//     if (!user.email) errors.email = "Email address is required";
//     if (!user.password) errors.password = "Password is required";
//     return errors;
//   };

//   const postUserData = (e) => {
//     const { name, value } = e.target;
//     setUser((prevState) => ({ ...prevState, [name]: value }));
//     setError((prevState) => ({ ...prevState, [name]: "" }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const validImageTypes = ["image/jpeg", "image/png"];

//     if (file && validImageTypes.includes(file.type)) {
//       setProfile_pic(file);
//     }else {
//       toast.error("Invalid file type. Please upload an image file (jpg or png).");
//       e.target.value = ""; // Reset the input field
//     }
//   };

  

//   const submit = (e) => {
//     e.preventDefault();
//     const errors = validation();
//     if (Object.keys(errors).length === 0) {
//       let formData = new FormData();
//       formData.append("first_name", user.first_name);
//       formData.append("last_name", user.last_name);
//       formData.append("profile_pic", profile_pic);
//       formData.append("email", user.email);
//       formData.append("password", user.password);

//       dispatch(register(formData))
//         .then((result) => {
//           if (result.payload.status === 200) {
//             navigate("/login");
//           } else {
//             console.error("Registration failed:", result.payload);
//             alert("Sorry, unable to redirect");
//           }
//         })
//         .catch((err) => {
//           console.error("An error occurred:", err);
//         });
//     } else {
//       setError(errors);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'flex-start', 
//         alignItems: 'flex-end',  
//         minHeight: '100vh',
//         backgroundImage: 'url("./image10.png")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: 2,
//       }}
//     >
//       <Container maxWidth="sm" sx={{ marginLeft: '0', marginRight: 'auto' }}>
//         <Box
//           component="form"
//           onSubmit={submit}
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             p: 4,
//             backgroundColor: 'rgba(255, 255, 255, 0.7)', 
//             borderRadius: 2,
//             boxShadow: 5,
//           }}
//         >
//           <Typography variant="h5" component="h6" gutterBottom>
//             Welcome Chef!
//           </Typography>
//           <Typography variant="h5" component="h6" gutterBottom>
//             Register
//           </Typography>

//           <TextField
//             fullWidth
//             margin="normal"
//             label="First Name"
//             name="first_name"
//             value={user.first_name}
//             onChange={postUserData}
//             error={Boolean(error.first_name)}
//             helperText={error.first_name}
//             variant="outlined"
//             required
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Last Name"
//             name="last_name"
//             value={user.last_name}
//             onChange={postUserData}
//             error={Boolean(error.last_name)}
//             helperText={error.last_name}
//             variant="outlined"
//             required
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Email"
//             name="email"
//             value={user.email}
//             onChange={postUserData}
//             error={Boolean(error.email)}
//             helperText={error.email}
//             variant="outlined"
//             required
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Password"
//             name="password"
//             type="password"
//             value={user.password}
//             onChange={postUserData}
//             error={Boolean(error.password)}
//             helperText={error.password}
//             variant="outlined"
//             required
//           />

//           <Box sx={{ width: '100%', mt: 2 }}>
//             <InputLabel htmlFor="profile_pic">Upload Image</InputLabel>
//             <input
//               type="file"
//               id="profile_pic"
//               name="profile_pic"
//               onChange={handleImageUpload}
//               style={{ marginTop: '10px' }}
//             />
//           </Box>

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3 }}
//           >
//             Submit
//           </Button>

//           <Button
//             fullWidth
//             variant="outlined"
//             color="secondary"
//             sx={{ mt: 2 }}
//             component={Link}
//             to="/login"
//           >
//             Login
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Register;


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/authSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  InputLabel,
} from "@mui/material";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [profile_pic, setProfile_pic] = useState(null);

  const validation = () => {
    let errors = {};
    if (!user.first_name.trim()) errors.first_name = "First name is required";
    if (!user.last_name.trim()) errors.last_name = "Last name is required";
    if (!user.email.trim()) errors.email = "Email address is required";
    if (!user.password.trim()) errors.password = "Password is required";
    return errors;
  };

  const postUserData = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
    setError((prevState) => ({ ...prevState, [name]: "" }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const validImageTypes = ["image/jpeg", "image/png"];

    if (file && validImageTypes.includes(file.type)) {
      setProfile_pic(file);
    } else {
      toast.error("Invalid file type. Please upload an image file (jpg or png).");
      e.target.value = ""; // Reset the input field
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const errors = validation();
    if (Object.keys(errors).length === 0) {
      let formData = new FormData();
      formData.append("first_name", user.first_name);
      formData.append("last_name", user.last_name);
      formData.append("profile_pic", profile_pic);
      formData.append("email", user.email);
      formData.append("password", user.password);

      dispatch(register(formData))
        .then((result) => {
          if (result.payload?.status === 200) {
            toast.success("Registration successful! Redirecting to login...");
            setTimeout(() => navigate("/login"), 2000);
          } else {
            toast.error("Registration failed. Please try again.");
          }
        })
        .catch((err) => {
          toast.error("An error occurred during registration.");
          console.error("Error:", err);
        });
    } else {
      setError(errors);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        minHeight: "100vh",
        backgroundImage: "url('./image10.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 2,
      }}
    >
      <Container maxWidth="sm" sx={{ marginLeft: "0", marginRight: "auto" }}>
        <Box
          component="form"
          onSubmit={submit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: 2,
            boxShadow: 5,
          }}
        >
          <Typography variant="h5" component="h6" gutterBottom>
            Welcome Chef!
          </Typography>
          <Typography variant="h5" component="h6" gutterBottom>
            Register
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            name="first_name"
            value={user.first_name}
            onChange={postUserData}
            error={Boolean(error.first_name)}
            helperText={error.first_name}
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            name="last_name"
            value={user.last_name}
            onChange={postUserData}
            error={Boolean(error.last_name)}
            helperText={error.last_name}
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={user.email}
            onChange={postUserData}
            error={Boolean(error.email)}
            helperText={error.email}
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={user.password}
            onChange={postUserData}
            error={Boolean(error.password)}
            helperText={error.password}
            variant="outlined"
            required
          />

          <Box sx={{ width: "100%", mt: 2 }}>
            <InputLabel htmlFor="profile_pic">Upload Image</InputLabel>
            <input
              type="file"
              id="profile_pic"
              name="profile_pic"
              onChange={handleImageUpload}
              style={{ marginTop: "10px" }}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Submit
          </Button>

          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            sx={{ mt: 2 }}
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </Box>
        <ToastContainer />
      </Container>
    </Box>
  );
}

export default Register;
