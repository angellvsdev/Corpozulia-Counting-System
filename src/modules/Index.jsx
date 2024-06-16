import React from 'react';
<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Views/Homepage/HomePage';
import Login from './Views/Login/Login';
import SignUp from './Views/Login/SignUp';
import '../../modules/client-side-modules/modules-styling/index.css';
const App = () => (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
  export default App;
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "../modules/views/Homepage/HomePage.jsx";
import SignUp from './views/SignUpForm/SignUp.jsx';
import Login from '../modules/views/LoginForm/Login.jsx';
import AdminView from './views/Admin/AdminView.jsx';
import '../modules/styles/index.css';
import UserMockTest from './views/MockTest/UserMockTest.jsx';
import ItemListMock from './views/MockTest/ItemListMock.jsx';
const App = () => (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<SignUp />} />
          <Route path='/admin' element={<AdminView />} />
          <Route path='/userMock' element={<UserMockTest />} />
          <Route path='/itemsMock' element={<ItemListMock />} />

        </Routes>
    </BrowserRouter>
  )

export default App;
>>>>>>> Stashed changes
