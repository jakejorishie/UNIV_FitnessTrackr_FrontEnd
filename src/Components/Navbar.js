import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
   return (
      <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
               <Toolbar>
                  <Typography
                     variant='h6'
                     component='div'
                     sx={{ flexGrow: 1 }}>
                     Fitness Tracker
                  </Typography>
                  {isLoggedIn ? (
                     <>
                     <Button href='#' color='inherit'>
                        Home
                     </Button>
                     <Button href='/Routines' color='inherit'>
                        Routines
                     </Button>
                     <Button href='/MyRoutines' color='inherit'>
                        My Routines
                     </Button>
                     <Button href='/Activities' color='inherit'>
                        Activities
                     </Button>
                     <Button color ='inherit' href="/"
               onClick={() => {
                 localStorage.removeItem("token");
                 setIsLoggedIn(false);
               }}> 
               Logout
                     </Button>
                  </>
                  ) : (
                     <>
                        <Button href='/Routines' color='inherit'>
                           Routines
                        </Button>

                        <Button href='/Activities' color='inherit'>
                           Activities
                        </Button>

                        <Button href='/Login' color='inherit'>
                           Login
                        </Button>
                     </>
                  )}
               </Toolbar>
            </AppBar>
         </Box>
         {/* <Typography variant='h2' component='div'>
            Posts
         </Typography> */}
      </>
   );
};

export default Navbar;
