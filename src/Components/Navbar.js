import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = ({ token, posts, setpostShown, username }) => {
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
                  {!token ? (
                     <>
                        <Button href='#' color='inherit'>
                           Routines
                        </Button>

                        <Button href='#' color='inherit'>
                           Activities
                        </Button>
                     </>
                  ) : (
                     <>
                        <Button href='#' color='inherit'>
                           Home
                        </Button>
                        <Button href='#' color='inherit'>
                           Routines
                        </Button>
                        <Button href='#' color='inherit'>
                           My Routines
                        </Button>
                        <Button href='#' color='inherit'>
                           Activities
                        </Button>
                        <Button href='/Logout' color='inherit'>
                           Logout
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

export default NavBar;
