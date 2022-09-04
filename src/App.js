import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import NavBar from './Components/Navbar';
// import Logout from './Components/Logout';
import Activities from './Components/Activities';
import Routines from './Components/Routines';
import MyRoutines from './Components/MyRoutines';
import AddActivities from './Components/AddActivities';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

   return (
      <>
         <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
         <Routes>
            <Route exact path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />}>
               {' '}
            </Route>
            <Route path='/Register' element={<Register setIsLoggedIn={setIsLoggedIn} />} />
            <Route
               path='/Login'
               element={<Login  setIsLoggedIn={setIsLoggedIn} />}
            />
            {/* <Route
               path='Logout'
               element={<Logout isLoggedIn={isLoggedIn} />}
            /> */}
            <Route
               path='/Activities'
               element={
                  <Activities isLoggedIn={isLoggedIn} />
               }
            />
            <Route
               path='/Routines'
               element={
                  <Routines isLoggedIn={isLoggedIn}  />
               }
            />
             <Route
               path='/MyRoutines'
               element={
                  <MyRoutines isLoggedIn={isLoggedIn} />
               }
            />
            <Route path='/AddActivities' element={<AddActivities setIsLoggedIn={setIsLoggedIn} /> } />
         </Routes>
      </>
   );
}

export default App;