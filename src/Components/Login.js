import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const APIURL = 'https://fitnesstrac-kr.herokuapp.com/api';

async function loginUser({ username, password }) {
   return fetch(`${APIURL}/users/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         username: username,
         password: password,
      }),
   })
      .then((response) => response.json())
      .then((result) => {
         return result;
      })
      .catch(console.error);
}
export default function Login({ setToken }) {
   const [username, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const history = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = await loginUser({
         username,
         password,
      });

      const token = data.token;
      localStorage.setItem('token', token);
      setToken(token);
      history('/Homepage');
   };

   return (
      <Grid container component='main' sx={{ height: '100vh' }}>
         <CssBaseline />
         <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
               backgroundImage:
                  'url(https://source.unsplash.com/random/?Fitness/w=500)',
               backgroundRepeat: 'no-repeat',
               backgroundColor: (t) =>
                  t.palette.mode === 'light'
                     ? t.palette.grey[50]
                     : t.palette.grey[900],
               backgroundSize: 'cover',
               backgroundPosition: 'center',
            }}
         />
         <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square>
            <Box
               sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}>
               <Typography component='h1' variant='h5'>
                  Sign in
               </Typography>
               <Box
                  component='form'
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}>
                  <TextField
                     margin='normal'
                     required
                     fullWidth
                     id='outlined'
                     label='Enter Username'
                     value={username}
                     onChange={(e) => setUserName(e.target.value)}
                  />
                  <TextField
                     margin='normal'
                     required
                     fullWidth
                     name='password'
                     label='Password'
                     type='password'
                     id='outlined-required'
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <FormControlLabel
                     control={
                        <Checkbox value='remember' color='primary' />
                     }
                     label='Remember me'
                  />
                  <Button
                     type='submit'
                     fullWidth
                     variant='contained'
                     sx={{ mt: 3, mb: 2 }}>
                     Sign In
                  </Button>
                  <Grid container>
                     <Grid>
                        <Link href='/Register' variant='body2'>
                           {"Don't have an account? Sign Up"}
                        </Link>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Grid>
      </Grid>

      // <div
      //   style={{
      //     display: "flex",
      //     justifyContent: "center",
      //     position: "fixed",
      //     top: "25%",
      //     left: "42%",
      //   }}
      // >
      //   <form onSubmit={handleSubmit}>
      //     <h1> Log in</h1>
      //     <label>
      //       <p>Username</p>
      //       <input type="text" onChange={(e) => setUserName(e.target.value)} />
      //     </label>
      //     <div>
      //       <label>
      //         <p>Password</p>
      //         <input
      //           type="password"
      //           onChange={(e) => setPassword(e.target.value)}
      //         />
      //       </label>
      //     </div>

      //     <div
      //       style={{
      //         position: "relative",
      //         top: "5%",
      //         left: "5%",
      //       }}
      //     >
      //       <button type="login"
      //       style={{
      //           display: "flex",
      //           justifyContent: "center",
      //           position: "fixed",
      //           left: "45%",
      //         }}>Log In</button>
      //       <div>
      //         <Link to="/register"
      //         style={{
      //           display: "flex",
      //           justifyContent: "center",
      //           position: "fixed",
      //           top: "57%",
      //           left: "41%",
      //         }}>
      //           Dont have an account?
      //         </Link>
      //       </div>
      //     </div>
      //   </form>
      // </div>
   );
}
