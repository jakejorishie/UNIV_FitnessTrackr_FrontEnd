import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
   const [token, setToken] = useState('');
   useEffect(() => {
      const myToken = localStorage.getItem('token');
      setToken(myToken);
   }, []);

   return (
      <>
         <Routes>
            <Route
               path='/register'
               element={<Register setToken={setToken} />}
            />
            <Route
               path='/login'
               element={<Login setToken={setToken} />}
            />
         </Routes>
      </>
   );
}

export default App;
