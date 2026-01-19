import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpenText,
  ClipboardCheck,
  Compass,
  Briefcase,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


import logo from "../../../public/atp.jpeg";

const AdminSidebar = ({ collapsed, setCollapsed }) => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  const tabs = [
    { path: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "courses", label: "Courses", icon: BookOpenText },
    { path: "assessments", label: "Assessments", icon: ClipboardCheck },
    { path: "consultancy", label: "Consultancy", icon: Compass },
    { path: "opportunities", label: "Opportunities", icon: Briefcase },
    { path: "users", label: "Users", icon: Users },
    { path: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="inline-flex">
      {/* Mobile Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#7A0A0A] text-white rounded-md"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-[#7A0A0A] border-r border-[#9c1d1d] z-40
          transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* LOGO */}
        <div className="h-16 flex items-center px-4 border-b border-[#9c1d1d]">
          <img
            src={logo}
            alt="CERTIPM"
            className="w-10 h-10 rounded-full flex-shrink-0"
          />

          <div
            className={`
              ml-3 overflow-hidden transition-all duration-300
              ${collapsed ? "w-0 opacity-0" : "w-40 opacity-100"}
            `}
          >
            <p className="text-white font-bold leading-tight">
              CERTIPM <br /> Admin Panel
            </p>
          </div>
        </div>

        {/* MENU */}
        <nav className="p-3 space-y-1">
          {tabs.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileOpen(false)}
              className={`
                flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-semibold uppercase
                transition-colors
                ${location.pathname.includes(path)
                  ? "bg-[#A81414] text-white"
                  : "text-red-100 hover:bg-[#8d1313]"
                }
              `}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />

              <span
                className={`
                  overflow-hidden transition-all duration-300
                  ${collapsed ? "w-0 opacity-0" : "w-40 opacity-100"}
                `}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="absolute bottom-0 w-full border-t border-[#9c1d1d] p-3">
          {/* User */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#A81414] flex items-center justify-center text-white font-bold">
              A
            </div>

            <div
              className={`
                overflow-hidden transition-all duration-300
                ${collapsed ? "w-0 opacity-0" : "w-40 opacity-100"}
              `}
            >
              <p className="text-sm text-white font-semibold">Admin User</p>
              <p className="text-xs text-red-300">admin@certipm.com</p>
            </div>
          </div>

          {/* Logout */}
          <button onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-red-100 hover:bg-[#8d1313]">
            <LogOut className="w-5 h-5 flex-shrink-0" />

            <span
              className={`
                overflow-hidden transition-all duration-300
                ${collapsed ? "w-0 opacity-0" : "w-16 opacity-100"}
              `}
            >
              Logout
            </span>
          </button>
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex absolute -right-3 top-20 bg-[#A81414] text-white p-1 rounded-full"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </aside>
    </div>
  );
};

export default AdminSidebar;