

// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../Redux/authSlice';
// import './Navbar.css';
// import { fetchUserDetails } from '../Redux/authSlice';
// import { profile_Url } from '../Helper/Helper';

// function Header() {

//   const { userDetails, upload_status } = useSelector((state) => state.contents);


//   const isLogined = useSelector((state) => state.contents.isLogined);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [storedName, setStoredName] = useState('');
//   const [profileImage, setProfileImage] = useState('');

//   useEffect(() => {
//     const name = localStorage.getItem('name');
//     const profile_pic = localStorage.getItem('profileImage');//
//     setStoredName(name || '');
//     setProfileImage(profile_pic || "");
//   }, [isLogined]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('name'); // Clear the name from localStorage on logout
//     localStorage.removeItem('profileImage'); // Clear the profile image from localStorage on logout
//     navigate('/login');
//   };


//   const profilePicUrl = profile_Url(userDetails?.profile_pic);

//   return (
//     <header className="navbar">
//       <div className="navbar-brand">
//         <NavLink to="/">
//           <img src="./image8.png" alt="Pet Shop Logo" className="logo-image" />
//         </NavLink>
//       </div>

//       <nav className="navbar-links">
//         <NavLink to="/">Home</NavLink>
//         {isLogined && (
//           <>
//             <NavLink to="/addproduct">Add Product</NavLink>
//             <NavLink to="/allProducts">All Products</NavLink>
//           </>
//         )}
//         <NavLink to="/contactus">Contact</NavLink>
//       </nav>

//       <div className="navbar-auth">
//         {isLogined ? (
//           <>
//             <a href='/profile'>
//               {profileImage && (
//                 <img
//                   //src={`https://wtsacademy.dedicateddevelopers.us/uploads/${profileImage}`} 
//                   src={profilePicUrl}
//                   alt="Profile"
//                   className="profile-image"
//                 />
//               )}
//             </a>
//             <span>Welcome, {storedName}</span>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <NavLink to="/register">Register</NavLink>
//             <NavLink to="/login">Login</NavLink>
//           </>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../Redux/authSlice';
// import { profile_Url } from '../Helper/Helper';
// import './Navbar.css';

// function Header() {
//   const { userDetails, upload_status, isLogined } = useSelector((state) => state.contents);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [storedName, setStoredName] = useState('');
//   const [profileImage, setProfileImage] = useState('');

//   useEffect(() => {
//     const name = localStorage.getItem('name');
//     const profile_pic = localStorage.getItem('profileImage');
//     setStoredName(name || '');
//     setProfileImage(profile_pic || '');
//   }, [isLogined]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('name'); // Clear the name from localStorage on logout
//     localStorage.removeItem('profileImage'); // Clear the profile image from localStorage on logout
//     navigate('/login');
//   };

//   const profilePicPath = userDetails?.profile_pic || '';
//   const profilePicUrl = profile_Url(userDetails?.profile_pic );

//   console.log('Profile Picture Path:', profilePicPath);
//   console.log('Profile Picture URL:', profilePicUrl);

//   return (
//     <header className="navbar">
//       <div className="navbar-brand">
//         <NavLink to="/">
//           <img src="./image8.png" alt="Pet Shop Logo" className="logo-image" />
//         </NavLink>
//       </div>

//       <nav className="navbar-links">
//         <NavLink to="/">Home</NavLink>
//         {isLogined && (
//           <>
//             <NavLink to="/addproduct">Add Product</NavLink>
//             <NavLink to="/allProducts">All Products</NavLink>
//           </>
//         )}
//         <NavLink to="/contactus">Contact</NavLink>
//       </nav>

//       <div className="navbar-auth">
//         {isLogined ? (
//           <>
//             <a href='/profile'>
//               <img
//                 src={profilePicUrl || 'https://via.placeholder.com/150'}
//                 alt="Profile"
//                 className="profile-image"
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/150';
//                   console.error('Error loading image:', e.target.src);
//                 }}
//               />
//             </a>
//             <span>Welcome {storedName}</span>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <NavLink to="/register">Register</NavLink>
//             <NavLink to="/login">Login</NavLink>
//           </>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../Redux/authSlice';
// import { profile_Url } from '../Helper/Helper';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Box } from '@mui/material';
// //import './Navbar.css'; // Remove this if you're replacing all custom CSS with MUI

// function Header() {
//   const { userDetails, isLogined } = useSelector((state) => state.contents);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [storedName, setStoredName] = useState('');
//   const [profileImage, setProfileImage] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);

//   useEffect(() => {
//     const name = localStorage.getItem('name');
//     const profile_pic = localStorage.getItem('profileImage');
//     setStoredName(name || '');
//     setProfileImage(profile_pic || '');
//   }, [isLogined]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('name');
//     localStorage.removeItem('profileImage');
//     navigate('/login');
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const profilePicUrl = profile_Url(userDetails?.profile_pic || profileImage);

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="logo">
//           <NavLink to="/">
//             <img src="./image8.png" alt="Pet Shop Logo" style={{ width: 40, height: 40 }} />
//           </NavLink>
//         </IconButton>

//         <Box sx={{ flexGrow: 1 }}>
//           <Button color="inherit" component={NavLink} to="/">Home</Button>
//           {isLogined && (
//             <>
//               <Button color="inherit" component={NavLink} to="/addproduct">Add Product</Button>
//               <Button color="inherit" component={NavLink} to="/allProducts">All Products</Button>
//             </>
//           )}
//           <Button color="inherit" component={NavLink} to="/contactus">Contact</Button>
//         </Box>

//         <Box>
//           {isLogined ? (
//             <>
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 onClick={handleMenu}
//               >
//                 <Avatar alt="Profile Image" src={profilePicUrl || 'https://via.placeholder.com/150'} />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleLogout}>Logout</MenuItem>
//               </Menu>
//               <Typography variant="h6" component="div" sx={{ ml: 2 }}>
//                 Welcome, {storedName}
//               </Typography>
//             </>
//           ) : (
//             <>
//               <Button color="inherit" component={NavLink} to="/register">Register</Button>
//               <Button color="inherit" component={NavLink} to="/login">Login</Button>
//             </>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../Redux/authSlice';
// import { profile_Url } from '../Helper/Helper';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Box } from '@mui/material';

// function Header() {
//   const { userDetails, isLogined } = useSelector((state) => state.contents);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [storedName, setStoredName] = useState('');
//   const [profileImage, setProfileImage] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);

//   useEffect(() => {
//     const name = localStorage.getItem('name');
//     const profile_pic = localStorage.getItem('profileImage');
//     setStoredName(name || '');
//     setProfileImage(profile_pic || '');
//   }, [isLogined]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('name');
//     localStorage.removeItem('profileImage');
//     navigate('/login');
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const profilePicUrl = profile_Url(userDetails?.profile_pic || profileImage);
//   console.log('Profile Picture URL:', profilePicUrl); // Debugging URL

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#ffc0cb' }}>
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="logo" component={NavLink} to="/">
//           <img src="./image8.png" alt="Pet Shop Logo" style={{ width: 100, height: 60 }} />
//         </IconButton>

//         <Box sx={{ flexGrow: 1 }}>
//           <Button color="inherit" component={NavLink} to="/">Home</Button>
//           {isLogined && (
//             <>
//               <Button color="inherit" component={NavLink} to="/addproduct">Add Product</Button>
//               <Button color="inherit" component={NavLink} to="/allProducts">All Products</Button>
//             </>
//           )}
//           <Button color="inherit" component={NavLink} to="/contactus">Contact</Button>
//         </Box>

//         <Box>
//           {isLogined ? (
//             <>
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 onClick={handleMenu}
//               >
//                 <Avatar
//                   alt="Profile Image"
//                   src={profilePicUrl || 'https://via.placeholder.com/150'}
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/150';
//                     console.error('Error loading image:', e.target.src);
//                   }}
//                 />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose} component={NavLink} to="/profile">Profile</MenuItem>
//                 <MenuItem onClick={handleLogout}>Logout</MenuItem>
//               </Menu>
//               <Typography variant="h6" component="div" sx={{ ml: 2 }}>
//                 Welcome, {storedName}
//               </Typography>
//             </>
//           ) : (
//             <>
//               <Button color="inherit" component={NavLink} to="/register">Register</Button>
//               <Button color="inherit" component={NavLink} to="/login">Login</Button>
//             </>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../Redux/authSlice';
// import { profile_Url } from '../Helper/Helper';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Box } from '@mui/material';

// function Header() {
//   const { userDetails, isLogined } = useSelector((state) => state.contents);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [storedName, setStoredName] = useState('');
//   const [profileImage, setProfileImage] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);

//   useEffect(() => {
//     const name = localStorage.getItem('name');
//     const profile_pic = localStorage.getItem('profileImage');
//     setStoredName(name || '');
//     setProfileImage(profile_pic || '');
//   }, [isLogined]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('name');
//     localStorage.removeItem('profileImage');
//     navigate('/login');
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const profilePicUrl = profile_Url(userDetails?.profile_pic || profileImage);
//   console.log('Profile Picture URL:', profilePicUrl); // Debugging URL

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#ffc0cb' }}>
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="logo" component={NavLink} to="/">
//           <img src="./image8.png" alt="Pet Shop Logo" style={{ width: 100, height: 60 }} />
//         </IconButton>

//         <Box sx={{ flexGrow: 1 }}>
//           <Button color="inherit" component={NavLink} to="/">Home</Button>
//           {isLogined && (
//             <>
//               <Button color="inherit" component={NavLink} to="/addproduct">Add Product</Button>
//               <Button color="inherit" component={NavLink} to="/allProducts">All Products</Button>
//             </>
//           )}
//           <Button color="inherit" component={NavLink} to="/contactus">Contact</Button>
//         </Box>

//         {isLogined && (
//           <>
//             <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 onClick={handleMenu}
//               >
//                 <Avatar
//                   alt="Profile Image"
//                   src={profilePicUrl || 'https://via.placeholder.com/150'}
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/150';
//                     console.error('Error loading image:', e.target.src);
//                   }}
//                   sx={{ width: 48, height: 48 }} // Increase size here
//                 />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose} component={NavLink} to="/profile">Profile</MenuItem>
//                 <MenuItem onClick={handleLogout}>Logout</MenuItem>
//               </Menu>
//             </Box>

//             <Typography variant="h6" component="div" sx={{ ml: 2 }}>
//               Welcome, {storedName}
//             </Typography>
//           </>
//         )}

//         {!isLogined && (
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Button color="inherit" component={NavLink} to="/register">Register</Button>
//             <Button color="inherit" component={NavLink} to="/login">Login</Button>
//           </Box>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;

/// new one one one 


////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../Redux/authSlice';
// import { profile_Url } from '../Helper/Helper';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Box } from '@mui/material';

// function Header() {
//   const { userDetails, isLogined } = useSelector((state) => state.contents);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [storedName, setStoredName] = useState('');
//   const [profileImage, setProfileImage] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);

//   useEffect(() => {
//     const name = localStorage.getItem('name');
//     const profile_pic = localStorage.getItem('profileImage');
//     setStoredName(name || '');
//     setProfileImage(profile_pic || '');
//   }, [isLogined]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('name');
//     localStorage.removeItem('profileImage');
//     navigate('/login');
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const profilePicUrl = profile_Url(userDetails?.profile_pic || profileImage);
//   console.log('Profile Picture URL:', profilePicUrl); // Debugging URL

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#ffc0cb' }}>
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="logo" component={NavLink} to="/">
//           <img src="./image8.png" alt="Pet Shop Logo" style={{ width: 100, height: 60 }} />
//         </IconButton>

//         <Box sx={{ flexGrow: 1 }}>
//           <Button color="inherit" component={NavLink} to="/">Home</Button>
//           {isLogined && (
//             <>
//               <Button color="inherit" component={NavLink} to="/addproduct">Add Product</Button>
//               <Button color="inherit" component={NavLink} to="/allProducts">All Products</Button>
//             </>
//           )}
//           <Button color="inherit" component={NavLink} to="/contactus">Contact</Button>
//         </Box>

//         {isLogined && (
//           <>
//             <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 onClick={handleMenu}
//               >
//                 <Avatar
//                   alt="Profile Image"
//                   src={profilePicUrl || 'https://via.placeholder.com/150'}
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/150';
//                     console.error('Error loading image:', e.target.src);
//                   }}
//                   sx={{ width: 48, height: 48 }} // Increase size here
//                 />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose} component={NavLink} to="/profile">Profile</MenuItem>
//                 <MenuItem onClick={handleLogout}>Logout</MenuItem>
//               </Menu>
//             </Box>

//             <Typography variant="h6" component="div" sx={{ ml: 2 }}>
//               Welcome, {storedName}
//             </Typography>
//           </>
//         )}

//         {!isLogined && (
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Button color="inherit" component={NavLink} to="/register">Register</Button>
//             <Button color="inherit" component={NavLink} to="/login">Login</Button>
//           </Box>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;





/////////////////////////////// 
///this is the main it is working // but maam said it is not up to the mark for that resons i am making it comment



// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../Redux/authSlice';
// import { profile_Url } from '../Helper/Helper';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

// function Header() {
//   const { userDetails, isLogined } = useSelector((state) => state.contents);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [storedName, setStoredName] = useState('');
//   const [profileImage, setProfileImage] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     const name = localStorage.getItem('name');
//     const profile_pic = localStorage.getItem('profileImage');
//     setStoredName(name || '');
//     setProfileImage(profile_pic || '');
//   }, [isLogined]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('name');
//     localStorage.removeItem('profileImage');
//     navigate('/login');
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const profilePicUrl = profile_Url(userDetails?.profile_pic || profileImage);

//   const menuItems = (
//     <>
//       <ListItem button component={NavLink} to="/" onClick={toggleDrawer}>
//         <ListItemText primary="Home" />
//       </ListItem>
//       {isLogined && (
//         <>
//           <ListItem button component={NavLink} to="/addproduct" onClick={toggleDrawer}>
//             <ListItemText primary="Add Product" />
//           </ListItem>
//           <ListItem button component={NavLink} to="/allProducts" onClick={toggleDrawer}>
//             <ListItemText primary="All Products" />
//           </ListItem>
//         </>
//       )}
//       <ListItem button component={NavLink} to="/contactus" onClick={toggleDrawer}>
//         <ListItemText primary="Contact" />
//       </ListItem>
//     </>
//   );

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#ffc0cb' }}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <IconButton edge="start" color="inherit" aria-label="logo" component={NavLink} to="/">
//             <img src="./image8.png" alt="Pet Shop Logo" style={{ width: 100, height: 60 }} />
//           </IconButton>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer}
//             sx={{ display: { xs: 'block', sm: 'none' }, ml: -6 }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Box>

//         <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//           <List sx={{ width: 250 }}>
//             {menuItems}
//             {isLogined && (
//               <ListItem button onClick={handleLogout}>
//                 <ListItemText primary="Logout" />
//               </ListItem>
//             )}
//           </List>
//         </Drawer>

//         <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
//           <Button color="inherit" component={NavLink} to="/" sx={{ mx: 1 }}>
//            <h4>Home</h4> 
//           </Button>
//           {isLogined && (
//             <>
//               <Button color="inherit" component={NavLink} to="/addproduct" sx={{ mx: 1 }}>
//               <h4>Add Product</h4>  
//               </Button>
//               <Button color="inherit" component={NavLink} to="/allProducts" sx={{ mx: 1 }}>
//                <h4> All Products</h4>
//               </Button>
//             </>
//           )}
//           <Button color="inherit" component={NavLink} to="/contactus" sx={{ mx: 1 }}>
//           <h4>Contact</h4>  
//           </Button>
//         </Box>

//         {isLogined && (
//           <>
//             <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
//               <IconButton edge="end" color="inherit" onClick={handleMenu}>
//                 <Avatar
//                   alt="Profile Image"
//                   src={profilePicUrl || 'https://via.placeholder.com/150'}
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/150';
//                   }}
//                   sx={{ width: 48, height: 48 }}
//                 />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose} component={NavLink} to="/profile">
//                   Profile
//                 </MenuItem>
//                 <MenuItem onClick={handleLogout}>Logout</MenuItem>
//               </Menu>
//             </Box>

//             <Typography variant="h6" component="div" sx={{ ml: 2 }}>
//               Welcome, {storedName}
//             </Typography>
//           </>
//         )}

//         {!isLogined && (
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Button color="inherit" component={NavLink} to="/register">
//               Register
//             </Button>
//             <Button color="inherit" component={NavLink} to="/login">
//               Login
//             </Button>
//           </Box>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;




// ///// the above is main///////



// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../Redux/authSlice';
// import { profile_Url } from '../Helper/Helper';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

// function Header() {
//   const { userDetails, isLogined } = useSelector((state) => state.contents);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [storedName, setStoredName] = useState('');
//   const [profileImage, setProfileImage] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     const name = localStorage.getItem('name');
//     const profile_pic = localStorage.getItem('profileImage');
//     setStoredName(name || '');
//     setProfileImage(profile_pic || '');
//   }, [isLogined]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('name');
//     localStorage.removeItem('profileImage');
//     navigate('/login');
//     window.location.reload();
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const profilePicUrl = profile_Url(userDetails?.profile_pic || profileImage);

//   // Define navigation items
//   const navItems = [
//     { name: 'Home', to: '/' },
//     { name: 'Add Product', to: '/addproduct' },
//     { name: 'All Products', to: '/allProducts' },
//     { name: 'Contact', to: '/contactus' },
//   ];

//   // Filter navigation items based on isLogined state
//   const filteredNavItems = isLogined
//     ? navItems
//     : navItems.filter((item) => item.name !== 'Add Product' && item.name !== 'All Products');

//   const menuItems = (
//     <>
//       {filteredNavItems.map((item) => (
//         <ListItem button component={NavLink} to={item.to} onClick={toggleDrawer} key={item.name}>
//           <ListItemText primary={item.name} />
//         </ListItem>
//       ))}
//       {isLogined && (
//         <ListItem button onClick={handleLogout}>
//           <ListItemText primary="Logout" />
//         </ListItem>
//       )}
//     </>
//   );

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#ffc0cb' }}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <IconButton edge="start" color="inherit" aria-label="logo" component={NavLink} to="/">
//             <img src="./image8.png" alt="Pet Shop Logo" style={{ width: 100, height: 60 }} />
//           </IconButton>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer}
//             sx={{ display: { xs: 'block', sm: 'none' }, ml: -6 }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Box>

//         <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//           <List sx={{ width: 250 }}>
//             {menuItems}
//           </List>
//         </Drawer>

//         <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
//           {filteredNavItems.map((item) => (
//             <Button color="inherit" component={NavLink} to={item.to} sx={{ mx: 1 }} key={item.name}>
//               <h4>{item.name}</h4>
//             </Button>
//           ))}
//         </Box>

//         {isLogined && (
//           <>
//             <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
//               <IconButton edge="end" color="inherit" onClick={handleMenu}>
//                 <Avatar
//                   alt="Profile Image"
//                   src={profilePicUrl || 'https://via.placeholder.com/150'}
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/150';
//                   }}
//                   sx={{ width: 48, height: 48 }}
//                 />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose} component={NavLink} to="/profile">
//                   Profile
//                 </MenuItem>
//                 <MenuItem onClick={handleLogout}>Logout</MenuItem>
//               </Menu>
//             </Box>

//             <Typography variant="h6" component="div" sx={{ ml: 2 }}>
//               Welcome, {storedName}
//             </Typography>
//           </>
//         )}

//         {!isLogined && (
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Button color="inherit" component={NavLink} to="/register">
//               Register
//             </Button>
//             <Button color="inherit" component={NavLink} to="/login">
//               Login
//             </Button>
//           </Box>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;



//// with toggle///




// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../Redux/authSlice';
// import { profile_Url } from '../Helper/Helper';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close'; // Import Close Icon
// import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

// function Header() {
//   const { userDetails, isLogined } = useSelector((state) => state.contents);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [storedName, setStoredName] = useState('');
//   const [profileImage, setProfileImage] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     const name = localStorage.getItem('name');
//     const profile_pic = localStorage.getItem('profileImage');
//     setStoredName(name || '');
//     setProfileImage(profile_pic || '');
//   }, [isLogined]);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem('name');
//     localStorage.removeItem('profileImage');
//     navigate('/login');
//     window.location.reload();
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const profilePicUrl = profile_Url(userDetails?.profile_pic || profileImage);

//   // Define navigation items
//   const navItems = [
//     { name: 'Home', to: '/' },
//     { name: 'Add Product', to: '/addproduct' },
//     { name: 'All Products', to: '/allProducts' },
//     { name: 'Contact', to: '/contactus' },
//   ];

//   // Filter navigation items based on isLogined state
//   const filteredNavItems = isLogined
//     ? navItems
//     : navItems.filter((item) => item.name !== 'Add Product' && item.name !== 'All Products');

//   const menuItems = (
//     <>
//       {filteredNavItems.map((item) => (
//         <ListItem button component={NavLink} to={item.to} onClick={toggleDrawer} key={item.name}>
//           <ListItemText primary={item.name} />
//         </ListItem>
//       ))}
//       {isLogined && (
//         <ListItem button onClick={handleLogout}>
//           <ListItemText primary="Logout" />
//         </ListItem>
//       )}
//     </>
//   );

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#ffc0cb' }}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <IconButton edge="start" color="inherit" aria-label="logo" component={NavLink} to="/">
//             <img src="./image8.png" alt="Pet Shop Logo" style={{ width: 100, height: 60 }} />
//           </IconButton>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer}
//             sx={{ display: { xs: 'block', sm: 'none' }, ml: -6 }}
//           >
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//         </Box>

//         <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//           <List sx={{ width: 250 }}>
//             {menuItems}
//           </List>
//         </Drawer>

//         <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
//           {filteredNavItems.map((item) => (
//             <Button color="inherit" component={NavLink} to={item.to} sx={{ mx: 1 }} key={item.name}>
//               <h4>{item.name}</h4>
//             </Button>
//           ))}
//         </Box>

//         {isLogined && (
//           <>
//             <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
//               <IconButton edge="end" color="inherit" onClick={handleMenu}>
//                 <Avatar
//                   alt="Profile Image"
//                   src={profilePicUrl || 'https://via.placeholder.com/150'}
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/150';
//                   }}
//                   sx={{ width: 48, height: 48 }}
//                 />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose} component={NavLink} to="/profile">
//                   Profile
//                 </MenuItem>
//                 <MenuItem onClick={handleLogout}>Logout</MenuItem>
//               </Menu>
//             </Box>

//             <Typography variant="h6" component="div" sx={{ ml: 2 }}>
//               Welcome, {storedName}
//             </Typography>
//           </>
//         )}

//         {!isLogined && (
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Button color="inherit" component={NavLink} to="/register">
//               Register
//             </Button>
//             <Button color="inherit" component={NavLink} to="/login">
//               Login
//             </Button>
//           </Box>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// // export default Header

/** */

import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';
import { profile_Url } from '../Helper/Helper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; 
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import './Navbar.css'; 

function Header() {
  const { userDetails, isLogined } = useSelector((state) => state.contents);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storedName, setStoredName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem('name');
    const profile_pic = localStorage.getItem('profileImage');
    setStoredName(name || '');
    setProfileImage(profile_pic || '');
  }, [isLogined]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('name');
    localStorage.removeItem('profileImage');
    navigate('/login');
    window.location.reload();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const profilePicUrl = profile_Url(userDetails?.profile_pic || profileImage);

  // Define navigation items------>
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Add Product', to: '/addproduct' },
    { name: 'All Products', to: '/allProducts' },
    { name: 'Contact', to: '/contactus' },
  ];

  // Filter navigation items based on isLogined state
  const filteredNavItems = isLogined
    ? navItems
    : navItems.filter((item) => item.name !== 'Add Product' && item.name !== 'All Products');

  const menuItems = (
    <>
      {filteredNavItems.map((item) => (
        <ListItem button component={NavLink} to={item.to} onClick={toggleDrawer} key={item.name}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
      {isLogined && (
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      )}
    </>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffc0cb' }}>
      <Toolbar sx={{ display: 'flex',
         justifyContent: 'space-between' 
         }}>
        <Box sx={{ display: 'flex',
           alignItems: 'center' }}
           >
          <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="logo" 
          component={NavLink} to="/">
            
            <img src="./image8.png" alt="Pet Shop Logo" 
            style={{ width: 74, height: 55 }} />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', sm: 'none' }, ml: -3.8}}
          >
            {drawerOpen ? (
              <CloseIcon className="close-icon-button" /> 
            ) : (
              <MenuIcon />
            )}
          </IconButton>
        </Box>

        <Drawer anchor="left" 
        open={drawerOpen} 
        onClose={toggleDrawer} 
        className="drawer"
        > 

          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer}
            className="close-icon-button" 
          >
            <CloseIcon />
          </IconButton>
          
          <List sx={{ width: 240 }}>
            {menuItems}
          </List>
        </Drawer>

         {/* <Box sx={{ display: { xs: 'none', sm: 'flex' },
         justifyContent: 'center',
          flexGrow: 1 }}>
          {filteredNavItems.map((item) => (
            <Button color="inherit" component={NavLink} to={item.to} sx={{ mx: 1 }} key={item.name}>
              <h5>{item.name}</h5>
            </Button>
          ))}
        </Box>  */}

<Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', flexGrow: 2 }}>
  {filteredNavItems.map((item) => (
    <Button color="inherit" component={NavLink} to={item.to} sx={{ mx: 0.1 }} key={item.name}>
      <h5>{item.name}</h5>
    </Button>
  ))}
</Box>


        {/* <div className="box-container">
  {filteredNavItems.map((item) => (
    <NavLink to={item.to} key={item.name} className="nav-button">
      <h6>{item.name}</h6>
    </NavLink>
  ))}
</div> */}


        {isLogined && (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
              <IconButton edge="end" color="inherit" onClick={handleMenu}>
                <Avatar
                  alt="Profile Image"
                  src={profilePicUrl || 'https://via.placeholder.com/150'}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                  sx={{ width: 46, height: 46 }}
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={NavLink} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>

            <Typography variant="h8" component="div" sx={{ ml: 1 }}>
              Welcome, {storedName}
            </Typography>
          </>
        )}

        {!isLogined && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" component={NavLink} to="/register">
              Register
            </Button>
            <Button color="inherit" component={NavLink} to="/login">
              Login
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;




/** */
