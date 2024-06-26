import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./views/Homepage/HomePage.jsx";
import SignUp from './views/SignUpForm/SignUp.jsx';
import Login from './views/LoginForm/Login.jsx';
import AdminView from './views/Admin/AdminView.jsx';
import UserMockTest from './views/MockTest/UserMockTest.jsx';
import ItemListMock from './views/MockTest/ItemListMock.jsx';
import UserProfile from './views/User/UserProfile.jsx';
import UserView from './views/User/UserView.jsx';
import BenefitView from './views/Benefit/BenefitView.jsx';
import RequestView from './views/Request/RequestView.jsx';
import InventoryView from './views/Inventory/InventoryView.jsx';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<SignUp />} />
          <Route path='/admin/*' element={<AdminView />} />
          <Route path='/user' element={<UserView />} />
          <Route path='/user/profile' element={<UserProfile/>} />
        </Routes>
    </BrowserRouter>
  )

export default App;