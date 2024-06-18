import { React, useState } from "react";
import UserMenu from "../../components/UserMenu";
import AdminProfile from "../../components/profile-dashboard-components/AdminProfile";
import "../../components/profile-dashboard-components/admin-view.css";

const AdminView = (props) => ( 
    <>
        <AdminProfile />
        <UserMenu />
    </>
)

export default AdminView;