import { useState } from "react";
import AdminSidebar from "./components/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            {/* Content */}
            <main
                className={`
          flex-1 bg-gray-100 p-6 transition-all duration-300
          ${collapsed ? "ml-20" : "ml-64"}
        `}
            >
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;