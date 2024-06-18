import { React} from "react";
import UserMenu from "../../components/UserMenu";
import AdminProfile from "../../components/AdminProfile";
import "../../styles/admin-view.css";
const AdminView = (props) => ( 
    <>
        <AdminProfile />
        <UserMenu />
    </>
)

export default AdminView;