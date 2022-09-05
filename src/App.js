import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import NavBar from './Components/Navbar';
import Activities from './Components/Activities';
import Routines from './Components/Routines';
import MyRoutines from './Components/MyRoutines';
import AddActivities from './Components/AddActivities';
import AddRoutines from './Components/AddRoutines';
import { fetchAllActivities } from './api';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
   const fetchActivities = async () => {
      const response = await fetchAllActivities();
      setActivities(response);
   };
   fetchActivities();
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
            
            <Route
               path='/Activities'
               element={
                  <Activities isLoggedIn={isLoggedIn} activities={activities} setActivities={setActivities} />
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


             <Route
               path='/AddActivities'
               element={
                  <AddActivities isLoggedIn={isLoggedIn} activities={activities} setActivities={setActivities} />
               }
            />
         
         <Route
               path='/AddRoutines'
               element={
                  <AddRoutines isLoggedIn={isLoggedIn} />
               }
            />

         </Routes>
      </>
   );
}

export default App;
