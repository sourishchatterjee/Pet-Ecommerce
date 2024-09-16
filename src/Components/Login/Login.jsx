// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from '../../Redux/authSlice';
// import "./Login.css"
// import {  toast,ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



// function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [user, setUser] = useState({ email: '', password: '' });
//   const [error, setError] = useState({});

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const errors = {};
//     if (!user.email) errors.email = 'Email is required';
//     if (!user.password) errors.password = 'Password is required';
//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validate();
//     if (Object.keys(errors).length === 0) {
//       dispatch(login(user))
//         .then((result) => {
//           if (result.payload.status === 200 ) {
            
//             toast("your login successfull")
//             navigate('/');

        
//           } else {
//             alert('Login failed.');
//           }
//         })
//         .catch(() => alert('An error occurred.'));
//     } else {
//       setError(errors);
//     }
//   };
//   const notify = () => toast("your login successfull!");


//   return (
//     <div className='Login-form'>
//       <form onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <div className='input-field'>
//           <label htmlFor='email'>Email:</label>
//           <input
//             type='email'
//             id='email'
//             name='email'
//             value={user.email}
//             onChange={handleChange}
//             required
//           />
//           {error.email && <span className='error'>{error.email}</span>}
//         </div>
//         <div className='input-field'>
//           <label htmlFor='password'>Password:</label>
//           <input
//             type='password'
//             id='password'
//             name='password'
//             value={user.password}
//             onChange={handleChange}
//             required
//           />
//           {error.password && <span className='error'>{error.password}</span>}
//         </div>
//         <button type='submit' onClick={notify}>Login</button>
//         <button>  <Link to='/register'>Redirect to Register</Link></button>  

//         {/* onClick={notify} */}
//       <ToastContainer
//       autoClose={800}
//       position="top-right"
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       draggable={false} // Disable draggable
//       pauseOnHover={false} // Disable pause on hover
//       pauseOnFocusLoss={false} 
//       />
//       </form>
   
//     </div>
//   );
// }

// export default Login;






////// the main is in the above////

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/authSlice';
import "./Login.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!user.email) errors.email = 'Email is required';
    if (!user.password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      dispatch(login(user))
        .then((result) => {
          if (result.payload.status === 200) {
            toast.success("Your login was successful!");

            // Slight delay to give the user a feel of the toast and quick navigation
            setTimeout(() => {
              navigate('/');
            }, 500); // Adjust the delay as needed (500ms should be quick enough)
            
          } else {
            toast.error('Login failed.');
          }
        })
        .catch(() => toast.error('An error occurred.'));
    } else {
      setError(errors);
    }
  };

  return (
    <div className='Login-form'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className='input-field'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={user.email}
            onChange={handleChange}
            required
          />
          {error.email && <span className='error'>{error.email}</span>}
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={user.password}
            onChange={handleChange}
            required
          />
          {error.password && <span className='error'>{error.password}</span>}
        </div>
        <button type='submit'>Login</button>
        <button>
          <Link to='/register'>Redirect to Register</Link>
        </button>
      </form>

      <ToastContainer
        autoClose={500} // Faster auto-close
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

export default Login;
