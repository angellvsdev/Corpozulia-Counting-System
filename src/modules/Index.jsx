import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "../modules/views/Homepage/HomePage.jsx";
import Login from '../modules/views/Login/Login.jsx';
import SignUp from '../modules/views/SignUp/SignUp.jsx';
import '../modules/styles/index.css';

const App = () => (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  )

export default App;