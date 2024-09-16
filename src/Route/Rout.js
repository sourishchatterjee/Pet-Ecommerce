// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';

// import { check_token } from '../Redux/authSlice';
// import {lazy,Suspense} from "react"
// import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';


// // import Home from '../Components/Home/Home';
// // import Login from '../Components/Login/Login';
// // import Register from '../Components/Register/Register';
// // import AddProduct from '../Components/AddProduct';
// // import AllProducts from '../Components/AllProducts/AllProducts';
// // import EditProduct from '../Components/EditProduct';
// // import Profile from '../Components/Profile/Profile';

// const Home=lazy(()=>import('../Components/Home/Home'));
// const Login=lazy(()=>import("../Components/Login/Login"));
// const Register=lazy(()=>import("../Components/Register/Register"));
// const AddProduct=lazy(()=>import("../Components/AddProduct"));
// const AllProducts=lazy(()=>import("../Components/AllProducts/AllProducts"));
// const EditProduct=lazy(()=>import("../Components/EditProduct"));
// const Profile=lazy(()=>import("../Components/Profile/Profile"));




// function Rout() {

//   const dispatch=useDispatch();

//   const PublicRouteNames=[
//     {
//         path:"/register",
//         Component:<Register/>
//     },
//     {
//         path:"/login",
//         Component:<Login/>
//     }
// ];

// const PrivateRouteNames=[
//   {
//       path:"/",
//       Component:<Home/>
//   },
//   // {
//   //     path:"/about",
//   //     Component:<About/>
//   // },
//   {
//       path:"/addproduct",
//       Component:<AddProduct/>
//   },
//   {
//       path:"/allProducts",
//       Component:<AllProducts/>
//   },
//   {
//       path:"/edit/:id",
//       Component:<EditProduct/>
//   },
//   {
//     path:"/profile",
//     Component:<Profile/>
//   },
// ];

// useEffect(()=>{
//   dispatch(check_token()) 
// },[])

// function PrivateRoute({children}){
//    const token = localStorage.getItem("token")|| sessionStorage.getItem("token");

//    return token !== null && token!== undefined?(
//        children
//    ):(
//        <Navigate to="/login"/>
//    )
// }


//   return (
//     // <BrowserRouter>
//     //   {/* <Navbar /> */}
//     //   <Routes>
//     //     <Route path="/" element={<Home />} />
//     //     <Route path="/register" element={<Register />} />
//     //     <Route path="/login" element={<Login />} />
//     //     <Route path="/profile" element={<Profile />} />
//     //     <Route path="/addproduct" element={<AddProduct />} />
//     //     <Route path="/allproducts" element={<AllProducts />} /> 
//     //     <Route path="/edit/:id" element={<EditProduct />} /> 
//     //   </Routes>
//     // </BrowserRouter>


//     <>
//         <Suspense fallback={<h2>Loading...</h2>}>
//         <BrowserRouter>
//             {/* <Header/> */}
//             <Routes>
//       { PublicRouteNames?.map((route,index)=>{
//         return(
//             <Route key={index+1}
//             exact path = {route.path} element={route.Component}>
//             </Route>
//         )
//       }) }

//       { PrivateRouteNames?.map((route,index)=>{
//         return(
//             < Route key={index+2}
//             path = {route.path} 
//             element={<PrivateRoute>{route.Component}</PrivateRoute>}
//             />
//         )
//       }) }
//             </Routes>
//         </BrowserRouter>
//         </Suspense>
//         </>
//   );
// }

// export default Rout;







// import React, { useEffect, lazy, Suspense } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { check_token } from '../Redux/authSlice';
// import Header from '../ShareModules/Header';

// const Home = lazy(() => import('../Components/Home/Home'));
// const Login = lazy(() => import("../Components/Login/Login"));
// const Register = lazy(() => import("../Components/Register/Register"));
// const AddProduct = lazy(() => import("../Components/Addproduct/AddProduct"));
// const AllProducts = lazy(() => import("../Components/AllProducts/AllProducts"));
// const EditProduct = lazy(() => import("../Components/EditProducts/EditProduct"));
// const Profile = lazy(() => import("../Components/Profile/Profile"));

// function Rout() {
//   const dispatch = useDispatch();

//   const PublicRouteNames = [
//     { path: "/register", Component: <Register /> },
//     { path: "/login", Component: <Login /> }
//   ];

//   const PrivateRouteNames = [
//     { path: "/", Component: <Home /> },
//     { path: "/addproduct", Component: <AddProduct /> },
//     { path: "/allProducts", Component: <AllProducts /> },
//     { path: "/edit/:id", Component: <EditProduct /> },
//     { path: "/profile", Component: <Profile /> },
//   ];

//   useEffect(() => {
//     dispatch(check_token());
//   }, [dispatch]);

//   function PrivateRoute({ children }) {
//     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
//     return token ? children : <Navigate to="/login" />;
//   }

//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>

//       <BrowserRouter>
//       <Header/>
//         <Routes>
//           {PublicRouteNames.map((route, index) => (
//             <Route key={`public-${index}`} 
//             path={route.path} element={route.Component} />
//           ))}
//           {PrivateRouteNames.map((route, index) => (
//             <Route
//               key={`private-${index}`}
//               path={route.path}
//               element={<PrivateRoute>
//                 {route.Component}
//                 </PrivateRoute>}
//             />
//           ))}
//         </Routes>
//       </BrowserRouter>
//     </Suspense>
//   );
// }

// export default Rout;




//////////

// import React, { useEffect, lazy, Suspense } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { check_token } from '../Redux/authSlice';
// import Header from '../ShareModules/Header';
// import Footer from '../ShareModules/Footer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Home = lazy(() => import('../Components/Home/Home'));
// const Login = lazy(() => import("../Components/Login/Login"));
// const Register = lazy(() => import("../Components/Register/Register"));
// const AddProduct = lazy(() => import("../Components/Addproduct/AddProduct"));
// const AllProducts = lazy(() => import("../Components/AllProducts/AllProducts"));
// const EditProduct = lazy(() => import("../Components/EditProducts/EditProduct"));
// const Profile = lazy(() => import("../Components/Profile/Profile"));
// //const Card = lazy(()=>import("../Components/Cart/Card"))
// const ProductCard=lazy(()=>import("../Components/ProductCard/ProductCard"))
// const ContactUs= lazy(()=>import("../Components/ContactUs/ContactUs"))
// const Blog = lazy(()=>import("../Components/BlogPage/Blog"))
// const AddBlog=lazy(()=>import("../Components/BlogPage/AddBlog"))

// function Rout() {
//   const dispatch = useDispatch();
  

//   const PublicRouteNames = [
//     { path: "/register", Component: <Register /> },
//     { path: "/login", Component: <Login /> }
//   ];

//   const PrivateRouteNames = [
//     { path: "/", Component: <Home/> },
//     { path: "/addproduct", Component: <AddProduct /> },
//     { path: "/allProducts", Component: <AllProducts /> },
//     { path: "/edit/:id", Component: <EditProduct /> },
//     { path: "/profile", Component: <Profile /> },
//     { path: "/productcard", Component: <ProductCard /> },
//     { path: "/contactus", Component: <ContactUs/> },
//     { path: "/blog", Component: <Blog/> },
//     { path: "/addblog", Component: <AddBlog/> },
    
//   ];

//   useEffect(() => {
//     dispatch(check_token());
//   }, [dispatch]);

//   function PrivateRoute({ children }) {
//     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
//     return token ? children : <Navigate to="/login" />;
//   }

//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           {PublicRouteNames.map((route, index) => (
//             <Route key={`public-${index}`} path={route.path} element={route.Component} />
//           ))}
//           {PrivateRouteNames.map((route, index) => (
//             <Route
//               key={`private-${index}`}
//               path={route.path}
//               element={<PrivateRoute>{route.Component}</PrivateRoute>}
//             />
//           ))}
//         </Routes>
//         <Footer/>
//       </BrowserRouter>
//       <ToastContainer 
//                 autoClose={3000}
//                 position="top-right"
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//             />
//     </Suspense>
//   );
// }

// export default Rout;


///////

// import React, { useEffect, lazy, Suspense } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { check_token } from '../Redux/authSlice';
// import Header from '../ShareModules/Header';
// import Footer from '../ShareModules/Footer';

// const Home = lazy(() => import('../Components/Home/Home'));
// const Login = lazy(() => import("../Components/Login/Login"));
// const Register = lazy(() => import("../Components/Register/Register"));
// const AddProduct = lazy(() => import("../Components/Addproduct/AddProduct"));
// const AllProducts = lazy(() => import("../Components/AllProducts/AllProducts"));
// const EditProduct = lazy(() => import("../Components/EditProducts/EditProduct"));
// const Profile = lazy(() => import("../Components/Profile/Profile"));
// const ProductCard = lazy(() => import("../Components/ProductCard/ProductCard"));
// const ContactUs = lazy(() => import("../Components/ContactUs/ContactUs"));
// const Blog = lazy(() => import("../Components/BlogPage/Blog"));
// const AddBlog = lazy(() => import("../Components/BlogPage/AddBlog"));

// function Rout() {
//   const dispatch = useDispatch();

//   const PublicRouteNames = [
//     { path: "/register", Component: <Register /> },
//     { path: "/login", Component: <Login /> }
//   ];

//   const PrivateRouteNames = [
//     { path: "/", Component: <Home /> },
//     { path: "/addproduct", Component: <AddProduct /> },
//     { path: "/allProducts", Component: <AllProducts /> },
//     { path: "/edit/:id", Component: <EditProduct /> },
//     { path: "/profile", Component: <Profile /> },
//     { path: "/productcard", Component: <ProductCard /> },
//     { path: "/contactus", Component: <ContactUs /> },
//     { path: "/blog", Component: <Blog /> },
//     { path: "/addblog", Component: <AddBlog /> },
//   ];

//   useEffect(() => {
//     dispatch(check_token());
//   }, [dispatch]);

//   function PrivateRoute({ children }) {
//     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
//     return token ? children : <Navigate to="/login" />;
//   }

//   return (
//     <Suspense fallback={<h2>Loading...</h2>}>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           {PublicRouteNames.map((route, index) => (
//             <Route key={`public-${index}`} path={route.path} element={route.Component} />
//           ))}
//           {PrivateRouteNames.map((route, index) => (
//             <Route
//               key={`private-${index}`}
//               path={route.path}
//               element={<PrivateRoute>{route.Component}</PrivateRoute>}
//             />
//           ))}
//         </Routes>
//         <Footer />
        
//       </BrowserRouter>
//     </Suspense>
//   );
// }

// export default Rout;

//////////////////////////this is the main code----//////////////////////////////





import React, { useEffect, lazy, Suspense } from 'react';
//import styled, { keyframes } from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { check_token } from '../Redux/authSlice';
import Header from '../ShareModules/Header';
import Footer from '../ShareModules/Footer';


const Home = lazy(() => import('../Components/Home/Home'));
const Login = lazy(() => import("../Components/Login/Login"));
const Register = lazy(() => import("../Components/Register/Register"));
const AddProduct = lazy(() => import("../Components/Addproduct/AddProduct"));
const AllProducts = lazy(() => import("../Components/AllProducts/AllProducts"));
const EditProduct = lazy(() => import("../Components/EditProducts/EditProduct"));
const Profile = lazy(() => import("../Components/Profile/Profile"));
const ProductCard = lazy(() => import("../Components/ProductCard/ProductCard"));
const ContactUs = lazy(() => import("../Components/ContactUs/ContactUs"));
const Blog = lazy(() => import("../Components/BlogPage/Blog"));
const AddBlog = lazy(() => import("../Components/BlogPage/AddBlog"));



function Rout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check_token());
  }, [dispatch]);

  // Private Route component
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
  }

//   const spin = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `;

// const Spinner = styled.div`
//   border: 4px solid rgba(0, 0, 0, 0.1);
//   border-left: 4px solid #3498db;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   animation: ${spin} 1s linear infinite;
// `;


  return (

    // <Suspense fallback={<Spinner />}>
     <Suspense fallback={<h2>Loading...</h2>}>
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Private Routes */}
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/addproduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
          <Route path="/allProducts" element={<PrivateRoute><AllProducts /></PrivateRoute>} />
          <Route path="/edit/:id" element={<PrivateRoute><EditProduct /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/productcard" element={<PrivateRoute><ProductCard /></PrivateRoute>} />
          <Route path="/contactus" element={<PrivateRoute><ContactUs /></PrivateRoute>} />
          <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
          <Route path="/addblog" element={<PrivateRoute><AddBlog /></PrivateRoute>} />
          
          {/* Redirect any other route to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default Rout;




///////////////////////above is the main code------//////////////////




// import React, { useEffect, lazy, Suspense } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { check_token } from '../Redux/authSlice';
// import Header from '../ShareModules/Header';
// import Footer from '../ShareModules/Footer';

// const Home = lazy(() => import('../Components/Home/Home'));
// const Login = lazy(() => import("../Components/Login/Login"));
// const Register = lazy(() => import("../Components/Register/Register"));
// const AddProduct = lazy(() => import("../Components/Addproduct/AddProduct"));
// const AllProducts = lazy(() => import("../Components/AllProducts/AllProducts"));
// const EditProduct = lazy(() => import("../Components/EditProducts/EditProduct"));
// const Profile = lazy(() => import("../Components/Profile/Profile"));
// const ProductCard = lazy(() => import("../Components/ProductCard/ProductCard"));
// const ContactUs = lazy(() => import("../Components/ContactUs/ContactUs"));
// const Blog = lazy(() => import("../Components/BlogPage/Blog"));
// const AddBlog = lazy(() => import("../Components/BlogPage/AddBlog"));

// function Rout() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(check_token());
//   }, [dispatch]);

//   // Private Route component
//   function PrivateRoute({ children }) {
//     const token = localStorage.getItem("token") || sessionStorage.getItem("token");
//     return token ? children : <Navigate to="/login" />;
//   }

//   const spin = keyframes`
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   `;

//   const Spinner = styled.div`
//     border: 4px solid rgba(0, 0, 0, 0.1);
//     border-left: 4px solid #3498db;
//     border-radius: 50%;
//     width: 50px;
//     height: 50px;
//     animation: ${spin} 1s linear infinite;
//   `;

//   return (
//     <Suspense fallback={<Spinner />}>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Default route - redirects to login if not authenticated */}
//           <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />

//           {/* Private Routes */}
//           <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
//           <Route path="/addproduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
//           <Route path="/allProducts" element={<PrivateRoute><AllProducts /></PrivateRoute>} />
//           <Route path="/edit/:id" element={<PrivateRoute><EditProduct /></PrivateRoute>} />
//           <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
//           <Route path="/productcard" element={<PrivateRoute><ProductCard /></PrivateRoute>} />
//           <Route path="/contactus" element={<PrivateRoute><ContactUs /></PrivateRoute>} />
//           <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
//           <Route path="/addblog" element={<PrivateRoute><AddBlog /></PrivateRoute>} />

//           {/* Redirect any other route to login */}
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </Suspense>
//   );
// }

// export default Rout;
