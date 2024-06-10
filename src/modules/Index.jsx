import React from 'react';
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
