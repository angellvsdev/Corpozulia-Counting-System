import React from "react";
import UserMenu from "./UserMenu";
function AdminLayout({children}){
    return(
        <div>
            <UserMenu/>
            {children}
        </div>
    )
}
export default AdminLayout;