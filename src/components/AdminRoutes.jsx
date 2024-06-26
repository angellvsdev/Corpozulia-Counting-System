import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BenefitView from '../views/Benefit/BenefitView';
import RequestView from '../views/Request/RequestView';
import InventoryView from '../views/Inventory/InventoryView';
import UserProfile from '../views/User/UserProfile';
function AdminRoutes(){
    return(
        <Routes>
          <Route path='/benefits' element={<BenefitView/>} />
          <Route path='/requests' element={<RequestView/>} />
          <Route path='/inventory' element={<InventoryView />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/' element={<UserProfile/>}/>
        </Routes>
    )
}
export default AdminRoutes;