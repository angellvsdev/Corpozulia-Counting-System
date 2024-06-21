import React from "react";
import AdminProfileBody from '../../components/AdminProfileBody'
import UserProfileHeader from '../../components/UserProfileHeader'

const UserProfile = () =>{
        return (
        <div className="profile_view">
            <UserProfileHeader headerIcon="fa-solid fa-user-tie" />
            <AdminProfileBody />
        </div>
    );
}
export default UserProfile;