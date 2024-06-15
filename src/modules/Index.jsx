import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "../modules/views/Homepage/HomePage.jsx";
import SignUp from './views/SignUpForm/SignUp.jsx';
import Login from '../modules/views/LoginForm/Login.jsx';
import AdminView from './views/Admin/AdminView.jsx';
import '../modules/styles/index.css';

const App = () => (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<SignUp />} />
          <Route path='/admin' element={<AdminView />} />
        </Routes>
    </BrowserRouter>
  )

export default App;