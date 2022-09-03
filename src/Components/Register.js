import React, { useState } from 'react';
import { APIURL } from '../index';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { CssBaseline, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function Register() {
   const [username, setUserName] = useState('');
   const [password, setPassword] = useState('');
   // eslint-disable-next-line
   const [token, setToken] = useState('');
   const history = useNavigate();

   const registerUser = async (username, password) => {
      try {
         const response = await fetch(`${APIURL}/users/register`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               username: username,
               password: password,
            }),
         });
         const result = await response.json();
         console.log(result);
         return result;
      } catch (error) {
         throw error;
      }
   };

   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         const result = await registerUser(username, password);
         if (result.error) {
            throw result.error;
         }
         console.log('result', result);
         const token = result.token;
         console.log('token', token);
         console.log('setToken', setToken);
         localStorage.setItem('token', token);
         setToken(token);
         history('/Activities');
      } catch (error) {
         alert(error);
      }
   };

   return (
      <Container component='main' maxWidth='xs'>
         <CssBaseline />
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}>
            <Typography component='h1' variant='h4'>
               Create Account
            </Typography>
            <Box component='form' onSubmit={handleSubmit}>
               <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='outlined-required'
                  label='Enter Username'
                  value={username}
                  onChange={(e) =>
                     setUserName(e.target.value)
                  }></TextField>
               <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='outlined-required'
                  label='Password'
                  type='password'
                  value={password}
                  onChange={(e) =>
                     setPassword(e.target.value)
                  }></TextField>
               {/* <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='outlined-required'
                  label='Confirm Password'
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={onSubmit}></TextField> */}
               <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}>
                  Register
               </Button>
            </Box>
         </Box>
      </Container>
      // <div
      //    style={{
      //       display: 'flex',
      //       justifyContent: 'center',
      //       position: 'fixed',
      //       top: '25%',
      //       left: '43%',
      //    }}>
      //    <form onSubmit={handleSubmit}>
      //       <h2>Please Register</h2>
      //       <div>
      //          <label>
      //             <p>Username</p>
      //             <input
      //                type='text'
      //                onChange={(e) => setUserName(e.target.value)}
      //             />
      //          </label>
      //       </div>
      //       <div>
      //          <label>
      //             <p>Password</p>
      //             <input
      //                type='password'
      //                onChange={(e) => setPassword(e.target.value)}
      //             />
      //          </label>
      //       </div>
      //       <div>
      //          <label>
      //             <p>Confirm Password</p>
      //             <input
      //                type='password'
      //                onChange={(e) => setPassword(e.target.value)}
      //             />
      //          </label>
      //       </div>
      //       <div>
      //          <button type='submit'>Submit</button>
      //       </div>
      //    </form>
      // </div>
   );
}
