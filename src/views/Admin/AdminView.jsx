import { React } from "react";
import AdminLayout from "../../components/AdminLayout";
import AdminRoutes from "../../components/AdminRoutes";
import "../../components/profile-dashboard-components/admin-view.css";
import { useUser } from "../../UserContext";
const AdminView = () => {
    const { user } = useUser();
    if (user.roles === "ADMIN") {
        return (
            <AdminLayout>
                <AdminRoutes />
            </AdminLayout>

        )
    } else {
        return(
            <div>
                <h1>
                    Acceso no autorizado
                </h1>
            </div>
        )
    }
}

export default AdminView;