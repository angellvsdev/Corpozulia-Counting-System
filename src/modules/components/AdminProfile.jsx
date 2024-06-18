import React from "react";
import UserProfileHeader from "./UserProfileHeader";
import AdminProfileBody from "./AdminProfileBody";
import "../styles/components-styles/AdminProfile.css";


const AdminProfile = (props) => (
    <>
        <div className="profile_view">
            <UserProfileHeader headerIcon="fa-solid fa-user-tie" />
            <AdminProfileBody />
        </div>
    </>
)

export default AdminProfile;