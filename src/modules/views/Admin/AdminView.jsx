import { React} from "react";
import AdminLayout from "../../components/AdminLayout";
import AdminRoutes from "../../components/AdminRoutes";
import "../../components/profile-dashboard-components/admin-view.css";

const AdminView = (props) => ( 
    <AdminLayout>
        <AdminRoutes/>
    </AdminLayout>
)

export default AdminView;