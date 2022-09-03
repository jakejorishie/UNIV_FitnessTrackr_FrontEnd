import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import NavBar from './Components/Navbar';
import Logout from './Components/Logout';
import Activities from './Components/Activities';
import Routines from './Components/Routines';
import MyRoutines from './Components/MyRoutines';
import AddActivities from './Components/AddActivities';

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
            <Route
               path='/Activities'
               element={
                  <Activities token={token} setToken={setToken} />
               }
            />
            <Route
               path='/Routines'
               element={
                  <Routines token={token} setToken={setToken} />
               }
            />
             <Route
               path='/MyRoutines'
               element={
                  <MyRoutines token={token} setToken={setToken} />
               }
            />
            <Route path='/AddActivities' element={<AddActivities token={token} setToken={setToken} />} />
         </Routes>
      </>
   );
}

export default App;
