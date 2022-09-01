import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import NavBar from './Components/Navbar';
import Logout from './Components/Logout';

function App() {
   const [token, setToken] = useState('');
   useEffect(() => {
      const myToken = localStorage.getItem('token');
      setToken(myToken);
   }, []);

   return (
      <>
         <NavBar token={token} />
         <Routes>
            <Route exact path='/' element={<Login />}>
               {' '}
            </Route>
            <Route path='/Register' element={<Register />} />
            <Route
               path='/Login'
               element={<Login token={token} setToken={setToken} />}
            />
            <Route
               path='Logout'
               element={<Logout token={token} setToken={setToken} />}
            />
         </Routes>
      </>
   );
}

export default App;
