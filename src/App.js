import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  const [token, setToken] = useState("");
  useEffect(()=>{
    const myToken = localStorage.getItem("token")
    setToken(myToken)
  },[])


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
