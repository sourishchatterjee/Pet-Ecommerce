



// /////

// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { BsCart } from 'react-icons/bs';
// import { Menu as MenuIcon } from '@mui/icons-material';
// import { CartContext } from '../Features/ContextProvider';

// function SubNavbar() {
//   const { cart } = useContext(CartContext);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const drawer = (
//     <Box sx={{ width: 250 }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
//       <List>
//         <ListItem button component={Link} to="/blog">
//           <ListItemText primary="Blog" />
//         </ListItem>
//         <ListItem button component={Link} to="/addblog">
//           <ListItemText primary="Add Blog" />
//         </ListItem>
//         <ListItem button component={Link} to="/contactus">
//           <ListItemText primary="Contact Us" />
//         </ListItem>
//         <ListItem button component={Link} to="/productcard">
//           <ListItemText primary={`Cart (${cart.length})`} />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: '#f5f5dc', // Light cream color
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{
//             textDecoration: 'none',
//             color: '#333',
//             fontWeight: 'bold',
//             fontSize: '1.5rem',
//           }}
//         >
//           Pet-Shop
//         </Typography>
//         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 7}}>
//           <Button
//             component={Link}
//             to="/blog"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Blog
//           </Button>
//           <Button
//             component={Link}
//             to="/addblog"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Add Blog
//           </Button>
//           <Button
//             component={Link}
//             to="/contactus"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Contact Us
//           </Button>
//           <IconButton
//             component={Link}
//             to="/productcard"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//               },
//             }}
//           >
//             <Badge badgeContent={cart.length} color="secondary">
//               <BsCart />
//             </Badge>
//           </IconButton>
//         </Box>
//         <IconButton
//           edge="end"
//           color="inherit"
//           aria-label="menu"
//           sx={{ display: { xs: 'flex', md: 'none' }, marginRight: '8px' }} // Adjust the margin here
//           onClick={toggleDrawer(true)}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {drawer}
//       </Drawer>
//     </AppBar>
//   );
// }

// export default SubNavbar;



//////////////

// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { BsCart } from 'react-icons/bs';
// import { Menu as MenuIcon } from '@mui/icons-material';
// import { CartContext } from '../Features/ContextProvider';

// function SubNavbar() {
//   const { cart } = useContext(CartContext);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const drawer = (
//     <Box sx={{ width: 250 }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
//       <List>
//         <ListItem button component={Link} to="/blog">
//           <ListItemText primary="Blog" />
//         </ListItem>
//         <ListItem button component={Link} to="/addblog">
//           <ListItemText primary="Add Blog" />
//         </ListItem>
//         <ListItem button component={Link} to="/contactus">
//           <ListItemText primary="Contact Us" />
//         </ListItem>
//         <ListItem button component={Link} to="/productcard">
//           <ListItemText primary={`Cart (${cart.length})`} />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: '#f5f5dc', // Light cream color
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
//       }}
//     >
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{
//             textDecoration: 'none',
//             color: '#333',
//             fontWeight: 'bold',
//             fontSize: '1.5rem',
//           }}
//         >
//           Pet-Shop
//         </Typography>
//         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 7 }}>
//           <Button
//             component={Link}
//             to="/blog"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Blog
//           </Button>
//           <Button
//             component={Link}
//             to="/addblog"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Add Blog
//           </Button>
//           <Button
//             component={Link}
//             to="/contactus"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Contact Us
//           </Button>
//           <IconButton
//             component={Link}
//             to="/productcard"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//               },
//             }}
//           >
//             <Badge badgeContent={cart.length} color="secondary">
//               <BsCart />
//             </Badge>
//           </IconButton>
//         </Box>
//         <IconButton
//           edge="end"
//           color="inherit"
//           aria-label="menu"
//           sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }} // Align hamburger menu to the right
//           onClick={toggleDrawer(true)}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {drawer}
//       </Drawer>
//     </AppBar>
//   );
// }

// export default SubNavbar;



///////////

// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { BsCart } from 'react-icons/bs';
// import { Menu as MenuIcon } from '@mui/icons-material';
// import { CartContext } from '../Features/ContextProvider';

// function SubNavbar() {
//   const { cart } = useContext(CartContext);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const drawer = (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         <ListItem button component={Link} to="/blog">
//           <ListItemText primary="Blog" />
//         </ListItem>
//         <ListItem button component={Link} to="/addblog">
//           <ListItemText primary="Add Blog" />
//         </ListItem>
//         <ListItem button component={Link} to="/contactus">
//           <ListItemText primary="Contact Us" />
//         </ListItem>
//         <ListItem button component={Link} to="/productcard">
//           <ListItemText primary={`Cart (${cart.length})`} />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: '#f5f5dc', // Light cream color
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
//       }}
//     >
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{
//             textDecoration: 'none',
//             color: '#333',
//             fontWeight: 'bold',
//             fontSize: '1.5rem',
//           }}
//         >
//           Pet-Shop
//         </Typography>
//         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
//           <Button
//             component={Link}
//             to="/blog"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Blog
//           </Button>
//           <Button
//             component={Link}
//             to="/addblog"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Add Blog
//           </Button>
//           <Button
//             component={Link}
//             to="/contactus"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Contact Us
//           </Button>
//           <IconButton
//             component={Link}
//             to="/productcard"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//               },
//             }}
//           >
//             <Badge badgeContent={cart.length} color="secondary">
//               <BsCart />
//             </Badge>
//           </IconButton>
//         </Box>
//         <IconButton
//           edge="end"
//           color="inherit"
//           aria-label="menu"
//           sx={{ display: { xs: 'flex', md: 'none' } }}
//           onClick={toggleDrawer(true)}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {drawer}
//       </Drawer>
//     </AppBar>
//   );
// }

// export default SubNavbar;



// /////////////////


//  import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { BsCart } from 'react-icons/bs';
// import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
// import { CartContext } from '../Features/ContextProvider';

// function SubNavbar() {
//   const { cart } = useContext(CartContext);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   // Toggle the drawer's open state
//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   // Drawer content
//   const drawer = (
//     <Box
//       sx={{ width: 150 ,color:'black'}}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 1, pr: 2}}>
//         <IconButton onClick={toggleDrawer(false)}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <List>
//         <ListItem button component={Link} to="/blog">
//           <ListItemText primary="Blog" />
//         </ListItem>
//         <ListItem button component={Link} to="/contactus">
//           <ListItemText primary="Contact Us" />
//         </ListItem>
//         <ListItem button component={Link} to="/productcard">
//           <ListItemText primary={`Cart (${cart.length})`} />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: '#f5f5dc', // Light cream color
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
//       }}
//     >
//       <Toolbar sx={{ display: 'flex',
//          justifyContent: 'space-between', 
//          alignItems: 'center' 
//          }}>
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{
//             textDecoration: 'none',
//             color: '#333',
//             fontWeight: 'bold',
//             fontSize: '1.5rem',
//           }}
//         >
//           Pet-Shop
//         </Typography>
//         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
//           <Button
//             component={Link}
//             to="/blog"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Blog
//           </Button>
//           <Button
//             component={Link}
//             to="/contactus"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Contact Us
//           </Button>
//           <IconButton
//             component={Link}
//             to="/productcard"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//               },
//             }}
//           >
//             <Badge badgeContent={cart.length} color="secondary">
//               <BsCart />
//             </Badge>
//           </IconButton>
//         </Box>
//         <IconButton
//           edge="end"
//           color="inherit"
//           aria-label="menu"
//           sx={{ display: { xs: 'flex', md: 'none' } }}
//           onClick={toggleDrawer(true)}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//       <Drawer  anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {drawer}
//       </Drawer>
//     </AppBar>
//   );
// }

// export default SubNavbar;


/** */

// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { BsCart } from 'react-icons/bs';
// import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
// import { CartContext } from '../Features/ContextProvider';

// function SubNavbar() {
//   const { cart } = useContext(CartContext);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   // Toggle the drawer's open state
//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   // Drawer content
//   const drawer = (
//     <Box
//       sx={{ 
//         width: 250, 
//         color: 'white', 
//         bgcolor: 'black', // Set background color to black
//         height: '100%', // Ensure the drawer covers the full height
//       }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1, pr: 1 }}>
//         <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <List>
//         <ListItem button component={Link} to="/blog">
//           <ListItemText primary="Blog" sx={{ color: 'white' }} />
//         </ListItem>
//         <ListItem button component={Link} to="/contactus">
//           <ListItemText primary="Contact Us" sx={{ color: 'white' }} />
//         </ListItem>
//         <ListItem button component={Link} to="/productcard">
//           <ListItemText primary={`Cart (${cart.length})`} sx={{ color: 'white' }} />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: '#f5f5dc', // Light cream color
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
//       }}
//     >
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{
//             textDecoration: 'none',
//             color: '#333',
//             fontWeight: 'bold',
//             fontSize: '1.2rem',
//           }}
//         >
//           Pet-Shop
//         </Typography>
//         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
//           <Button
//             component={Link}
//             to="/blog"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Blog
//           </Button>
//           <Button
//             component={Link}
//             to="/contactus"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Contact Us
//           </Button>
//           <IconButton
//             component={Link}
//             to="/productcard"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//               },
//             }}
//           >
//             <Badge badgeContent={cart.length} color="secondary">
//               <BsCart />
//             </Badge>
//           </IconButton>
//         </Box>
//         <IconButton
//           edge="end"
//           color="inherit"
//           aria-label="menu"
//           sx={{ display: { xs: 'flex', md: 'none' } }}
//           onClick={toggleDrawer(true)}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//       <Drawer 
//         anchor="right" 
//         open={drawerOpen} 
//         onClose={toggleDrawer(false)}
//         PaperProps={{
//           sx: {
//             bgcolor: 'black', // Set drawer background color to black
//             color: 'black', // Set text color to white
//             width: 250, // Adjust the width of the drawer
//             right: '-90px' // Move the drawer further right
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </AppBar>
//   );
// }

// export default SubNavbar;

// /** */


/////////////////



















// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { BsCart } from 'react-icons/bs';
// import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
// import { CartContext } from '../Features/ContextProvider';

// function SubNavbar() {
//   const { cart } = useContext(CartContext);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   // Toggle the drawer's open state
//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   // Drawer content
//   const drawer = (
//     <Box
//       sx={{ width: 150 ,color:'black'}}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 1, pr: 2}}>
//         <IconButton onClick={toggleDrawer(false)}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <List>
//         <ListItem button component={Link} to="/blog">
//           <ListItemText primary="Blog" />
//         </ListItem>
//         <ListItem button component={Link} to="/contactus">
//           <ListItemText primary="Contact Us" />
//         </ListItem>
//         <ListItem button component={Link} to="/productcard">
//           <ListItemText primary={`Cart (${cart.length})`} />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: '#f5f5dc', // Light cream color
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
//       }}
//     >
//       <Toolbar sx={{ display: 'flex',
//          justifyContent: 'space-between', 
//          alignItems: 'center' 
//          }}>
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{
//             textDecoration: 'none',
//             color: '#333',
//             fontWeight: 'bold',
//             fontSize: '1.5rem',
//           }}
//         >
//           Pet-Shop
//         </Typography>
//         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
//           <Button
//             component={Link}
//             to="/blog"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Blog
//           </Button>
//           <Button
//             component={Link}
//             to="/contactus"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//                 color: '#333',
//               },
//               borderRadius: '20px',
//               padding: '8px 16px',
//               fontWeight: 'bold',
//             }}
//           >
//             Contact Us
//           </Button>
//           <IconButton
//             component={Link}
//             to="/productcard"
//             sx={{
//               color: '#333',
//               '&:hover': {
//                 backgroundColor: '#e0e0e0',
//               },
//             }}
//           >
//             <Badge badgeContent={cart.length} color="secondary">
//               <BsCart />
//             </Badge>
//           </IconButton>
//         </Box>
//         <IconButton
//           edge="end"
//           color="inherit"
//           aria-label="menu"
//           // sx={{ 
//           //   display: { xs: 'flex', md: 'none' },
//           //   color: 'black',  // Set the color of the hamburger icon to black
//           // }}
//           sx={{ 
//             display: { xs: 'flex', md: 'none' }, 
//             color: 'black',
//             marginLeft: 'auto' // Pushes the hamburger icon to the right
//           }}
//           onClick={toggleDrawer(true)}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//       <Drawer  anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {drawer}
//       </Drawer>
//     </AppBar>
//   );
// }

// export default SubNavbar;




/** */


import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { BsCart } from 'react-icons/bs';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { CartContext } from '../Features/ContextProvider';
import "./SubNavbar.css"


function SubNavbar() {
  const { cart } = useContext(CartContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle the drawer's open state
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Drawer content
  const drawer = (
    <Box
      sx={{ width: 150, color: 'black' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 1, pr: 2 }}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box> */}
  <div class="icon-container">
  <button class="icon-button" onclick="toggleDrawer(false)">
    <CloseIcon />
  </button>
  </div>

      <List>
        <ListItem button component={Link} to="/blog">
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component={Link} to="/contactus">
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button component={Link} to="/productcard">
          <ListItemText primary={`Cart (${cart.length})`} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#f5f5dc', // Light cream color
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <Toolbar sx={{ display: 'flex', alignItems: 'center', px: 0 }}>
        {/* Title aligned to the left */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            position: 'absolute',
            left: '0',
            marginLeft: '16px', // Adjust margin to ensure it's not too close to the edge
          }}
        >
          Pet-Shop
        </Typography>

        {/* Main content (Buttons) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, ml: 'auto' }}>
          <Button
            component={Link}
            to="/blog"
            sx={{
              color: '#333',
              '&:hover': {
                backgroundColor: '#e0e0e0',
                color: '#333',
              },
              borderRadius: '20px',
              padding: '8px 16px',
              fontWeight: 'bold',
            }}
          >
            Blog
          </Button>
          <Button
            component={Link}
            to="/contactus"
            sx={{
              color: '#333',
              '&:hover': {
                backgroundColor: '#e0e0e0',
                color: '#333',
              },
              borderRadius: '20px',
              padding: '8px 16px',
              fontWeight: 'bold',
            }}
          >
            Contact Us
          </Button>
          <IconButton
            component={Link}
            to="/productcard"
            sx={{
              color: '#333',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
            }}
          >
            <Badge badgeContent={cart.length} color="secondary">
              <BsCart />
            </Badge>
          </IconButton>
        </Box>

        {/* Hamburger icon aligned to the right */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ color: 'black' }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default SubNavbar;
