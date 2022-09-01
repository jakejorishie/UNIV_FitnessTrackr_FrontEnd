import React, { useState } from 'react';
import { APIURL } from '../index';

async function registerUser({ username, password }) {
   try {
      const request = await fetch(`${APIURL}/users/register`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            username: username,
            password: password,
         }),
      });
      const response = await request.json();
      return response;
   } catch (error) {
      console.error(error);
   }
}
export default function Register({ setToken }) {
   const [username, setUserName] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = await registerUser({
         username,
         password,
      });
      const token = data.data.token;
      localStorage.setItem('token', JSON.stringify(token));
      setToken(token);
   };

   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            top: '25%',
            left: '43%',
         }}>
         <form onSubmit={handleSubmit}>
            <h2>Please Register</h2>
            <div>
               <label>
                  <p>Username</p>
                  <input
                     type='text'
                     onChange={(e) => setUserName(e.target.value)}
                  />
               </label>
            </div>
            <div>
               <label>
                  <p>Password</p>
                  <input
                     type='password'
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </label>
            </div>
            <div>
               <label>
                  <p>Confirm Password</p>
                  <input
                     type='password'
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </label>
            </div>
            <div>
               <button type='submit'>Submit</button>
            </div>
         </form>
      </div>
   );
}
